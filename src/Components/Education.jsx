import React, { useState, useEffect, useRef } from "react";
import { education } from "../constants";
import BorderGlow from "./BorderGlow/BorderGlow";

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const desktopItemRefs = useRef([]);
  const mobileItemRefs = useRef([]);

  useEffect(() => {
    const allRefs = [
      ...desktopItemRefs.current.map((ref, i) => ({ ref, index: i })),
      ...mobileItemRefs.current.map((ref, i) => ({ ref, index: i })),
    ];
    const observers = allRefs.map(({ ref, index }) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  // Layout constants (all in px)
  // Container: 360px tall. Line at 180px. Node h=56px → top=152px, bottom=208px.
  // Above: stem top=128px (24px above node top). Card bottom edge at 128px → bottom=232px.
  // Below: stem top=208px (node bottom). Card top=232px.
  const LINE = 180;
  const NODE_TOP = LINE - 28; // 152 — node center on line
  const NODE_BTM = NODE_TOP + 56; // 208
  const STEM_H = 24;
  const ABOVE_STEM_TOP = NODE_TOP - STEM_H; // 128
  const BELOW_STEM_TOP = NODE_BTM; // 208
  const CARD_BOUNDARY = NODE_TOP - STEM_H; // 128 from top = 232 from bottom (in 360px container)
  const CONTAINER_H = 360;

  return (
    <section id="education" className="py-16 relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2
          className="text-center tracking-tight text-4xl text-white"
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
        />
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          My academic journey and qualifications
        </p>
      </div>

      {/* ── DESKTOP: Horizontal roadmap timeline ── */}
      <div className="hidden lg:block relative max-w-6xl mx-auto px-4">
        <div className="relative" style={{ height: `${CONTAINER_H}px` }}>
          {/* Track line — animates in with the first item */}
          <div
            className="absolute h-px bg-[#FFFFFF]/60"
            style={{
              top: `${LINE}px`,
              left: `calc(100% / (${education.length} * 2))`,
              right: `calc(100% / (${education.length} * 2))`,
            }}
          />

          <div
            className="grid gap-0 h-full"
            style={{ gridTemplateColumns: `repeat(${education.length}, 1fr)` }}
          >
            {education.map((edu, index) => {
              const isVisible = visibleItems.includes(index);
              const isAbove = index % 2 === 0;

              return (
                <div
                  key={edu.id}
                  ref={(el) => (desktopItemRefs.current[index] = el)}
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : isAbove
                        ? "translateY(-20px)"
                        : "translateY(20px)",
                    transition:
                      "opacity 0.7s ease-out, transform 0.7s ease-out",
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Node — always at NODE_TOP so center = LINE */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#9999ae]/60 bg-[#120f17] flex items-center justify-center overflow-hidden z-10"
                    style={{
                      top: `${NODE_TOP}px`,
                      boxShadow: isVisible
                        ? "0 0 20px rgba(153,153,174,0.3), 0 0 0 4px rgba(153,153,174,0.08)"
                        : "none",
                      transition: "box-shadow 0.7s ease-out",
                    }}
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  {/* Stem */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-px bg-[#FFFFFF]/100"
                    style={{
                      top: `${isAbove ? ABOVE_STEM_TOP : BELOW_STEM_TOP}px`,
                      height: `${STEM_H}px`,
                    }}
                  />

                  {/* Year label */}
                  <span
                    className="absolute left-1/2 -translate-x-1/2 text-[11px] text-[#9999ae] font-medium tracking-wider whitespace-nowrap"
                    style={{
                      top: `${isAbove ? NODE_BTM + 6 : NODE_TOP - 22}px`,
                    }}
                  >
                    {edu.date.split(" ")[edu.date.split(" ").length - 1]}
                  </span>

                  {/* Card above */}
                  {isAbove && (
                    <div
                      className="absolute left-0 right-0 px-2"
                      style={{ bottom: `${CONTAINER_H - CARD_BOUNDARY}px` }}
                    >
                      <DesktopCard edu={edu} isVisible={isVisible} />
                    </div>
                  )}

                  {/* Card below */}
                  {!isAbove && (
                    <div
                      className="absolute left-0 right-0 px-2"
                      style={{ top: `${BELOW_STEM_TOP + STEM_H}px` }}
                    >
                      <DesktopCard edu={edu} isVisible={isVisible} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MOBILE + TABLET: Stepped vertical list ── */}
      <div className="lg:hidden relative max-w-xl mx-auto px-2">
        <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#FFFFFF]/50 to-transparent" />

        {education.map((edu, index) => {
          const isVisible = visibleItems.includes(index);
          return (
            <div
              key={edu.id}
              ref={(el) => (mobileItemRefs.current[index] = el)}
              className="relative flex items-start gap-5 mb-8 last:mb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex-shrink-0 w-14 flex justify-center">
                <div
                  className="w-10 h-10 rounded-full border-2 border-[#9999ae]/50 bg-[#120f17] flex items-center justify-center overflow-hidden z-10"
                  style={{
                    boxShadow: isVisible
                      ? "0 0 14px rgba(153,153,174,0.25)"
                      : "none",
                  }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-medium tracking-widest text-[#9999ae] border border-[#9999ae]/30 rounded-full px-3 py-0.5 mb-2 inline-block">
                  {edu.date}
                </span>
                <BorderGlow
                  edgeSensitivity={22}
                  glowColor="40 80 80"
                  backgroundColor="#120F17"
                  borderRadius={12}
                  glowRadius={59}
                  glowIntensity={1}
                  coneSpread={18}
                  animated={isVisible}
                  colors={["#5c5b5e", "#292828", "#f7f7f7"]}
                >
                  <div>
                    <div
                      className="p-4"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.68)",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(153,153,174,0.04) 100%)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.4)",
                      }}
                    >
                      <h3 className="text-white font-semibold text-[12px] leading-snug mb-1 line-clamp-3">
                        {edu.degree}
                      </h3>
                      <p className="text-[#9999ae] text-[12px] font-medium mb-3">
                        {edu.school}
                      </p>
                      <span className="text-[11px] font-semibold text-[#c0bfc4] border border-yellow-500/40 rounded-full px-2.5 py-0.5 bg-white/5 whitespace-nowrap">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const DesktopCard = ({ edu, isVisible }) => (
  <BorderGlow
    edgeSensitivity={22}
    glowColor="40 80 80"
    backgroundColor="#120F17"
    borderRadius={12}
    glowRadius={59}
    glowIntensity={1}
    coneSpread={18}
    animated={isVisible}
    colors={["#f4f3f5", "#3a3839", "#01090c"]}
  >
    <div
      className="px-4 py-3"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.68)",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(153,153,174,0.04) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.4)",
      }}
    >
      <h3 className="text-white font-semibold text-[13px] leading-snug mb-1 line-clamp-3">
        {edu.degree}
      </h3>
      <p className="text-[#9999ae] text-[11px] font-medium mb-3 line-clamp-2">
        {edu.school}
      </p>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold text-[#c0bfc4] border border-yellow-500/40 rounded-full px-2.5 py-0.5 bg-white/5 whitespace-nowrap">
          {edu.grade}
        </span>
        <span className="text-[10px] text-gray-500 whitespace-nowrap">
          {edu.date}
        </span>
      </div>
    </div>
  </BorderGlow>
);

export default Education;
