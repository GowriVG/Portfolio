import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/Gowri2bgrem.png";
import AnimatedText from "./AnimatedText";

const heroBtnStyles = `
  .hero-btn {
    --line_color: #c8c8d8;
    position: relative;
    z-index: 0;
    width: 200px;
    height: 52px;
    text-decoration: none;
    font-size: 11px;
    font-weight: bold;
    color: var(--line_color);
    letter-spacing: 2px;
    transition: letter-spacing 0.3s ease;
    display: inline-block;
    overflow: hidden;
  }
  .hero-btn__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .hero-btn::before,.hero-btn::after,.hero-btn__text::before,.hero-btn__text::after {
    content: "";position: absolute;height: 3px;border-radius: 2px;
    background: var(--line_color);transition: all 0.5s ease;
  }
  .hero-btn::before { top:0;left:54px;width:calc(100% - 56px * 2 - 16px); }
  .hero-btn::after { top:0;right:54px;width:8px; }
  .hero-btn__text::before { bottom:0;right:54px;width:calc(100% - 56px * 2 - 16px); }
  .hero-btn__text::after { bottom:0;left:54px;width:8px; }
  .hero-btn__line { position:absolute;top:0;width:56px;height:100%;overflow:hidden;z-index:2; }
  .hero-btn__line::before {
    content:"";position:absolute;top:0;width:150%;height:100%;
    box-sizing:border-box;border-radius:300px;border:solid 3px var(--line_color);
  }
  .hero-btn__line:nth-child(1),.hero-btn__line:nth-child(1)::before { left:0; }
  .hero-btn__line:nth-child(2),.hero-btn__line:nth-child(2)::before { right:0; }
  .hero-btn:hover { letter-spacing:6px; }
  .hero-btn:hover::before,.hero-btn:hover .hero-btn__text::before { width:8px; }
  .hero-btn:hover::after,.hero-btn:hover .hero-btn__text::after { width:calc(100% - 56px * 2 - 16px); }
  
  .hero-btn__shimmer {
  position: absolute;
  inset: 3px;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  border-radius: 28px;
}
 .hero-btn__shimmer-bar {
  position: absolute;
  top: -10%;
  width: 48px;
  height: 120%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.35),
    transparent
  );
  transform: skewX(-13deg) translateX(-50px);
  animation: hero-shimmer-auto 2.8s ease-in-out infinite;
}
  @keyframes hero-shimmer-auto {
    0%   { transform: skewX(-13deg) translateX(-50px); }
    30%  { transform: skewX(-13deg) translateX(230px); }
    100% { transform: skewX(-13deg) translateX(230px); }
  }
`;

const ResumeButton = () => (
  <a href="/Gowri_Resume.pdf" download className="hero-btn">
    <div className="hero-btn__line"></div>
    <div className="hero-btn__line"></div>
    <div className="hero-btn__shimmer">
      <div className="hero-btn__shimmer-bar"></div>
    </div>
    <span className="hero-btn__text">RESUME</span>
  </a>
);

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
        pt-16 pb-12
        sm:pt-20 sm:pb-16
        lg:min-h-[calc(100vh-80px)] lg:pt-0 lg:pb-0 lg:flex lg:items-center"
    >
      <style>{heroBtnStyles}</style>

      <div className="flex flex-col items-center gap-6 md:hidden px-6">
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

        <div
          className={`flex flex-col items-center text-center
          transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-stone-500" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-stone-500">
              Hello, i am
            </span>
            <span className="w-6 h-px bg-stone-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-3">
            Gowri V Gopal
          </h1>
          <div className="mb-6">
            <AnimatedText isVisible={isVisible} />
          </div>
          <ResumeButton />
        </div>
      </div>

      {/* ── TABLET + DESKTOP (768px+): side by side ── */}
      <div
        className="hidden md:flex flex-row-reverse w-full items-center
        px-8 lg:px-20 gap-8 lg:gap-0"
      >
        <div className="w-1/2 flex justify-center items-center">
          <div
            className={`relative w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[660px]
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
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

        <div className="w-1/2 flex flex-col items-start">
          <div
            className={`flex items-center gap-3 mb-4
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span className="w-7 h-px bg-stone-500" />
            <span className="text-xs tracking-[0.3em] uppercase text-stone-500">
              Hello , I am
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
            <ResumeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
