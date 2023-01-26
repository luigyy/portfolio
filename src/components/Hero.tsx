import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="px-12 w-full relative">
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

      {/* animated spheres  */}
      <div>
        <div className="w-60 h-60 bg-emerald-500 absolute right-28 top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="w-60 h-60 bg-red-500 absolute right-10 top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
        <div className="w-60 h-60 bg-yellow-500 absolute right-4 top-20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;
