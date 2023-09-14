import React, { useEffect } from "react";
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
