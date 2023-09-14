import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import "../../style/projectItem.css";

const ProjectItem = ({ project, language }) => {
  console.log(project);
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
            ? project.englishDescription
            : project.japaneseDescription}
        </p>

        {project.login && (
          <div>
            <p style={{ margin: "0", fontWeight: "bold" }}>
              {language === "english" ? "Test Login" : "テストログイン"}
            </p>

            <div style={{ display: "flex", gap: "15px" }}>
              {project.loginUser.map((user) => (
                <p>
                  {user.user} / {user.password}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="project-lists">
          {project.projectUrls &&
            project.projectUrls.map((proj) => (
              <div className="project-item">
                <VscDebugBreakpointDataUnverified className="list-point" />
                <a
                  className="udemy-project-link"
                  href={proj.url}
                  target="_blank"
                >
                  {proj.name}
                </a>
              </div>
            ))}
        </div>
        <p className="tech-stack">
          {<FaLaptopCode style={{ marginRight: "0.5rem" }} />}
          {project.language}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
