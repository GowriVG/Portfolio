import React, { useState, useEffect, useRef } from "react";
import { experiences } from "../constants";

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
    <section id="experience" className="py-16 ">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-center text-4xl text-white">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My professional journey so far
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 w-0.5 h-full bg-white/20 z-0" />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={exp.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative flex mb-12 sm:mb-16
                /* mobile: always left-aligned */
                flex-row
                /* desktop: alternate sides */
                sm:${isEven ? "flex-row" : "flex-row-reverse"}
              `}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Dot on the line */}
              <div
                className={`absolute left-4 sm:left-1/2 top-6
                w-3.5 h-3.5 rounded-full border-2 border-purple-500 bg-[#0a0a0a] z-10
                -translate-x-1/2`}
              />

              {/* Card — offset from center line */}
              <div
                className={`
                ml-12 sm:ml-0 w-full
                sm:w-[46%]
                ${isEven ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}
              `}
              >
                <div
                  className="p-5 sm:p-6 rounded-2xl border border-white/10
                  bg-black/60 backdrop-blur-md
                  shadow-[0_0_20px_1px_rgba(130,69,236,0.2)]
                  hover:border-purple-500/40 hover:shadow-[0_0_28px_2px_rgba(130,69,236,0.35)]
                  transition-all duration-300"
                >
                  {/* Role + Company + Date */}
                  <div className="mb-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mt-0.5">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{exp.date}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full
                          bg-purple-500/10 border border-purple-500/30 text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
