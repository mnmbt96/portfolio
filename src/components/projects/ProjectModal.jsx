import React from "react";
import Modal from "react-bootstrap/Modal";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import "../../style/projectModal.css";

const ProjectModal = ({ project, language, show, setShow }) => {
  return (
    <div className="modal-container">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h3 className="modal-title">
            {language === "en" ? project.titleEng : project.titleJa}
          </h3>
          <img className="modal-img" src={project.image} alt={project.title} />
          <p className="modal-description">
            {language === "en"
              ? project.englishDescription
              : project.japaneseDescription}
          </p>
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
          <div className="modal-icons">
            <a href={project.url} target="_blank">
              <BiLinkExternal className="project-icon" />
            </a>
            <a href={project.github} target="_blank">
              <AiFillGithub className="project-icon" />
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectModal;
