import React from "react";
import SkillCard from "../../components/skill-card/SkillCard";
import { skills } from "./data";
import "./Skills.scss";
const Skills = () => {
  return (
    <div className="skills">
      <div className="card-grid">
        {skills.map((item, index) => {
          return (
            <SkillCard
              key={index}
              title={item.title}
              percentage={item.percentage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
