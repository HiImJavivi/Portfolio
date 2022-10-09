import { motion } from "framer-motion";
import React from "react";
import logo from "../../../assets/Logo_simple.png";
import CommonButton from "../../../components/Common/CommonButton";
import AnimateInView from "../../Common/AnimateInView";

function AboutMe() {
  return (
    <div className="relative">
      <div className="flex items-center flex-col mt-20">
        <h1 className="text-6xl">Hi I&apos;m Javier</h1>
        <motion.img
          src={logo}
          initial={{ scale: 10, opacity: 0, rotateX: 180 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="min-w-[200px] md:w-1/4 lg:w-3/12 py-3"
        ></motion.img>
        <p className="mt-5 text-xl pb-2">Follow me in this journey.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="absolute w-[0.5px] h-full bg-white -z-10"></div>
        <div className="absolute w-2 h-2 -bottom-[85px] rounded-xl bg-white"></div>
        <h2 className="text-gray-500 mt-32 text-xl bg-background py-2">
          About me
        </h2>
        <AnimateInView>
          <p className="mt-14 px-10 sm:px-20 m:px-42 lg:px-72 bg bg-background py-3 text-lg">
            Im Javier, a 21 year old software developer.
            <br />
            <br />
            I have always loved computers, videogames and in general,
            technology.
            <br />
            <br />
            In 2018 I decided to venture into a career in computer engineering
            and 4 years later I can call myself a software engineer.
            <br />
            <br />
            I love the full stack development, creating complete projects for
            satisfying the clients and users, since making beautiful and
            intuitive UIs to building awesome and unique funcionalitys in the
            dark side, the back-end.
            <br />
            <br />
            If you want to know more about me, you are free to contact me.
          </p>
        </AnimateInView>
        <span className="py-3 mt-8 bg-background">
          <a href="#contact">
            <CommonButton>Contact me</CommonButton>
          </a>
        </span>
      </div>
    </div>
  );
}

export default AboutMe;
