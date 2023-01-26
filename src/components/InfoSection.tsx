import React, { useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { ImBooks } from "react-icons/im";

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
        {/* email div  */}
        <div
          onMouseLeave={() => setCopied(false)}
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-blue-50/10"
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
                  <p className="text-right text-zinc-500/70 ">2020 — Present</p>
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
