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
    <div className=" backdrop-blur mt-6 absolute right-[80px]  shadow-md ring-1 ring-zinc-900/5 rounded-full">
      <button
        // onClick={() => toggleTheme()}
        className="items-center text-xl opacity-60 hover:text-emerald-600 px-3 py-2"
      >
        <FiSun className="" />
      </button>
    </div>
  );
};

export default ToggleTheme;
