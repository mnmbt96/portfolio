import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import Skills from "../components/skills/Skills";

const IndexPage = () => {
  const [language, setLanguage] = useState("english");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Hero />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <p className="copyright">&copy; 2023 Manami Batai</p>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Manami Batai</title>;
