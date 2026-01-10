    // <div className="text-center mb-16">
    //   <h2 className='text-center text-4xl text-white'>Technologies</h2>
    //     <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
import React from 'react'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity.jsx'

// --- SAFE ICON IMPORTS ---
// 1. FontAwesome (Stable & Safe)
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, 
  FaGithub, FaCode, FaChartBar, FaEye 
} from "react-icons/fa"

// 2. DevIcons (Good for languages/databases)
import { 
  DiMysql, DiMsqlServer, DiVisualstudio, 
  DiLaravel, DiPhp, DiCodeBadge 
} from "react-icons/di"

// 3. Simple Icons (Brand specific)
import { SiTailwindcss, SiAngular, SiDotnet, SiVite } from "react-icons/si"

// Reusable Component for consistent style
const TechCard = ({ Icon, name, color }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-6 group cursor-pointer select-none">
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-3 shadow-lg group-hover:border-purple-500/50 group-hover:bg-white/10 transition-all duration-300">
        <Icon className={`text-4xl ${color} drop-shadow-md`} />
      </div>
      {/* Text Underneath */}
      <span className="text-gray-400 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="text-center mb-16 relative z-10">
      <h2 className='text-center text-4xl text-white font-bold'>Technologies</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>

      {/* --- ROW 1: FRONTEND & WEB FRAMEWORKS --- */}
      <div className="mb-8 mt-12">
        <ScrollVelocity velocity={35} className="flex items-center">
            {/* Core Web */}
            <TechCard Icon={FaHtml5} name="HTML5" color="text-orange-500" />
            <TechCard Icon={FaCss3Alt} name="CSS3" color="text-blue-500" />
            <TechCard Icon={FaJs} name="JavaScript" color="text-yellow-400" />
            
            {/* Frameworks (Replaced Next.js with Streamlit) */}
            <TechCard Icon={FaReact} name="ReactJS" color="text-cyan-400" />
            <TechCard Icon={SiAngular} name="Angular" color="text-red-600" />
            <TechCard Icon={SiDotnet} name=".NET Core" color="text-purple-500" />
            <TechCard Icon={DiLaravel} name="Laravel" color="text-red-600" />
            <TechCard Icon={FaChartBar} name="Streamlit" color="text-red-500" /> 
            
            {/* Styling */}
            <TechCard Icon={SiTailwindcss} name="Tailwind" color="text-cyan-400" />
            <TechCard Icon={FaBootstrap} name="Bootstrap" color="text-purple-600" />
            
            {/* Web Backends */}
            <TechCard Icon={DiPhp} name="PHP" color="text-indigo-400" />
            <TechCard Icon={FaNodeJs} name="NodeJS" color="text-green-500" />
        </ScrollVelocity>
      </div>

      {/* --- ROW 2: LANGUAGES, DATABASES & TOOLS --- */}
      <div className="mb-8">
        <ScrollVelocity velocity={-35} className="flex items-center">
            {/* Core Languages */}
            <TechCard Icon={FaPython} name="Python" color="text-yellow-500" />
            <TechCard Icon={FaJava} name="Java" color="text-orange-600" />
            <TechCard Icon={FaCode} name="C" color="text-blue-400" />
            <TechCard Icon={DiCodeBadge} name="C++" color="text-blue-600" />
            {/* Databases */}
            <TechCard Icon={DiMsqlServer} name="SQL Server" color="text-red-500" />
            <TechCard Icon={DiMysql} name="MySQL" color="text-blue-400" />
            
            {/* AI / Tools */}
            <TechCard Icon={FaEye} name="OpenCV" color="text-green-400" />
            <TechCard Icon={FaGitAlt} name="Git" color="text-orange-600" />
            <TechCard Icon={FaGithub} name="GitHub" color="text-white" />
            <TechCard Icon={FaDocker} name="Docker" color="text-blue-500" />
            <TechCard Icon={DiVisualstudio} name="VS Code" color="text-blue-400" />
            <TechCard Icon={SiVite} name="Vite" color="text-purple-400" />
        </ScrollVelocity>
      </div>
      
    </div>
  )
}

export default Technologies