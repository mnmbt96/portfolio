import React from "react";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import MyImage from "../../../public/images/manami.jpg";
import Image from "next/image";

import Section from "../Section";
import AboutEnglish from "./AboutEnglish";
import AboutJapanese from "./AboutJapanese";

const About = ({ language }: { language: string }) => {
  return (
    <Section>
      <section
        id="about"
        className="flex flex-col px-2 sm:px-10 md:px-16 xl:px-56 py-5 md:pt-20 text-primary section"
      >
        <h2 className="text-2xl tracking-wider font-semibold text-center md:text-left pb-3">
          {language === "english" ? "About Me" : "自己紹介"}
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-3 md:gap-0">
          <div className="flex items-end justify-center">
            <div className="absolute w-[280px] h-[280px] bg-primary rounded-lg"></div>
            <Image
              className="relative w-[280px] h-[280px] rounded-lg"
              src={MyImage}
              alt="Manami's image"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 md:pr-2">
            {language === "english" ? <AboutEnglish /> : <AboutJapanese />}
            <div className="flex items-end justify-center tex-right gap-3 pt-3 md:pt-10">
              <a
                href="https://github.com/mnmbt96"
                target="_blank"
                className="hover:scale-105"
              >
                <AiOutlineGithub size={36} className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/manami-batai-168593247/"
                target="_blank"
                className="hover:scale-105"
              >
                <AiFillLinkedin size={36} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
