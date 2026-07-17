import React from "react";
import ScrollReveal from "./Scroll-Reveal/ScrollReveal.jsx";
import { aboutMeText } from "../constants/index.js";
export default function AboutMe() {
  return (
    <section
      id="about"
      className="row target-section relative z-20 px-4 md:px-6 h-auto pt-16 md:pt-1"
      data-parallax="scroll"
    >
      {/* Heading outside ScrollReveal */}
      <h2 className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl text-white mb-0">
        About Me
      </h2>
      <div
        className="w-29 md:w-32 lg:w-40 h-[2px] mx-auto mt-2 rounded-sm"
        style={{
          background:
            "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
          boxShadow:
            "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          borderRadius: "2px",
        }}
      />

      {/* ScrollReveal wrapping plain text */}
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        containerClassName="rounded-2xl w-full text-justify [hyphens:auto]"
        textClassName="text-[16px] md:text-sm lg:text-xl leading-relaxed"
      >
        {aboutMeText}
      </ScrollReveal>
    </section>
  );
}
