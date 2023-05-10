import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.scss";
const ProjectCard = (props) => {
  const { title, image, link } = props;
  return (
    <Link className="empty-link project-card" to={`/projects/${link}`}>
      <Image src={`/img/${image}.png`} className="project-image"></Image>
      <div className="title-container">
        <h3 className="project-title">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
