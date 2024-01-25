import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="px-12 w-full relative " id="about">
      <img
        src="./pic-profile.jpg"
        className="w-16 rounded-full md:mx-0 mx-auto "
        alt="Me"
      />
      <div className="max-w-2xl mt-10">
        <h1 className="text-5xl md:text-left text-center text-zinc-800 font-bold tracking-tight">
          Coding enthusiast, developer and tech obsessed!
        </h1>
        <p className="text-zinc-600 mt-10 md:text-left text-center">
          I am a software developer, interested in making the web look good and
          function properly. I’m very dedicated and love working in hard
          problems as well as motivating the others by showcasing my own
          passion.
        </p>
      </div>
      <div className="mt-10 flex md:justify-start justify-center gap-7">
        <a
          target="_blank"
          href="https://github.com/luigyy"
          className="text-zinc-600 text-3xl"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/luigy-valverde-mena-14b7ba248/"
          target="_blank"
          className="text-zinc-600 text-3xl"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="flex gap-x-1 items-center md:justify-start justify-center pl-1 pt-2">
        <MdEmail className="text-zinc-600 text-xl hidden md:flex" />
        <h1 className="text-zinc-600 text-sm md:text-left text-center italic ">
          valverdejareth@gmail.com
        </h1>
      </div>

      {/* blob  */}
      {/* <div>
        <div className="w-60 h-60 bg-blue-500 absolute md:right-28 right-[100px] top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="w-60 h-60 bg-red-500 absolute md:right-10 right-[100px] top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-1000"></div>
        <div className="w-60 h-60 bg-yellow-500 absolute md:right-4 right-[100px] top-20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-4000"></div>
      </div> */}
    </div>
  );
};

export default Hero;
