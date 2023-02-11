import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ToggleTheme";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LemonDrop from "./components/Wave/LemonDrop";
//
function App() {
  return (
    // container
    <div className="bg-gray-50 min-h-screen overflow-hidden   ">
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
