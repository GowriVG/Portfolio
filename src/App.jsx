import Navbar from "./Components/Navbar/Navbar";
import WavyBackground from "./Components/WavyBackground";
import Hero from "./Components/Hero";
import About from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import { ProjectsSection as Projects } from "./Components/Projects";
import Education from "./Components/Education";
import CertificatesSection from "./Components/Certificates";
import Contact from "./Components/Contact/contact";
import Experience from "./Components/Experience";
import ColorBends from "./Components/ColorBends/ColorBends";


const App = () => {
  return (
    <div className="text-stone-300 antialiased">
      {" "}
      <div className="fixed inset-0 -z-10" style={{ background: "#120f17" }}>
  <ColorBends
    rotation={90}
    speed={0.20}
    colors={["#7c7088"]}
    transparent
    autoRotate={-1}
    scale={1}
    frequency={1.1}
    warpStrength={1}
    mouseInfluence={1}
    parallax={0.2}
    noise={0.02}
    iterations={1}
    intensity={0.6}
    bandWidth={6}
  />
</div>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        {" "}
        <Navbar />
        <Hero />
        <About />
      </div>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        <Technologies />
      </div>
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        {" "}
        <Experience />
        <Projects />
        <Education />
        <CertificatesSection />
        <Contact />
      </div>
    </div>
  );
};

export default App;
