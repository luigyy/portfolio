import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImBooks } from "react-icons/im";

//
const EMAIL = "luigy.valverde@ucr.ac.cr";
//

interface ProjectCard {}

const ProjectCard = () => {
  return (
    <div className="">
      <span className="border-l-2 border-zinc-300 pl-3 text-zinc-400 text-sm">
        September, 2022
      </span>
      <h1 className="mt-4 text-zinc-800 tracking-tight font-semibold text-lg">
        {" "}
        calcuBecasUCR
      </h1>
      <p className="mt-2 text-sm text-zinc-600 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        laborum voluptatem laboriosam excepturi nesciunt modi, rerum laudantium
        hic quis cum.
      </p>

      <a
        href=""
        className="text-emerald-600 font-semibold text-sm flex items-center gap-3 mt-4"
      >
        <span>Visit website</span> <AiOutlineLink className="text-lg" />
      </a>
    </div>
  );
};

interface ContentProps {}

const Content: React.FC<ContentProps> = ({}) => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-24 px-8 lg:px-12">
      {/* left div  */}
      <div className="flex flex-col gap-16 ">
        {" "}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      {/* left div  */}
      {/* right div  */}
      <div className="flex flex-col gap-16 ">
        {/* email div  */}
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
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
            <button className="ml-3 text-white bg-emerald-600 py-2 px-3 rounded-lg">
              Copy
            </button>
          </div>
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
          <div className="mt-5">
            <h1 className="flex flex-col">
              <span></span>
              <span></span>
            </h1>
            <span></span>
          </div>
        </div>
      </div>
      {/* right div  */}
    </div>
  );
};

export default Content;
