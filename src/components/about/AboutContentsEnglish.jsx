import React from "react";
import "../../style/about.css";

const AboutContentsEnglish = () => {
  return (
    <div className="about-contents">
      <p>Hello, thank you for visiting my portfolio website.</p>
      <p>
        My name is <strong className="name-strong">Manami Batai</strong> and I
        am a front-end developer currently studying Web Development at a college
        in Vancouver.
      </p>
      <p>
        I have completed the{" "}
        <a
          className="udemy-link"
          href="https://www.udemy.com/course/the-complete-javascript-course/"
          target="_blank"
        >
          JavaScript Master Course{" "}
        </a>
        and have been working on front-end development using frameworks such as
        React.
      </p>
      <p>
        I am always eager to learn new technologies and tools, and strive to
        incorporate the latest development techniques in my work. As a flexible
        and cooperative team player, I aim to contribute to the success of the
        project.
      </p>
    </div>
  );
};

export default AboutContentsEnglish;
