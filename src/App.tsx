import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LemonDrop from "./components/Wave/LemonDrop";
import { useState, useEffect } from "react";
import "./App.css";
//
function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
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
    transform: `translate(${pos.x - 112}px, ${pos.y - 112 + scrollY}px)`,
  };
  return (
    // container
    <div className="relative overflow-hidden w-full h-full">
      <div className="bg-gray-50 min-h-screen overflow-hidden ">
        <div
          style={moveCursor}
          id="blob"
          className=" w-60 h-60   text-white rounded-full   absolute duration-[3s] ease-out "
        >
          <div
            id="in-blob"
            className="blur-[170px] bg-emerald-200 bg-blend-darken w-full rounded-full h-full"
          ></div>
        </div>
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
      </div>
    </div>
  );
}

export default App;
