import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "../styles/Home.scss";

const Section = (props) => {
  const {title, id} = props;
  return (<h1 id={id} className="title">
        {title}
  </h1>);
}

const Home = () => {
  const [text, setText] = useState({});
  const sections = [
    "about",
    "experience",
    "clubs",
    "coursework",
    "skills",
    "work",
    "education",
    "contact",
  ];
  const projects = [
    "Bass Pro Shops",
    "Bus Ticket Scraper",
    "Johnny Flores Campaign Website",
    "Rank My Ranch",
    "SecondThought",
  ];

  useEffect(() => {
    const fetchText = async () => {
      const textData = {};
      for (const section of sections) {
        const res = await fetch(`/text/${section}.txt`);
        const txt = await res.text();
        console.log(txt);
        textData[section] = txt;
      }
      setText(textData);
    };
    fetchText();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="flex flex-row justify-content-center gap-5 align-items-center">
        <p className="about home-text ps-3 pe-3 me-5">{text["about"]}</p>
        <Image src="/img/portrait.png" className="ms-5"></Image>
      </div>
      <Section title="Projects - click for more info" id="projects" />
      <div className="projects">
        {projects.map((project) => {
          let identifier = project.split(" ").join("-").toLowerCase();
          // console.log(proj);
          return (
            <ProjectCard
              key={identifier}
              title={project}
              image={identifier}
              link={identifier}
              className="project"
            ></ProjectCard>
          );
        })}
      </div>
      <Section title="Experience in Design" id="experience" />
    </div>
  );
};

export default Home;
