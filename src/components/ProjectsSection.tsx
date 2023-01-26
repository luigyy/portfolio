import React from "react";
import { AiOutlineLink } from "react-icons/ai";
//
const PROJECTS = [
  {
    date: "2022",
    title: "calcuBecasUCR",
    description: `This is a website used by hundreds of students everyday. It's purpose is 
       to track the amount of money given to students by the Universidad de Costa Rica on
        scholarships everymonth, so students can check and organize themselves. `,
    url: "https://calcubecasucr.netlify.app/",
  },
  {
    date: "2022",
    title: "Gym management software",
    description: `This is is a gym control software with all CRUD operations (Create, Read, Update and Delete), 
  fully equipped with a backend, in which you can manage your users, update memberships and control who's accessing your GYM by providing a QR generator and a QR scanner. 
  It even contains an SMTP server to automatically send the QR codes via email!`,
    url: "https://gymcontrol.netlify.app/",
  },
  {
    date: "2022",
    title: "Food service control",
    description: `I originally built this software for my family food service company, 
  in big events sometimes you can only serve so many meals to each person , what if you send everyone a QR code, and let them scan it before they have a meal?
  this software does exactly that, you can customize the max number of meals per each person, and if they exceed it, the code won't scan! I'ts been truly game changer! 
  `,
    url: "https://food-schedulerr.netlify.app/",
  },
  {
    date: "2022",
    title: "Porfolio website",
    description: `This portfolio website you are watching. It's simplistic style, I consider it to be easy to browse and read. It contains dark mode functionality and it is fully responsive `,
    url: "",
  },
];
//

interface ProjectCard {
  date: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCard> = ({
  date,
  title,
  description,
  url,
}) => {
  return (
    <div className="">
      <span className="border-l-2 border-zinc-300 pl-3 text-zinc-400 text-sm">
        {date}
      </span>
      <h1 className="mt-4 text-zinc-800 tracking-tight font-semibold text-lg">
        {title}
      </h1>
      <p className="mt-2 text-sm text-zinc-600 z-10">{description}</p>

      <a
        href={url}
        target="_blank"
        className="text-emerald-600 font-semibold text-sm flex items-center gap-3 mt-4"
      >
        <span>Visit website</span> <AiOutlineLink className="text-lg" />
      </a>
    </div>
  );
};
interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  return (
    <div className="flex flex-col gap-16 ">
      {PROJECTS.map((item, index) => {
        return (
          <ProjectCard
            date={item.date}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        );
      })}
    </div>
  );
};

export default ProjectsSection;
