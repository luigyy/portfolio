import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LemonDrop from "./components/Wave/LemonDrop";
import { useState, useEffect } from "react";
import { useCursorContext } from "./contexts/CursorContext";
import "./App.css";
//
function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [currentPic, setCurrentPic] = useState("");
  const { isHoveringProject, setIsHoveringProject } = useCursorContext();
  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      const { clientY, clientX } = e;
      setPos({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", updatePos);

    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  });

  const moveCursor = {
    transform: `translate(${pos.x + 150}px, ${pos.y - 130 + scrollY}px)`,
  };
  useEffect(() => {
    if (typeof isHoveringProject === "string" && isHoveringProject != "") {
      setCurrentPic(isHoveringProject);
    }
  });
  return (
    // container
    <div className="relative overflow-hidden w-full h-full">
      <div className="bg-gray-50 min-h-screen ">
        {/* img cursor */}
        <div
          className={`w-36 aspect-video  border-animation absolute transition-opacity rounded-sm  shadow-2xl overflow-hidden duration-300   ${
            isHoveringProject ? "opacity-100 " : "opacity-0"
          }`}
          style={moveCursor}
        >
          <div className="flex w-[133px] h-full  mx-auto  justify-center items-center">
            <img src={currentPic} className="w-full object-cover" alt="" />
          </div>
        </div>
        {/* img cursor */}

        {/* main card  */}
        <div className=" md:mx-16 bg-white min-h-screen shadow-sm  ">
          {/* navbar  */}
          <div className="relative bg-emerald-200 items-center  flex justify-center ">
            <Navbar />
            {/* <ToggleTheme /> */}
          </div>
          <div className="pt-14 bg-emerald-200  ">
            <Hero />
            <LemonDrop />
          </div>
          <Content />
          <Footer />
        </div>
        {/* main card  */}
      </div>
    </div>
  );
}

export default App;
