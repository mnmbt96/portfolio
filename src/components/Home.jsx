import React, { useEffect } from "react";
// import {
//   AiOutlineGithub,
//   AiFillLinkedin,
//   AiOutlineInstagram,
//   AiFillFacebook,
// } from "react-icons/ai";
import MainImg from "../assets/images/main_img.png";
import "../../src/style/home.css";
import "../../src/style/style.css";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      const heroContents = document.querySelector(".hero-contents");
      heroContents.classList.add("load-hero-contents");
    }, 1700);
  }, []);

  return (
    <section id="home" className="hero-container">
      {/* <div className="contact-icons">
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

        <a
          href="https://www.instagram.com/mnmbt96/"
          target="_blank"
          className="icon-animated"
        >
          <AiOutlineInstagram className="icon" />
        </a>

        <a
          href="https://www.facebook.com/manami.batai"
          target="_blank"
          className="icon-animated"
        >
          <AiFillFacebook className="icon" />
        </a>
      </div> */}
      <img className="hero-img" src={MainImg} alt="Main" />
      <div className="hero-contents">
        <p className="hero-greetings">Hi there, my name is</p>
        <h1 className="hero-name">Manami Batai</h1>
        <p className="hero-job">Front-end Developer</p>
      </div>
    </section>
  );
};

export default Hero;
