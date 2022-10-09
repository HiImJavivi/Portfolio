import React from "react";
import BackButton from "../../Common/BackButton";
import AboutMe from "../../components/portfolio/AboutMe";
import ContactMe from "../../components/portfolio/ContactMe";
import SoftSkills from "../../components/portfolio/SoftSkills";
import TechSkills from "../../components/portfolio/TechSkills";

function PortfolioSection() {
  return (
    <>
      <BackButton></BackButton>
      <div className="w-[500px] h-[500px] border-4 top-56 -left-52 lg:visible invisible border-blue-600 rounded-full absolute opacity-70"></div>
      <div className="w-[700px] h-[700px] -top-56 border-4 -right-24 lg:visible invisible border-blue-400 rounded-full absolute opacity-70"></div>

      <div className="w-[500px] h-[500px] border-2 -right-56 top-[900px] lg:visible invisible border-blue-600 rounded-full absolute z-10 opacity-70"></div>

      <div className="text-white text-center">
        <AboutMe />
        <SoftSkills />
        <TechSkills />
        <ContactMe />
      </div>
    </>
  );
}

export default PortfolioSection;
