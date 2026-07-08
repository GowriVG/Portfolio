import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-4 px-4 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-10">
        <h2
          className="text-center tracking-tight  text-4xl text-white"
          style={{
            fontFamily: '"Commissioner", sans-serif',
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          Education
        </h2>
        <div
          style={{
            width: "160px",
            height: "2px",
            margin: "14px auto 0",
            background:
              "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
            borderRadius: "2px",
            boxShadow:
              "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          }}
        ></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* ── MOBILE: simple stacked list, no timeline ── */}
      <div className="flex flex-col gap-6 lg:hidden max-w-2xl mx-auto">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full p-5 rounded-2xl border border-white/20 bg-black/70
              backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            {/* Logo + degree + school row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-transparent">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{edu.school}</p>
                <p className="text-xs text-gray-500 mt-0.5">{edu.date}</p>
              </div>
            </div>

            {/* Grade pill */}
            <span
              className="inline-block text-xs font-semibold text-purple-300
              border border-purple-500/40 rounded-full px-3 py-0.5 mb-3"
            >
              Grade: {edu.grade}
            </span>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>

      {/* ── DESKTOP (lg+): zig-zag timeline ── */}
      <div className="max-w-4xl mx-auto relative hidden lg:block">
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-white/30 h-full z-0"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col items-center mb-16
              lg:flex-row lg:items-center
              ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
          >
            <div
              className={`w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white bg-black/70 z-10
                backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${index % 2 === 0 ? "lg:ml-[10%]" : "lg:mr-[10%]"}
                transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden bg-transparent">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
