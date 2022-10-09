import React from "react";
import bootstrap from "../../../assets/bootstrap.png";
import htmlcss from "../../../assets/htmlcss.png";
import java from "../../../assets/java.png";
import js from "../../../assets/js.png";
import laravel from "../../../assets/laravel.png";
import next from "../../../assets/next.webp";
import node from "../../../assets/node.png";
import php from "../../../assets/php.png";
import python from "../../../assets/python.png";
import reactlogo from "../../../assets/react.png";
import tailwind from "../../../assets/tailwind.png";
import AnimateInView from "../../Common/AnimateInView";

import TechSkillCard from "../TechSkillCard";

function TechSkills() {
  return (
    <div className="mt-20 flex flex-col items-center relative">
      <div className="absolute w-[0.5px] h-full bg-white -z-10"></div>
      <div className="absolute w-2 h-2 -bottom-1 rounded-xl bg-white"></div>

      <h2 className="text-gray-600 mb-5 text-xl bg-background py-2">
        Tecnologies
      </h2>
      <p className="bg-background py-2">
        My main frameworks are React and Laravel, but there's a list of the
        technologies i have worked with.
        <br />
        Appart from web development, I do also have knowledge about data science
        and machine learning.
      </p>
      <div>
        <div className="mt-10 bg-background py-2">
          <h2 className="text-white ">Main technologies</h2>
          <p className="text-gray-400 mt-3 ">
            These are the technologies that i most commonly use in my day to day
            work, but im always learning new things.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-10 mt-8 bg-background py-4">
            <AnimateInView delay={1}>
              <TechSkillCard icon={reactlogo} name={"React"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={2}>
              <TechSkillCard icon={laravel} name={"Laravel"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={3}>
              <TechSkillCard icon={js} name={"JavaScript"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={4}>
              <TechSkillCard
                icon={htmlcss}
                name={"Advanced HTML and CSS (Animations)"}
              ></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={5}>
              <TechSkillCard icon={php} name={"PHP"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={6}>
              <TechSkillCard icon={tailwind} name={"Tailwind"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={7}>
              <TechSkillCard icon={python} name={"Python"}></TechSkillCard>
            </AnimateInView>
          </div>
        </div>
        <div className="mt-32">
          <h2 className="text-white bg-background py-2">Another skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-10 mt-10 bg-background mb-20 py-4">
            <AnimateInView delay={1}>
              <TechSkillCard
                icon={bootstrap}
                name={"Bootstrap"}
              ></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={2}>
              <TechSkillCard icon={java} name={"Java"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={3}>
              <TechSkillCard icon={node} name={"Node"}></TechSkillCard>
            </AnimateInView>
            <AnimateInView delay={4}>
              <TechSkillCard icon={next} name={"Next"}></TechSkillCard>
            </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
