import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import "../../style/projectItem.css";

const ProjectItem = ({ project, language }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="projectItem-container">
      <div>
        <div className="project-title-section">
          <h5 className="project-title">
            {language === "english" ? project.titleEng : project.titleJa} (
            {project.year})
          </h5>
          <div>
            <a href={project.url} target="_blank">
              <BiLinkExternal className="project-icon" />
            </a>
            <a href={project.github} target="_blank">
              <AiFillGithub className="project-icon" />
            </a>
          </div>
        </div>
        <img
          className="project-img"
          src={project.image}
          alt={project.titleEng}
        />
      </div>
      <div className="description-container">
        <p className="project-description">
          {language === "english"
            ? project.shortDescriptionEng
            : project.shortDescriptionJa}
        </p>
        <p className="tech-stack">
          {<FaLaptopCode style={{ marginRight: "0.5rem" }} />}
          {project.language}
        </p>

        <div className="project-detail">
          <button className="btn-open-modal" onClick={() => setShow(true)}>
            {language === "english" ? "See More" : "詳細はこちら"}
          </button>
        </div>
        {show && (
          <ProjectModal
            project={project}
            language={language}
            show={show}
            setShow={setShow}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
