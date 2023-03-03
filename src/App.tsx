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
    transform: `translate(${pos.x}px, ${pos.y}px)`,
  };
  return (
    // container
    <div className="bg-gray-50 min-h-screen overflow-hidden   ">
      <div
        style={moveCursor}
        id="blob"
        className="w-56 h-56 bg-black absolute duration-[1s] ease-out"
      ></div>
      {/* main card  */}
      <div className="md:mx-16 bg-white min-h-screen shadow-sm ">
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
  );
}

export default App;
