import React from "react";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity.jsx";
import CLangIcon from "../assets/C lang.png";
import CppLangIcon from "../assets/cpp-lang.png";
import CSharpIcon from "../assets/csharp-lang.png";
import OpenCVIcon from "../assets/opencv-lang.png";
import PythonIcon from "../assets/python-lang.png";
import AzureOpenAIIcon from "../assets/azure-openai.png";
// --- SAFE ICON IMPORTS ---
// 1. FontAwesome
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaChartBar,
  FaProjectDiagram,
  FaCogs,
} from "react-icons/fa";

// 2. DevIcons
import {
  DiMysql,
  DiMsqlServer,
  DiVisualstudio,
  DiLaravel,
  DiPhp,
  DiCodeBadge,
} from "react-icons/di";

// 3. Simple Icons
import {
  SiTailwindcss,
  SiAngular,
  SiDotnet,
  SiVite,
  SiStreamlit,
} from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import {
  SiPostman,
  SiSwagger,
  SiFastapi,
  SiChartdotjs,
  SiGooglegemini,
} from "react-icons/si";

// const TechCard = ({ Icon, name, color }) => {
//   return (
//     <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
//       <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
//         <Icon className={`text-2xl md:text-4xl ${color} drop-shadow-md`} />
//       </div>

//       <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
//         {name}
//       </span>
//     </div>
//   );
// };

const TechCard = ({ Icon, name, color }) => {
  return (
    <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
      <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
        <Icon className={`text-2xl md:text-4xl ${color} drop-shadow-md`} />
      </div>

      <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

const Technologies = () => {
  return (
    <section
      id="technologies"
      //className="relative px-4 py-8 sm:px-6 sm:py-8 md:py-8 lg:px-4 lg:py-5"
      className="relative px-4 pt-10 pb-6 sm:px-6 sm:pt-10 md:pt-12 md:pb-8 lg:px-4"
    >
      <h2 className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl text-white mb-0">
        Technologies
      </h2>
      <div
        className="w-44 md:w-34 lg:w-52 h-[2px] mx-auto mt-2 rounded-sm"
        style={{
          background:
            "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
          boxShadow:
            "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          borderRadius: "2px",
        }}
      />

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
          <TechCard Icon={SiStreamlit} name="Streamlit" color="text-red-500" />

          {/* Styling */}
          <TechCard
            Icon={SiTailwindcss}
            name="Tailwind"
            color="text-cyan-400"
          />
          <TechCard
            Icon={FaBootstrap}
            name="Bootstrap"
            color="text-purple-600"
          />
          {/* Data Viz */}
          <TechCard Icon={SiChartdotjs} name="Chart.js" color="text-pink-500" />

          {/* API Frameworks */}
          <TechCard Icon={SiFastapi} name="FastAPI" color="text-teal-400" />

          {/* Web Backends */}
          <TechCard Icon={DiPhp} name="PHP" color="text-indigo-400" />
          <TechCard Icon={FaNodeJs} name="NodeJS" color="text-green-500" />
        </ScrollVelocity>
      </div>

      {/* --- ROW 2: LANGUAGES, DATABASES & TOOLS --- */}
      <div className="mb-8">
        <ScrollVelocity velocity={-35} className="flex items-center">
          {/* Core Languages */}

          {/* <div className="flex flex-col items-center justify-center mx-3 md:mx-5 group cursor-pointer select-none"> */}
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img
                src={PythonIcon}
                alt="Python"
                className="w-6 h-6 md:w-9 md:h-9"
              />
            </div>
            {/* <span className="text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300"> */}
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              Python
            </span>
          </div>

          <TechCard Icon={FaJava} name="Java" color="text-orange-600" />
          {/* <div className="flex flex-col items-center justify-center mx-3 md:mx-5 group cursor-pointer select-none"> */}
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img src={CLangIcon} alt="C" className="w-9 h-9 md:w-9 md:h-9" />
            </div>
            {/* <span className="text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300"> */}
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              C
            </span>
          </div>

          {/* <div className="flex flex-col items-center justify-center mx-3 md:mx-5 group cursor-pointer select-none"> */}
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img
                src={CppLangIcon}
                alt="C++"
                className="w-9 h-9 md:w-9 md:h-9"
              />
            </div>
            {/* <span className="text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300"> */}
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              C++
            </span>
          </div>

          {/* <div className="flex flex-col items-center justify-center mx-3 md:mx-5 group cursor-pointer select-none"> */}
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img
                src={CSharpIcon}
                alt="C#"
                className="w-8 h-9 md:w-9 md:h-9"
              />
            </div>
            {/* <span className="text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300"> */}
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              C#
            </span>
          </div>
          {/* Databases */}
          <TechCard
            Icon={DiMsqlServer}
            name="SQL Server"
            color="text-red-500"
          />
          <TechCard Icon={DiMysql} name="MySQL" color="text-blue-400" />

          {/* AI / Tools */}
          {/* <div className="flex flex-col items-center justify-center mx-3 md:mx-5 group cursor-pointer select-none"> */}
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img
                src={OpenCVIcon}
                alt="OpenCV"
                className="w-9 h-9 md:w-9 md:h-9"
              />
            </div>
            {/* <span className="text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300"> */}
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              OpenCV
            </span>
          </div>
          <TechCard Icon={FaGitAlt} name="Git" color="text-orange-600" />
          <TechCard Icon={FaGithub} name="GitHub" color="text-white" />
          <TechCard Icon={FaDocker} name="Docker" color="text-blue-500" />
          <TechCard
            Icon={DiVisualstudio}
            name="VS Code"
            color="text-blue-400"
          />
          <TechCard Icon={SiVite} name="Vite" color="text-purple-400" />

          {/* Cloud & DevOps */}
          <TechCard Icon={VscAzure} name="Azure" color="text-blue-500" />
          <TechCard Icon={VscAzureDevops} name="DevOps" color="text-blue-400" />
          <div className="w-[86px] md:w-[96px] flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer select-none">
            <div className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:border-[#9999ae]/50 group-hover:bg-white/10 transition-all duration-300">
              <img
                src={AzureOpenAIIcon}
                alt="Azure OpenAI"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <span className="w-full text-center text-gray-400 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300">
              OpenAI
            </span>
          </div>

          {/* API Tools */}
          <TechCard
            Icon={FaProjectDiagram}
            name="Graph API"
            color="text-purple-400"
          />
          <TechCard Icon={SiSwagger} name="Swagger" color="text-green-500" />
          <TechCard Icon={SiPostman} name="Postman" color="text-orange-500" />
          <TechCard Icon={SiGooglegemini} name="Gemini" color="text-blue-400" />
        </ScrollVelocity>
      </div>
    </section>
  );
};

export default Technologies;
