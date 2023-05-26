import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "../styles/Home.scss";

const Section = (props) => {
  const { title, id } = props;
  return (
    <h1 id={id} className="title">
      {title}
    </h1>
  );
};

const Card = (props) => {
  const { className } = props;
  return <div className={"home-text card " + className}>{props.children}</div>;
};

const TextCard = (props) => {
  return (
    <Card className={props.className}>
      <p>{props.children}</p>
    </Card>
  );
};

const ListCard = (props) => {
  const { items } = props;
  return (
    <div className="flex flex-row justify-content-center">
      <Card className={"list-card " + props.className}>
        <ul>
          {items &&
            items.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        </ul>
      </Card>
    </div>
  );
};

const SectionCard = (props) => {
  const { title, id, className } = props;
  return (
    <div className="flex flex-row justify-content-center align-items-center">
      <div className={`section-card ${className}`}>
        <h1 id={id} className="section-card-text">
          {title ?? props.children}
        </h1>
      </div>
    </div>
  );
};

const Experience = (props) => {
  const { header, date, bullets, className } = props;
  const [leftHeader, rightHeader] = header.split(" - ");
  return (
    <div className={`experience ${className}`}>
      {header && date && bullets && (
        <>
          <h3 className="experience-header">
            {leftHeader}
            <span className="experience-right-header">
              {rightHeader ? " - " + rightHeader : ""}
            </span>
          </h3>
          <p className="experience-text">
            {date}
          </p>
            <ul className="experience-text">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
        </>
      )}
    </div>
  );
};

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
        textData[section] = txt;
      }
      textData["experience"] = textData["experience"].split("Instagram");
      textData["clubs"] = textData["clubs"].split("\n");
      textData["coursework"] = textData["coursework"].split("\n");
      textData["skills"] = textData["skills"].split("\n");
      textData["work"] = textData["work"]
        .replace(/\r\n/g, "\n")
        .split("\n*\n")
        .map((item) => {
          const items = item.split("\n");
          const obj = {};
          obj["header"] = items[0];
          obj["date"] = items[1];
          obj["bullets"] = items.slice(2);
          return obj;
        });
      textData["education"] = textData["education"]
        .replace(/\r\n/g, "\n")
        .split("\n*\n")
        .map((item) => {
          const items = item.split("\n");
          const obj = {};
          obj["header"] = items[0];
          obj["date"] = items[1];
          obj["bullets"] = items.slice(2);
          return obj;
        });
      // console.log(textData["work"]);
      setText(textData);
    };
    fetchText();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="flex flex-row justify-content-center gap-5 align-items-center">
        <TextCard className="about">{text["about"]}</TextCard>

        <Image src="/img/portrait.png" className="portrait-img"></Image>
      </div>
      <Section title="Projects - click for more info" id="projects" />
      <div className="projects">
        {projects.map((project) => {
          let identifier = project.split(" ").join("-").toLowerCase();
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
      <div className="flex flex-row justify-content-center gap-3 align-items-start">
        <Image src="/img/experience.png" className="experience-img" />
        <TextCard className="ms-5 exp-card">
          {text?.["experience"]?.[0]}
          <a
            href="https://www.instagram.com/texastsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          {text?.["experience"]?.[1]}
        </TextCard>
      </div>
      <SectionCard title="Clubs & Orgs" id="clubs" />
      <ListCard items={text["clubs"]} />
      <SectionCard title="UT Courses Taken" id="coursework" />
      <ListCard items={text["coursework"]} />
      <SectionCard title="Skills" id="skills" />
      <ListCard items={text["skills"]} />
      <Section title="Work Experience" id="work" />
      <div className="flex flex-column justify-content-center">
        {text &&
          text["work"] &&
          text["work"].map((item) => {
            return (
              <Experience
                key={item.header}
                header={item.header}
                date={item.date}
                bullets={item.bullets}
              />
            );
          })}
      </div>
      <Section title="Education" id="education" />
      <div className="flex flex-column justify-content-center">
        {text &&
          text["education"] &&
          text["education"].map((item) => {
            return (
              <Experience
                key={item.header}
                header={item.header}
                date={item.date}
                bullets={item.bullets}
              />
            );
          })}
      </div>
      <Section title="Contact Me!" id="contact" />
      <div className="flex flex-row justify-content-center gap-5 align-items-center">
        <a href="mailto:haileynycum@utexas.edu">
          <Image src="/img/email.svg" />
        </a>
        <a href="https://www.linkedin.com/in/haileynycum/" target="_blank" rel="noopener noreferrer">
          <Image src="/img/linkedin.svg" />
          </a>
          </div>
    </div>
  );
};

export default Home;
export { TextCard, SectionCard };
// export Home and Card instead of just Home

