import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="px-12 w-full">
      <img src="./pic-profile.jpg" className="w-16 rounded-full  " alt="Me" />
      <div className="max-w-2xl mt-10">
        <h1 className="text-5xl text-zinc-800 font-bold tracking-tight">
          Coding enthusiast, developer and always a student!
        </h1>
        <p className="text-zinc-600 mt-10">
          Hi I am Luigy, a software engineer from San José, Costa Rica. I've
          been playing with code for as long as I can remember. Lately, I've
          been interested in web development, where I have both worked as
          freelancer and built plenty of projects.
        </p>
      </div>
      <span className="mt-10 flex gap-7">
        <button className="text-zinc-600 text-3xl ">
          <AiOutlineInstagram />
        </button>
        <button className="text-zinc-600 text-3xl">
          <AiFillGithub />
        </button>
        <button className="text-zinc-600 text-3xl">
          <AiFillLinkedin />
        </button>
      </span>
    </div>
  );
};

export default Hero;
