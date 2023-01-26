import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
//
function App() {
  return (
    // container
    <div className="bg-gray-50 min-h-screen overflow-hidden   ">
      {/* main card  */}
      <div className="md:mx-16 bg-white min-h-screen shadow-sm ">
        {/* navbar  */}
        <div className="relative items-center flex justify-center ">
          <Navbar />
          <ToggleTheme />
        </div>
        <div className="mt-14">
          <Hero />
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
