import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/AboutMe'
import Technologies from './Components/Technologies'
import { ProjectsSection as Projects } from './Components/Projects';
import Education from './Components/Education';
import CertificatesSection from './Components/Certificates';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div className = 'overflow-x-hidden text-stone-300 antialiased'>
      <div className= "fixed inset-0 -z-10">
       {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Education/>
        <CertificatesSection/>
        <Contact/>
      </div>
    </div>
  )
}


export default App
