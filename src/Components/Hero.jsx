import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/Gowri2bgrem.png";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-x-hidden
        /* mobile: top padding below navbar, natural height */
        pt-16 pb-12
        /* tablet: a bit more breathing room */
        sm:pt-20 sm:pb-16
        /* desktop: fill viewport height, centered */
        lg:min-h-[calc(100vh-80px)] lg:pt-0 lg:pb-0 lg:flex lg:items-center"
    >
      {/* ── MOBILE (< 768px): stacked — small image on top, text below ── */}
      <div className="flex flex-col items-center gap-6 md:hidden px-6">
        {/* Small circular photo — mobile only */}
        <div
          className={`relative w-44 h-44 rounded-full overflow-hidden
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(65,65,70,0.8) 0%, rgba(40,40,43,0.7) 50%, transparent 100%)",
            boxShadow: "0 0 40px rgba(60,60,65,0.6)",
          }}
        >
          <img
            src={ProfilePic}
            alt="Gowri V Gopal"
            className="w-full h-full object-cover object-top select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Text — mobile */}
        <div
          className={`flex flex-col items-center text-center
          transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-stone-500" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-stone-500">
              Hello
            </span>
            <span className="w-6 h-px bg-stone-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-3">
            Gowri V Gopal
          </h1>
          <div className="mb-6">
            <AnimatedText isVisible={isVisible} />
          </div>
          <a
            href="/Gowri_Resume.pdf"
            download
            className="px-7 py-3 rounded-full
                      bg-[linear-gradient(to_right,#9999ae,#35353a)]
                      text-white font-medium text-sm tracking-wide
                      transition-all duration-300 inline-block
                      hover:scale-105 hover:shadow-[0_0_24px_rgba(153,153,174,0.55)]
                      active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* ── TABLET + DESKTOP (768px+): side by side ── */}
      <div
        className="hidden md:flex flex-row-reverse w-full items-center
        px-8 lg:px-20 gap-8 lg:gap-0"
      >
        {/* Image column */}
        <div className="w-1/2 flex justify-center items-center">
          <div
            className={`relative w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[660px]
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            {/* Ash glow disc */}
            <div
              className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2
                w-[88%] aspect-square rounded-full pointer-events-none
                transition-opacity duration-1000 delay-200
                ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(65,65,70,0.72) 0%, rgba(40,40,43,0.62) 42%, transparent 68%)",
                filter: "blur(6px)",
              }}
            />
            <img
              src={ProfilePic}
              alt="Gowri V Gopal"
              className="relative z-10 w-full h-auto object-contain select-none pointer-events-none"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 8%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 8%)",
                filter: "contrast(1.03)",
              }}
              draggable={false}
            />
          </div>
        </div>

        {/* Text column */}
        <div className="w-1/2 flex flex-col items-start">
          <div
            className={`flex items-center gap-3 mb-4
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span className="w-7 h-px bg-stone-500" />
            <span className="text-xs tracking-[0.3em] uppercase text-stone-500">
              Hello
            </span>
          </div>

          <h1
            className={`text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-none mb-4
              transition-all duration-1000 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Gowri V Gopal
          </h1>

          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <AnimatedText isVisible={isVisible} />
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <a
              href="/Gowri_Resume.pdf"
              download
              className="px-8 py-3 rounded-full
                        bg-[linear-gradient(to_right,#9999ae,#35353a)]
                        text-white font-medium text-sm tracking-wide
                        transition-all duration-300 inline-block
                        hover:scale-105 hover:shadow-[0_0_24px_rgba(153,153,174,0.55)]
                        active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
