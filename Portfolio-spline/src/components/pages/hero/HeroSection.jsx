import Spline from "@splinetool/react-spline";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logosimple from "../../../assets/Logo_simple.png";
import CommonButton from "../../Common/CommonButton";

function HeroSection() {
  const handleContact = () => {
    window.open(`mailto:javierperez2000s@gmail.com`);
  };
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen max-w-screen md:max-h-screen z-10 overflow-hidden">
      <div className="absolute h-16 w-16 top-2 left-2">
        <img src={logosimple}></img>
      </div>
      <div className="absolute md:w-16 md:h-auto w-full h-16 bottom-2 left-2 flex md:justify-center justify-start items-center md:flex-col-reverse flex-row gap-5">
        <span className="border-blue-500 md:border-r-2 md:h-32 md:w-0 h-0 w-32 border-t-2"></span>
        <a
          href="https://www.linkedin.com/in/javier-p%C3%A9rez-2a5136239/"
          target="_blank"
        >
          <span>
            <FaLinkedin className="w-10 h-10 text-white opacity-20 hover:text-blue-600 hover:opacity-50 transition-all duration-200"></FaLinkedin>
          </span>
        </a>
        <a href="https://github.com/HiImJavivi" target="_blank">
          <span>
            <FaGithub className="w-10 h-10 text-white opacity-20 hover:text-blue-600 hover:opacity-50 transition-all duration-200"></FaGithub>
          </span>
        </a>
      </div>
      <div className="text-white flex flex-col gap-20 md:pl-24 p-4 h-full justify-center w-full md:w-2/3 lg:w-1/2">
        <span>
          <h1 className="lg:text-7xl text-6xl mb-10 md:text-start text-center">
            Hi I'm Javier.
          </h1>
          <h2 className="lg:text-4xl text-3xl md:text-start text-center">
            I’m a fullstack software developer<br></br> who loves 1's and 0's.
          </h2>
        </span>

        <div className="flex flex-col gap-2 w-auto md:items-start items-center">
          <p className="text-2xl inline md:text-start text-center">
            Let´s talk if you are interested in building something special.
          </p>
          <span className="flex gap-10 mt-2">
            <CommonButton onClick={() => navigate("/portfolio")}>
              Portfolio
            </CommonButton>
            <CommonButton onClick={handleContact}>Contact me</CommonButton>
          </span>
        </div>
      </div>
      <div className="z-[-10] fixed -top-8 -right-20  border-blue-500 border-2 rounded-full md:h-[950px] md:w-[950px] hidden lg:block"></div>
      <div className="z-[-10] fixed -top-32 -right-48  border-blue-500 border-2 rounded-full md:h-[1350px] md:w-[1350px] hidden lg:block"></div>

      <Spline
        height={600}
        className="z-[-5] fixed top-28 -right-1/4 xl:scale-150 lg:scale-125 md:scale-75 md:visible invisible"
        scene="https://prod.spline.design/jMy5GmsSYU-MmwRd/scene.splinecode"
      />
    </div>
  );
}

export default HeroSection;
