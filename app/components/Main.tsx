"use client";
import React, { useEffect } from "react";

const Main = ({ language }: { language: string }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const heroContents = document.querySelector(".hero-contents");
      if (heroContents) {
        heroContents.classList.add("load-hero-contents");
      }
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center"
    >
      <video
        src="/video/main-video.mp4"
        className="top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute pt-36 md:pr-48 hero-contents">
        <p className="text-primary text-base md:text-xl tracking-wider md:tracking-widest font-semibold">
          Hi there, my name is
        </p>
        <h1 className="text-primary text-4xl md:text-6xl tracking-wider md:tracking-widest font-bold py-3 md:py-5">
          Manami Batai
        </h1>
        <p className="text-primary text-xl md:text-3xl tracking-wider md:tracking-widest font-semibold">
          Front-end Engineer
        </p>
      </div>
    </section>
  );
};

export default Main;
