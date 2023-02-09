import React from "react";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <div className="px-12 mt-44 pb-18">
      <h1 className="text-4xl mb-20 text-zinc-800 font-semibold">Skills</h1>

      {/* frontend  */}
      <div className=" min-h-72 gap-y-10 md:flex grid grid-cols-1 ">
        {/* left */}
        <div className="md:p-2 md:w-[65%]  ">
          <h1 className="border-l-4 pl-5 border-l-emerald-600/40 text-emerald-600/90 font-semibold text-lg ">
            Frontend
          </h1>
          <p className="mt-10 text-sm text-zinc-600 md:pl-6 ">
            My main technologies to build user interfaces are{" "}
            <span className="font-semibold">
              {" "}
              Typescript + React + Tailwindcss
            </span>
            , I really love these two technologies because they provide an
            amazing developer experience and once you get comofortable, You can
            get really fast. I have also built projects with technologies such
            as{" "}
            <span className="font-semibold">
              {" "}
              Vuejs, Bootstrap and React Native
            </span>{" "}
            .
          </p>
        </div>

        {/* right  */}
        <div className="pl-5 grid grid-cols-3 mt-10 mx-auto gap-5  md:w-auto w-full">
          {[
            "bootstrap.png",
            "css.png",
            "react.png",
            "tailwind.png",
            "typescript.png",
            "vue.png",
          ].map((item) => (
            <div className="p-1 overflow-hidden h-10 w-10 flex mx-auto items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
              <img
                src={`/logos/${item}`}
                className="bg-transparent rounded-full h-7 w-7"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* backend  */}
      <div className=" min-h-72 gap-y-10 md:flex grid grid-cols-1 mt-20 ">
        {/* left */}
        <div className="md:p-2 md:w-[65%]  ">
          <h1 className="border-l-4 pl-5 border-l-emerald-600/40 text-emerald-600/90 font-semibold text-lg ">
            Backend
          </h1>
          <p className="mt-10 text-sm text-zinc-600 md:pl-6">
            I'm very comfortable at writing REST API's using{" "}
            <span className="font-semibold">
              Typescript + Nodejs + Expressjs.{" "}
            </span>{" "}
            I have also used a lot of{" "}
            <span className="font-semibold">tRPC + Nextjs + React</span> which I
            love for it's simplicity and amazing developer experience when using
            Typescript for both frontend and backend. I've also worked with
            technologies such as{" "}
            <span className="font-semibold">
              {" "}
              GraphQL, Sqlite, PostgreSQL, MongoDB.
            </span>
          </p>
        </div>

        {/* right  */}
        <div className="pl-5 grid grid-cols-3 mt-10 mx-auto gap-5  md:w-auto w-full">
          {[
            "graphql.png",
            "expressjs.png",
            "mongodb.png",
            "nextjs.png",
            "postgresql.png",
            "nodejs.png",
          ].map((item) => (
            <div className="p-1 overflow-hidden h-10 w-10 flex mx-auto items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
              <img
                src={`/logos/${item}`}
                className="bg-transparent rounded-full h-7 w-7"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
