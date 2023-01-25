import React from "react";
import { FiSun } from "react-icons/fi";

interface ToggleThemeProps {}

const ToggleTheme: React.FC<ToggleThemeProps> = ({}) => {
  return (
    <div className=" backdrop-blur mt-6 absolute right-[80px] px-3 py-2 shadow-md ring-1 ring-zinc-900/5 rounded-full">
      <FiSun className="text-xl opacity-60 hover:text-emerald-600" />
    </div>
  );
};

export default ToggleTheme;
