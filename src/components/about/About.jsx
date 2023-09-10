import React from "react";
import Section from "../Section";
import AboutContentsEnglish from "./AboutContentsEnglish";
import AboutContentsJapanese from "./AboutContentsJapanese";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "../../style/style.css";
import "../../style/about.css";
import img from "../../assets/images/manami.jpg";

const About = ({ language }) => {
  return (
    <Section>
      <section id="about" className="container">
        <h2 className="section-title">
          {language === "english" ? "About Me" : "自己紹介"}
        </h2>
        <div className="about-container">
          <div className="image-container">
            <div className="square"></div>
            <img className="fortfolio-image" src={img} alt="Manami Batai" />
          </div>
          <div className="about-contents-container">
            {language === "english" ? (
              <AboutContentsEnglish />
            ) : (
              <AboutContentsJapanese />
            )}
            <div className="contact-icons">
              <button className="btn-resume">Resume</button>
              <a
                href="https://github.com/mnmbt96"
                target="_blank"
                className="icon-animated"
              >
                <AiOutlineGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/manami-batai-168593247/"
                target="_blank"
                className="icon-animated"
              >
                <AiFillLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
