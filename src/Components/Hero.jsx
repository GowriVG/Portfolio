import React, { useState, useEffect } from 'react';
import ProfilePic from '../Assets/GowriProfilec.png';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200); // delay for smooth start
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 lg:px-20 pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse ">
        
        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              // src={ProfilePic}
              alt="Gowri V Gopal"
              className={`
                w-200 h-148 rounded-2xl border border-transparent object-contain
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                hover:scale-105
              `}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className={`
            flex flex-col items-center lg:items-start mt-10
            transform transition-all duration-1000 ease-out delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h3 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Gowri V Gopal
            </h3>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
                Master of Computer Application Student 
            </span>
            <p className="my-1 max-w-lg py-5 text-xl leading-relaxed tracking-tighter text-justify">
              {HERO_CONTENT}
            </p>
            <a
              href="/Gowri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`
                bg-white rounded-full px-6 py-3 text-sm text-stone-800 mb-10 shadow-md
                transform transition-all duration-1000 ease-out delay-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
