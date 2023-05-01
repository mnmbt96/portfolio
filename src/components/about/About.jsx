import React from "react";
import Section from "../Section";
import AboutContentsEnglish from "./AboutContentsEnglish";
import AboutContentsJapanese from "./AboutContentsJapanese";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import "../../style/style.css";
import "../../style/about.css";
import img from "../../assets/images/manami.jpg";

const About = ({ language }) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "TypeScript",
    "React.js",
    "Java",
    "git & Github",
    "Figma",
  ];

  return (
    <Section>
      <section id="about" className="container">
        <h2 className="section-title">
          {language === "en" ? "About Me" : "自己紹介"}
        </h2>
        <div className="about-container">
          <div className="image-container">
            <div className="square"></div>
            <img className="fortfolio-image" src={img} alt="Manami Batai" />
          </div>
          <div className="about-contents-container">
            {language === "en" ? (
              <AboutContentsEnglish />
            ) : (
              <AboutContentsJapanese />
            )}
            <div className="skills-container">
              <h5>Skills</h5>
              <div className="skills">
                {skills.map((skill, index) => {
                  return (
                    <div className="skill-name" key={index}>
                      <VscDebugBreakpointDataUnverified className="list-point" />
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
