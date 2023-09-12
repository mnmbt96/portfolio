import React from "react";
import "../../style/skill.css";
import "../../style/style.css";

const Skill = ({ skill, language }) => {
  return (
    <div className="skill-container">
      <div className="skill-image-container">
        <img className="lang-img" src={skill.image} alt={skill.language} />
      </div>
      <h6 className="skill-language">{skill.language}</h6>
      <p className="skill-description">
        {language === "english"
          ? skill.englishDescription
          : skill.japaneseDescription}
      </p>
    </div>
  );
};

export default Skill;
