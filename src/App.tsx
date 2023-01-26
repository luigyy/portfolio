import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Hero from "./components/Hero";
import Content from "./components/Content";
//
function App() {
  return (
    // container
    <div className="bg-gray-50 min-h-screen overflow-hidden pb-10">
      {/* main card  */}
      <div className="md:mx-16 bg-white min-h-screen shadow-sm">
        {/* navbar  */}
        <div className="relative items-center flex justify-center ">
          <Navbar />
          <ToggleTheme />
        </div>
        <div className="mt-14">
          <Hero />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
