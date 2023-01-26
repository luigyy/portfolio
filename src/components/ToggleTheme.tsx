import React from "react";
import { FiSun } from "react-icons/fi";
import { useState } from "react";

interface ToggleThemeProps {}

const ToggleTheme: React.FC<ToggleThemeProps> = ({}) => {
  const [theme, setTheme] = useState("lofi");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "lofi" : "night");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      className="tooltip tooltip-bottom backdrop-blur mt-6 absolute md:right-[80px] right-5 md:top-0 top-14  hover:shadow-lg  shadow-md ring-1 ring-zinc-900/5 rounded-full"
      data-tip="Soon to be implemented"
    >
      <button
        // onClick={() => toggleTheme()}
        className="items-center text-xl opacity-60 text-emerald-600 px-3 py-2"
      >
        <FiSun className="" />
      </button>
    </div>
  );
};

export default ToggleTheme;
