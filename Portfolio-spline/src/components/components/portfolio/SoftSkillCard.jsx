import React from "react";
import AnimateInView from "../../Common/AnimateInView";

function SoftSkillCard({ title, icon, text, index }) {
  return (
    <AnimateInView delay={index}>
      <div className="p-5 flex flex-col items-center bg-gray-300 text-black lg:min-h-[400px] rounded-md shadow-md">
        <h3 className="mb-10 border-b-2 border-gray-600 w-1/2 ">{title}</h3>
        <img src={icon} className={"h-40"} alt={"soft-skill"}></img>
        <p className="mt-5">{text}</p>
      </div>
    </AnimateInView>
  );
}

export default SoftSkillCard;
