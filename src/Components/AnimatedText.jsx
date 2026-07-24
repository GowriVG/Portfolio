import React from "react";
import TextType from "./Text-Type/TextType";

const AnimatedText = ({ isVisible }) => {
  return (
    <div className="min-h-[2.5rem]">
      <TextType
        text={[
          "Software Engineer",
          "Full Stack Developer",
          "Cloud & AI Developer",
        ]}
        typingSpeed={75}
        deletingSpeed={40}
        pauseDuration={1500}
        loop={true}
        showCursor={true}
        cursorCharacter="|"
       className={`text-gradient text-2xl sm:text-3xl lg:text-4xl tracking-tight font-medium
            transform transition-all duration-1000 ease-out delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      />
    </div>
  );
};

export default AnimatedText;
