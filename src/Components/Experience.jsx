import React, { useState, useEffect, useRef } from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section
      id="experience"
      className="relative px-4 pt-2 pb-3 sm:px-6 sm:pt-4 sm:pb-3 md:pt-2 md:pb-3 lg:px-4 lg:px-2 lg:pt-2 lg:pb-8"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl text-white mb-0">
          Experience
        </h2>
        <div
          className="w-34 md:w-32 lg:w-50 h-[2px] mx-auto mt-2 rounded-sm"
          style={{
            background:
              "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
            borderRadius: "2px",
            boxShadow:
              "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          }}
        />
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My professional journey so far
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line — desktop only */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-px top-0 w-0.5 h-full bg-white/20 z-0" />
        {/* Vertical line — mobile */}
        <div className="sm:hidden absolute left-5 top-0 w-0.5 h-full bg-white/20 z-0" />

        {EXPERIENCES.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          const Card = (
            <div
              className="p-5 sm:p-6 rounded-2xl border border-white/10
              bg-black/60 backdrop-blur-md
              shadow-[0_0_20px_1px_rgba(150,150,180,0.2)]
              hover:border-[#9999ae]/40 hover:shadow-[0_0_28px_2px_rgba(160,160,200,0.35)]
              transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                  {exp.role}
                </h3>
                <p className="text-[#9999ae] text-sm font-medium mt-0.5">
                  {exp.company}
                </p>
                {/* Date inside card — mobile only */}
                <p className="sm:hidden text-gray-500 text-xs mt-1">
                  {exp.date}
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full
                      bg-white/5 border border-yellow-500/40 text-[#c0bfc4]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );

          const DateLabel = (
            <span className="text-gray-400 text-xs font-medium whitespace-nowrap">
              {exp.date}
            </span>
          );

          return (
            <div
              key={exp.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative mb-12 sm:mb-16 last:mb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* ── Desktop: 3-column grid ── */}
              <div className="hidden sm:flex items-start">
                {/* Left slot */}
                <div className="w-[46%] pr-4 flex justify-end">
                  {isEven ? Card : <div className="pt-5">{DateLabel}</div>}
                </div>

                {/* Center: dot */}
                <div className="w-[8%] flex justify-center pt-4">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#C6C3B5] z-10
                      flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ background: exp.iconBg }}
                  >
                    {exp.img ? (
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className={`${exp.imgSize || "w-6 h-6"} object-contain`}
                      />
                    ) : (
                      <span className="text-[#9999ae] text-xs font-bold">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right slot */}
                <div className="w-[46%] pl-4 flex justify-start">
                  {isEven ? <div className="pt-5">{DateLabel}</div> : Card}
                </div>
              </div>

              {/* ── Mobile: left-aligned with dot on line ── */}
              <div className="sm:hidden flex items-start">
                <div className="relative flex-shrink-0 mr-4">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-[#C6C3B5] z-10
                      flex items-center justify-center overflow-hidden"
                    style={{ background: exp.iconBg }}
                  >
                    {exp.img ? (
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className={`${exp.imgSize || "w-5 h-5"} object-contain`}
                      />
                    ) : (
                      <span className="text-[#9999ae] text-xs font-bold">
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1">{Card}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
