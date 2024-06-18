"use client";
import React from "react";
import { Project } from "@/app/types/types";
import Image from "next/image";

interface ProjectProps {
  project: Project;
  language: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectCard: React.FC<ProjectProps> = ({
  project,
  language,
  setIsModalOpen,
  setSelectedProject,
}) => {
  const handleCardClick = () => {
    setIsModalOpen(true);
    setSelectedProject(project);
  };

  return (
    <div
      className="flex flex-col justify-center gap-2 text-primary border p-5 rounded-xl shadow-sm cursor-pointer bg-white hover:shadow-2xl"
      onClick={handleCardClick}
    >
      <Image
        src={project.image}
        alt={`${project.englishTitle}'s image`}
        className="w-full h-300 rounded-xl"
      />
      <div className="text-xl font-semibold tracking-widest py-3">
        {language === "english" ? project.englishTitle : project.japaneseTitle}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.techStach.map((tech) => {
          const IconComponent = tech.icon;
          return <IconComponent size={30} key={tech.name} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
