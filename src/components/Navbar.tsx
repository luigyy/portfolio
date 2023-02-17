import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <span className="transition-shadow ring-1 ring-zinc-900/5 hover:shadow-lg duration-1000 rounded-full md:px-4 px-2  py-2 mt-6  shadow">
      <a
        href="#skills"
        className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="text-sm font-medium text-primary  hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2"
      >
        Projects
      </a>
      <a
        href="#education"
        className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2"
      >
        Education
      </a>
      <a
        href="#resume"
        className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2"
      >
        Resume
      </a>
    </span>
  );
};

export default Navbar;
