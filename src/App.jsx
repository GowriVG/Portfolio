import Navbar from "./Components/Navbar/Navbar";
import WavyBackground from "./Components/WavyBackground";
import Hero from "./Components/Hero";
import About from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import { ProjectsSection as Projects } from "./Components/Projects";
import Education from "./Components/Education";
import CertificatesSection from "./Components/Certificates";
import Contact from "./Components/Contact/contact";
import Experience from './Components/Experience';

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* <div className="fixed inset-0 -z-10 bg-lines-pattern"> */}
      {/* Top-center purple spotlight */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(120,119,198,0.28),transparent)]" /> */}
      {/* Bottom warm glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(80,60,120,0.15),transparent)]" /> */}
      {/* </div> */}

      {/* ── Fixed Background ── */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
        <WavyBackground />
        {/* Subtle ash grey radial — no colour tint, just depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(60,60,60,0.35),transparent)]" />
      </div>

      {/* ── Page Content ── */}
      <div className="overflow-x-hidden w-full max-w-screen-2xl mx-auto px-4 sm:px-8">
        <Navbar />
        <Hero />
        <About />
      </div>

      {/* Technologies: full-width outside container so marquee can overflow freely */}
      

      <div className="overflow-x-hidden container mx-auto px-8">
        <Technologies />
        <Projects />
        <Education />
        <Experience />
        <CertificatesSection />
        <Contact />
      </div>

    </div>
  );
};

export default App;
