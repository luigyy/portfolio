import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { TfiDownload } from "react-icons/tfi";

//
const EMAIL = "luigy.valverde@ucr.ac.cr";
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

interface ContentProps {}

const Content: React.FC<ContentProps> = ({}) => {
  const [copied, setCopied] = useState(false);
  //
  function copyToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  }
  return (
    <div>
      <h1
        className="mt-72 px-12 text-4xl text-zinc-800 font-semibold"
        id="projects"
      >
        Projects
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-20 px-8 lg:px-12">
        {/* left div  */}
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
        {/* left div  */}
        {/* right div  */}
        <div className="flex flex-col gap-16 ">
          {/* email div  */}
          <div
            onMouseLeave={() => setCopied(false)}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h1 className="text-sm font-semibold text-zinc-800 flex items-center gap-2">
              {" "}
              <MdEmail className=" text-zinc-400 text-2xl" />{" "}
              <span className="text-zinc-800">Email me</span>
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              Feel free to reach out anytime through any of my socials or via
              email.
            </p>
            <div className="">
              <input
                type="text"
                disabled
                value={EMAIL}
                className="
              text-zinc-500 text-sm
              w-[60%] mx-auto disabled:bg-white  ring-1 ring-zinc-900/5  shadow-md appearance-none rounded-lg mt-5 px-3 py-2"
              />
              <button
                onClick={() => copyToClipboard()}
                onMouseEnter={() => setCopied(false)}
                className="ml-3 text-white bg-emerald-600 py-2 px-3 rounded-lg"
              >
                Copy
              </button>
            </div>
            <p className="text-sm text-emerald-500 mt-4 text-left">
              {copied ? "Copied to clipboard!" : ""}
            </p>
          </div>

          {/* email div  */}
          <div className=" rounded-2xl border border-zinc-100 p-6 ">
            <div className="flex items-center gap-3 ">
              <span className="text-2xl text-zinc-500">
                <ImBooks />
              </span>
              <span className="text-sm text-zinc-800 font-semibold ">
                Education
              </span>
            </div>
            {/* education div  */}
            <div className="" id="education">
              {/* ucr  */}
              <div className="mt-5 flex gap-4">
                <div className=" p-1 overflow-hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md shadow-zinc-500/5 ring-1 ring-zinc-900/5">
                  <img
                    src="ucr.png"
                    className="bg-transparent rounded-full h-7 w-7"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-zinc-700 font-semibold text-sm">
                      Universidad de Costa Rica
                    </p>
                  </div>
                  <div className=" flex w-full mt-2 text-[12px]">
                    <p className="text-zinc-600 pr-10">BS. Pure Mathematics</p>
                    <p className="text-right text-zinc-500/70 ">
                      2020 — Present
                    </p>
                  </div>
                </div>
              </div>

              {/* cv div  */}
              <div
                className="w-[80%] mx-auto mt-10 bg-zinc-100 text-center py-2"
                id="resume"
              >
                {" "}
                <a
                  href="luigyValverde-CV.pdf"
                  download="luigy-CV.pdf"
                  className="text-zinc-700 flex gap-4 justify-center mx-auto items-center text-sm font-semibold "
                >
                  Download CV{" "}
                  <TfiDownload className="text-lg text-zinc-700/50" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* right div  */}
      </div>
    </div>
  );
};

export default Content;
