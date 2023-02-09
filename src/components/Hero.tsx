import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="px-12 w-full relative" id="about">
      <img
        src="./pic-profile.jpg"
        className="w-16 rounded-full md:mx-0 mx-auto "
        alt="Me"
      />
      <div className="max-w-2xl mt-10">
        <h1 className="text-5xl md:text-left text-center text-zinc-800 font-bold tracking-tight">
          Coding enthusiast, developer and always a student!
        </h1>
        <p className="text-zinc-600 mt-10 md:text-left text-center">
          Hi I am Luigy, a developer based in San José, Costa Rica. I've always
          enojoyed learning and playing with code. Lately, I've been interested
          in web development, where I have done freelance work and built plenty
          of projects.
        </p>
      </div>
      <span className="mt-10 flex md:justify-start justify-center gap-7">
        <a
          target="_blank"
          href="https://www.instagram.com/luigyyyyyy/"
          className="text-zinc-600 text-3xl "
        >
          <AiOutlineInstagram />
        </a>
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
      </span>

      {/* blob  */}
      <div>
        <div className="w-60 h-60 bg-blue-500 absolute md:right-28 right-[100px] top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="w-60 h-60 bg-red-500 absolute md:right-10 right-[100px] top-14 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-1000"></div>
        <div className="w-60 h-60 bg-yellow-500 absolute md:right-4 right-[100px] top-20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 md:opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default Hero;
