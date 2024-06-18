"use client";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";
import ProjectModal from "./ProjectModal";
import { Project } from "@/app/types/types";

const Projects = ({ language }: { language: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // モーダル枠外をクリックした時に閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as Element).closest("#modal-container") &&
        !(event.target as Element).closest("#modal-close-button")
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // モーダルが開いている時にスクロールを防ぐ
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      // モーダルが閉じられているときにmodal-openクラスを削除
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <>
      <Section>
        <section
          id="projects"
          className="px-2 sm:px-10 md:px-16 xl:px-56 py-5 md:pt-20 section"
        >
          <h2 className="text-2xl tracking-wider font-semibold pb-3 text-center md:text-left text-primary">
            {language === "english" ? "Projects" : "プロジェクト"}
          </h2>
          <div className="grid md:grid-cols-2 gap-2 md:gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                setIsModalOpen={setIsModalOpen}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </div>
        </section>
      </Section>

      {/* -------- モーダルウィンドウ -------- */}
      <div
        className={`${
          isModalOpen &&
          "max-h-screen justify-center items-end md:items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
        }`}
      >
        <div
          className={`h-[90%] w-ful rounded-t-lg md:rounded-lg duration-500 ${
            isModalOpen ? "-translate-y-0" : "translate-y-full"
          }
          `}
        >
          {isModalOpen && selectedProject && (
            <ProjectModal
              language={language}
              project={selectedProject}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
