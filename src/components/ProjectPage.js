import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { TextCard, SectionCard } from "./Home";
import "../styles/ProjectPage.scss";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [text, setText] = useState(null);
  const [link, setLink] = useState(null);
  // const location = useLocation()
  // console.log(location);
  // console.log(projectId);
  useEffect(() => {
    const fetchText = async () => {
      const res = await fetch(`/text/${projectId}.txt`);
      const txt = (await res.text()).replace(/\r\n/g, "\n").split("\n");
      if(txt[1].includes("<link>")) {
        let split = txt[1].split("<link>");
        txt[1] = split[0];
        const regex = /<linktext>(.*?)<\/linktext>/g;
        const linkText = split[2].match(regex)[0].substring(10).slice(0, -11);
        const leftOver = split[2].split("</linktext>")[1];
        const lnk = [split[1], linkText];
        setLink(lnk);
        txt[2] = leftOver;
      }
      setText(txt);
    };
    fetchText();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <h1 className="title">{text && text[0]}</h1>
      <Image
        src={`/img/${projectId}-project.png`}
        className="project-image"
      ></Image>
      <TextCard>
        {text && link ? <>
        {text[1]}
        <a href={link[0]} target="_blank" rel="noopener noreferrer">{link[1]}</a>
        {text[2]}
        </> : <>{text && text[1]}</>}
      </TextCard>
      <Link to={"/"} className="empty-link">
        <SectionCard>Back to Home</SectionCard>
      </Link>
    </div>
  );
};

export default ProjectPage;
