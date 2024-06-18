"use client";
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/about/About";
import Contact from "./components/Contact";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<string>("japanese");

  return (
    <main className="bg-gray-100">
      <Header language={language} setLanguage={setLanguage} />
      <Main language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer />
    </main>
  );
}
