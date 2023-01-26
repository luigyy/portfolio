import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <span className="transition-shadow ring-1 ring-zinc-900/5 hover:shadow-lg duration-1000 rounded-full md:px-4 px-2  py-2 mt-6  shadow">
      <span className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2">
        About
      </span>
      <span className="text-sm font-medium text-primary  hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2">
        Projects
      </span>
      <span className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2">
        Education
      </span>
      <span className="text-sm font-medium text-primary hover:text-emerald-600 opacity-80 md:px-3 px-2 py-2">
        Resume
      </span>
    </span>
  );
};

export default Navbar;
