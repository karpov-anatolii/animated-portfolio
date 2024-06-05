"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  // first section that user will see
  return (
    <section className="pb-20 sm:pt-20 md:pt-36  pt-0">
      <div className="flex items-center justify-center h-screen">
        <Spotlight
          className=" top-[20vh] left-0  sm:-top-40 sm:-left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" left-[90vw] top-10 w-[100vw] h-[70vh] sm:left-full sm:h-[80vh] sm:w-[50vw] "
          fill="purple"
        />
        <Spotlight
          className="top-0 left-[10vw] w-[200vw] h-[160vh] sm:top-28 sm:left-80 sm:h-[80vh] sm:w-[50vw] "
          fill="blue"
        />

        <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative  z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center  text-blur-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-[35px] sm:text-[40px] md:text-5xl lg:text-6xl "
              words="Turning Ideas into User Experiences that Flow Seamlessly"
            />

            <p className="text-center md:tracking-wider my-4  text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m a Next.js Developer based in Ukraine.
            </p>
            <a href="#about">
              <MagicButton
                title="Show my work"
                position="right"
                handleClick={() => {}}
                otherClasses=""
                icon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
