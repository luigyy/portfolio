import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import "../App.css";
import { useCursorContext } from "../contexts/CursorContext";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//
const PROJECTS = [
  {
    date: "2024",
    title: "Carei - Clothing store",
    description: `A clothing store, written in Nextjs integrated with Tilopay to process payments. Contains admin dashboard with CRUD functions for garments.`,
    url: "https://carei.vercel.app/",
    imgNames: [
      "carei/carei-img-1.png",
      "carei/carei-img-2.png",
      "carei/carei-img-3.png",
    ],
  },
  {
    date: "2023",
    title: "Movi - Car selling platform",
    description: `A platform to connect car sellers ans buyers, 
    in a secure way. It is free, but also contains paid tiers to maximize your reach, as well as luxury car selling services`,
    url: "https://www.moviautos.com/",
    imgNames: [
      "movi/movi-img-1.png",
      "movi/movi-img-2.png",
      "movi/movi-img-3.png",
    ],
  },

  {
    date: "2023",
    title: "Music artist website",
    description: `A website for a music artist, using react + tailwind and some vanillajs `,
    url: " https://music-artist-site.netlify.app/",
    imgNames: [
      "music/music-img-1.png",
      "music/music-img-2.png",
      "music/music-img-3.png",
    ],
  },

  {
    date: "2023",
    title: "Restaurant site ",
    description:
      "A template for a restaurant website. Inspired by a simplistic, eye-catching style",
    url: "https://restaurant-templatee.netlify.app/",
    imgNames: [
      "rest/rest-img-1.png",
      "rest/rest-img-2.png",
      "rest/rest-img-3.png",
    ],
  },
];
//

interface ProjectCard {
  date: string;
  title: string;
  description: string;
  url: string;
  imgNames: string[];
  setToggler: (toggle: boolean) => void;
  setSlides: (slides: { src: string }[]) => void;
}

const ProjectCard: React.FC<ProjectCard> = ({
  date,
  title,
  imgNames,
  description,
  url,
  setToggler,
  setSlides,
}) => {
  const { isHoveringProject, setIsHoveringProject } = useCursorContext();
  const handleImgClick = () => {
    // setSlides(imgNames);
    function populateSlides() {
      let slides: { src: string }[] = [];
      imgNames.map((img) => slides.push({ src: img }));
      return slides;
    }
    setSlides(populateSlides());

    setToggler(true);
  };

  //
  return (
    <div className="-2">
      <div className="z-10 ">
        <span className="border-l-2 border-zinc-300 pl-3 text-zinc-400 text-sm">
          {date}
        </span>
        <h1 className="mt-4 text-zinc-800 tracking-tight font-semibold text-lg">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 ">{description}</p>

        <div className=" py-4  flex gap-x-3">
          {imgNames.map((img) => (
            <button className="rounded-md" onClick={handleImgClick}>
              <img
                src={img}
                className="w-72 border border-emerald-600/30 rounded-md"
                alt=""
              />
            </button>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          className="text-emerald-600 font-semibold text-sm flex items-center gap-3 mt-4"
        >
          <span>Visit website</span> <AiOutlineLink className="text-lg" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = ({}) => {
  const [toggler, setToggler] = useState(false);
  const [slides, setSlides] = useState([{ src: "/ucr.png" }]);
  useEffect(() => console.log(slides), [slides]);

  return (
    <>
      <div>
        <div className="flex flex-col gap-16 ">
          {PROJECTS.map((item, index) => {
            return (
              <ProjectCard
                setToggler={setToggler}
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                url={item.url}
                setSlides={setSlides}
                imgNames={item.imgNames}
              />
            );
          })}
        </div>
        <div className="mt-20">
          <span className=" text-zinc-500 border-b-2 pb-1 hover:text-zinc-700 transition-colors duration-500 text-sm">
            <a href="https://github.com/luigyy" target="_blank">
              More...
            </a>
          </span>
        </div>
      </div>

      <Lightbox
        open={toggler}
        close={() => setToggler(false)}
        slides={slides}
      />
    </>
  );
};

export default ProjectsSection;
