import { Project } from "@/app/types/types";
import Image from "next/image";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

interface ProjectModalProps {
  language: string;
  project: Project;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  language,
  project,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <div
      id="modal-container"
      className={`w-full text-primary md:w-4/5 xl:w-1/2 p-3 md:py-5 md:px-8 mx-auto h-full border-[1px] md:shadow-lg flex flex-col gap-5 bg-white overflow-y-auto ${
        isModalOpen ? "rounded-t-lg md:rounded-lg" : "rounded-lg"
      }
    `}
    >
      <button
        id="modal-close-button"
        className="flex justify-end text-gray-500 hover:opacity-70"
        onClick={() => setIsModalOpen(false)}
      >
        <IoIosClose size={30} />
      </button>

      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="font-bold text-2xl sm:text-3xl tracking-widest">
          {language === "english"
            ? project.englishTitle
            : project.japaneseTitle}
        </div>

        <div className="flex items-center gap-3">
          <div className="underline-animation">
            <a
              className="flex items-center gap-1"
              href={project.url}
              target="_blank"
            >
              <FiExternalLink />
              <span>
                {language === "english" ? "Link to demo" : "サイトリンク"}
              </span>
            </a>
          </div>

          {project.github && (
            <div className="underline-animation">
              <a
                className="flex items-center gap-1"
                href={project.github}
                target="_blank"
              >
                <AiOutlineGithub />
                <span>Github</span>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap flex-shrink-0 items-center justify-center sm:justify-start gap-2">
        {project.techStach.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div key={tech.name} className="flex items-center gap-1">
              <IconComponent />
              <div>{tech.name}</div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Image src={project.image} alt={`${project.englishTitle}'s image`} />
      </div>

      <div>
        <div className="text-lg font-semibold">
          {language === "english" ? "About this project" : "概要"}
        </div>
        <div>
          {language === "english"
            ? project.englishDescription
            : project.japaneseDescription}
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold">
          {language === "english" ? "Achievemants" : "取り組みと実績"}
        </div>
        <div>
          {language === "english"
            ? project.englishAchievements
            : project.japaneseAchievements}
        </div>
      </div>

      {project.projectUrls && (
        <div>
          <div className="text-lg font-semibold">
            {language === "english"
              ? "What I made through this Udemy class"
              : "このUdemyでの制作物"}
          </div>
          <div className="grid gap-1">
            {project.projectUrls?.map((proj) => (
              <div
                key={proj.url}
                className="flex items-center gap-1 underline-animation-container"
              >
                <FaCheck />
                <a className="underline-animation" href={proj.url}>
                  {proj.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.login && (
        <div className="p-4 text-xs border rounded-md bg-gray-50">
          <div>
            {language === "english"
              ? `※This site has a login feature. Please use the following credential.`
              : `※このサイトにはログイン機能があります。下記のログイン情報をご利用ください。`}
          </div>
          {project.loginUser?.map((user) => (
            <div key={user.user} className="flex items-center gap-2">
              <div>{user.user}</div>
              <div>{user.password}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
