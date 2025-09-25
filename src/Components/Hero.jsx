import React, { useState, useEffect } from 'react';
import ProfilePic from '../Assets/GowriProfilec.png';
import {ArrowDown } from 'lucide-react';
import TextType from './Text-Type/TextType';
import AnimatedText from './AnimatedText';

<TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200); // delay for smooth start
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="px-6 lg:px-20 pb-4 lg:mb-36">
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
          <div
            className={`
              flex flex-col items-center lg:items-start mt-10
              transform transition-all duration-1000 ease-out delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <h3 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Gowri V Gopal
            </h3>
           
   <AnimatedText isVisible={isVisible} />

 
           
            <div>
            <div className={`pt-4 transform transition-all duration-1000 ease-out delay-500
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
             <a
                href="/Gowri_Resume.pdf"
                download
                className="px-6 py-2 rounded-full 
                          bg-[linear-gradient(to_right,#9999ae,#35353a)] 
                          text-white font-medium
                          transition-all duration-300
                          hover:scale-105 hover:shadow-[0_0_15px_rgba(153,153,174,0.5)]
                          active:scale-95"
                >
                Download Resume
              </a>

            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator: static on small/medium, absolute on large screens */}
      <div className="flex flex-col items-center animate-bounce mt-8 lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;


