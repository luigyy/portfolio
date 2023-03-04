import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import "../App.css";
import { useCursorContext } from "../contexts/CursorContext";
//
const PROJECTS = [
  {
    date: "2022",
    title: "calcuBecasUCR",
    description: `This is a website used by hundreds of students everyday. It's purpose is 
       to track the amount of money given to students by the Universidad de Costa Rica on
        scholarships everymonth, so students can check and organize themselves. `,
    url: "https://calcubecasucr.netlify.app/",
    imgName: "calcubecas.png",
  },
  {
    date: "2023",
    title: "Restaurant site ",
    description:
      "A template for a restaurant website. Inspired by a simplistic, eye-catching style",
    url: "https://restaurant-templatee.netlify.app/",
    imgName: "restaurant.png",
  },
  {
    date: "2023",
    title: "Photographer portfolio site ",
    description:
      "This is a portofolio website template that I built as a freelance project",
    url: "https://photographfolio.netlify.app/",
    imgName: "photographer.png",
  },
  {
    date: "2022",
    title: "Gym management software",
    description: `This is is a gym control software with all CRUD operations (Create, Read, Update and Delete), 
  fully equipped with a backend, in which you can manage your users, update memberships and control who's accessing your GYM by providing a QR generator and a QR scanner. 
  It even contains an SMTP server to automatically send the QR codes via email!`,
    url: "https://gymcontrol.netlify.app/",
    imgName: "gym.png",
  },
  {
    date: "2022",
    title: "Porfolio website",
    description: `This portfolio website you are watching. It's simplistic style, I consider it to be easy to browse and read. Also, it's fully responsive`,
    url: "",
    imgName: "portfolio.png",
  },
];
//

interface ProjectCard {
  date: string;
  title: string;
  description: string;
  url: string;
  imgName: string;
}

const ProjectCard: React.FC<ProjectCard> = ({
  date,
  title,
  imgName,
  description,
  url,
}) => {
  const { isHoveringProject, setIsHoveringProject } = useCursorContext();
  return (
    <div
      onMouseEnter={() => {
        setIsHoveringProject(imgName);
      }}
      onMouseLeave={() => {
        setIsHoveringProject(false);
      }}
      className=""
    >
      <div className="z-10">
        <span className="border-l-2 border-zinc-300 pl-3 text-zinc-400 text-sm">
          {date}
        </span>
        <h1 className="mt-4 text-zinc-800 tracking-tight font-semibold text-lg">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 ">{description}</p>

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
interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-col gap-16 ">
        {PROJECTS.map((item, index) => {
          return (
            <ProjectCard
              date={item.date}
              title={item.title}
              description={item.description}
              url={item.url}
              imgName={item.imgName}
            />
          );
        })}
      </div>
      <div className="mt-20">
        <span className=" text-zinc-500 border-b-2 pb-1 hover:text-zinc-700 transition-colors duration-500 text-sm">
          <a href="https://github.com/luigyy" target="_blank">
            {" "}
            More...
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectsSection;
