import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { TfiDownload } from "react-icons/tfi";
import ProjectsSection from "./ProjectsSection";
import InfoSection from "./InfoSection";
import Skills from "./Skills";

//

interface ContentProps {}

const Content: React.FC<ContentProps> = ({}) => {
  return (
    <div className=" bg-no-repeat bg-cover pb-20">
      <h1
        className="mt-16 pt-6 px-12 text-4xl text-zinc-800 font-semibold"
        id="projects"
      >
        Experience
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-20 px-8 lg:px-12">
        {/* left div  */}
        <ProjectsSection />
        {/* left div  */}

        {/* right div  */}
        <InfoSection />
        {/* right div  */}
      </div>
      <Skills />
    </div>
  );
};

export default Content;
