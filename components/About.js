import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";

const About = () => {
  return (
    <div className="container  px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold  text-black lg:text-5xl dark:text-white">
            Hey there,
          </h1>
          <div className="mt-6 text-black dark:text-black">
            <p className="mb-4">
              I'm <span className="text-sky-500">Vijeyash</span>, a software
              engineer based in Thanjavur, India. Am a passiable person who is
              always looking for new challenges and opportunities. and am
              interested in learning new technologies.I am a self-taught
              developer with a passion for learning and building things.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
