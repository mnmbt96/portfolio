import React from "react";
import Section from "../Section";
import ProjectItem from "./ProjectItem";
import projects from "../../assets/data/projects.json";
import "../../style/projects.css";
import "../../style/style.css";

const Projects = ({ language }) => {
  return (
    <Section>
      <section id="projects" className="container">
        <h2 className="section-title">
          {language === "en" ? "Projects" : "プロジェクト"}
        </h2>
        {projects.map((project) => (
          <ProjectItem project={project} language={language} key={project.id} />
        ))}
      </section>
    </Section>
  );
};

export default Projects;
