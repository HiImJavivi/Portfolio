import { motion } from "framer-motion";
import React from "react";
import adaptative from "../../../assets/adaptative.svg";
import mentor from "../../../assets/mentor.svg";
import teamwork from "../../../assets/teamwork.svg";

import SoftSkillCard from "./SoftSkillCard";

function SoftSkills() {
  return (
    <div className="bg-blue-500 py-2 pb-10 mt-20 px-10 md:px-20 z-20">
      <div>
        <h2 className="mt-10 text-white text-xl">Soft skills</h2>
        <div className="grid  grid-cols-1 lg:grid-cols-3 p-10 gap-20">
          <SoftSkillCard
            index={1}
            title={"Team work"}
            icon={teamwork}
            text={
              "I love collaborating with the team, helping forth and back with them. Thanks to that obtaining other points of view and reach better solutions."
            }
          />
          <SoftSkillCard
            index={2}
            title={"Mentor"}
            icon={mentor}
            text={
              "I've never doubted in asking questions if there was something i didnt knew. So i threat others like i want them to threat me, thats why i enjoy a lot teaching and mentorizing other teammates."
            }
          />
          <SoftSkillCard
            index={3}
            title={"Adaptative"}
            icon={adaptative}
            text={
              "Most of the things i know are self-learned, so when there are something i dont know about, i fully dedicate myself to learn about it. (I love learning new skills)"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
