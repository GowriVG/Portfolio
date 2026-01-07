import React from 'react'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity.jsx'

// --- SAFE ICON IMPORTS ---
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, 
  FaAndroid, FaAws, FaCloud, FaRobot 
} from "react-icons/fa"

import { 
  DiMongodb, DiMysql, DiPostgresql, DiVisualstudio, 
  DiLaravel, DiPhp, DiDjango, DiRedis, DiCodeBadge 
} from "react-icons/di"

import { SiTailwindcss, SiAngular, SiDotnet, SiVite } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

// Reusable Component for consistent style
const TechCard = ({ Icon, name, color }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-6 group cursor-pointer">
      {/* Icon Container: Glassy, Transparent, Rounded */}
      <div className="w-15 h-15 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-3 shadow-lg group-hover:border-purple-500/50 group-hover:bg-white/10 transition-all duration-300">
        <Icon className={`text-5xl ${color} drop-shadow-md`} />
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
    <div className="text-center mb-16">
      <h2 className='text-center text-4xl text-white'>Technologies</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>




      {/* --- ROW 1: FRONTEND --- */}
      <div className="mb-12">
        <ScrollVelocity velocity={30} className="flex items-center">
            <TechCard Icon={FaHtml5} name="HTML5" color="text-orange-500" />
            <TechCard Icon={FaCss3Alt} name="CSS3" color="text-blue-500" />
            <TechCard Icon={FaJs} name="JavaScript" color="text-yellow-400" />
            <TechCard Icon={FaBootstrap} name="Bootstrap" color="text-purple-600" />
            <TechCard Icon={SiTailwindcss} name="Tailwind" color="text-cyan-400" />
            <TechCard Icon={FaReact} name="ReactJS" color="text-cyan-400" />
            <TechCard Icon={SiAngular} name="Angular" color="text-red-600" />
            <TechCard Icon={TbBrandNextjs} name="NextJS" color="text-white" />
            <TechCard Icon={DiLaravel} name="Laravel" color="text-red-600" />
        </ScrollVelocity>
      </div>

      {/* --- ROW 2: BACKEND & TOOLS --- */}
      <div className="mb-8">
        <ScrollVelocity velocity={-30} className="flex items-center">
            <TechCard Icon={FaNodeJs} name="NodeJS" color="text-green-500" />
            <TechCard Icon={FaPython} name="Python" color="text-yellow-500" />
            <TechCard Icon={FaJava} name="Java" color="text-orange-600" />
            <TechCard Icon={DiCodeBadge} name="C++" color="text-blue-500" />
            <TechCard Icon={SiDotnet} name=".NET" color="text-purple-500" />
            <TechCard Icon={DiMongodb} name="MongoDB" color="text-green-500" />
            <TechCard Icon={DiMysql} name="MySQL" color="text-blue-400" />
            <TechCard Icon={FaDocker} name="Docker" color="text-blue-500" />
            <TechCard Icon={DiVisualstudio} name="VS Code" color="text-blue-400" />
            <TechCard Icon={SiVite} name="Vite" color="text-purple-400" />
        </ScrollVelocity>
      </div>
      
    </div>
  )
}

export default Technologies