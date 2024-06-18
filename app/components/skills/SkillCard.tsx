import React from "react";
import Image, { StaticImageData } from "next/image";
import { Skill } from "@/app/types/types";

interface SkillProps {
  skill: Skill;
  language: string;
}

const SkillCard: React.FC<SkillProps> = ({ skill, language }) => {
  return (
    <div className="bg-white border text-primary rounded-xl py-2 px-5 min-h-[290px] flex flex-col justify-evenly shadow-md">
      <div className="flex items-center justify-center gap-3">
        <Image className="w-[42px]" src={skill.image} alt={skill.techStack} />
        <h6 className="text-xl font-semibold tracking-wider">
          {skill.techStack}
        </h6>
      </div>
      <p className="skill-description">
        {language === "english"
          ? skill.englishDescription
          : skill.japaneseDescription}
      </p>
    </div>
  );
};

export default SkillCard;
