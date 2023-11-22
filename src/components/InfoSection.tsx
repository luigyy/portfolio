import React, { useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import { ImBooks } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";

const EMAIL = "luigy.valverde@ucr.ac.cr";
interface InfoSectionProps {}

const InfoSection: React.FC<InfoSectionProps> = ({}) => {
  const [copied, setCopied] = useState(false);
  //
  function copyToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  }
  return (
    <div>
      {" "}
      {/* right div  */}
      <div className="flex flex-col gap-16 ">
        <div className=" rounded-2xl border border-zinc-100 p-6 ">
          <div className="flex items-center gap-3 ">
            <span className="text-2xl text-zinc-500">
              <MdWorkOutline />
            </span>
            <span className="text-sm text-zinc-800 font-semibold ">
              Experience
            </span>
          </div>
          {/* education div  */}
          <div className="" id="education">
            {/* ucr  */}
            <div className="mt-5 flex gap-4">
              <div className="p-1 overflow-hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md shadow-zinc-500/5 ring-1 ring-zinc-900/5">
                <img
                  loading="lazy"
                  src="movi_logo_min.png"
                  className="bg-transparent object-contain rounded-full h-7 w-7"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between w-full">
                  <p className="text-zinc-700 font-semibold text-sm">Movi</p>
                  <p className="text-zinc-700  italic text-sm">
                    05/2023 - Present
                  </p>
                </div>
                <div className=" flex w-full mt-2 text-[12px]">
                  <p className="text-zinc-600 pr-10">Jr full-stack developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <div className="p-1 overflow-hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md shadow-zinc-500/5 ring-1 ring-zinc-900/5">
                <img
                  loading="lazy"
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
                href="Luigy-Resume.pdf"
                download="luigy-CV.pdf"
                className="text-zinc-700 flex gap-4 justify-center mx-auto items-center text-sm font-semibold "
              >
                Download CV <TfiDownload className="text-lg text-zinc-700/50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
