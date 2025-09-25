import React from "react";
import ScrollReveal from "./Scroll-Reveal/ScrollReveal.jsx";

export default function AboutMe() {
  const aboutMeText = `With a Bachelor’s degree in Chemistry from Kerala University and currently pursuing my MCA at Rajagiri College of Social Sciences, I thrive at the intersection of analytical precision and technological innovation. My journey began with a passion for problem-solving in chemistry, sharpening my research, critical thinking, and experimental skills—qualities that now drive my work in software development, algorithms, and advanced computing. Proficient in C, C++, Java, C#, Python, HTML, CSS, JavaScript, and Angular, with hands-on experience in databases like MySQL and SQL Server, I am also skilled in the .NET Framework, ASP.NET Core, and Bootstrap. My academic and technical background is strengthened by certifications in computer applications, C++ programming, ASP.NET Core. I have completed an Angular & .NET Development internship at H&R Block (India) Private Limited, where I contributed to a full-stack Hospital Management System, integrating Angular front end with .NET backend and collaborating professionally to connect front-end, backend, and database layers. My experience as an HR and Marketing Intern at Revstar Solutions furthered my teamwork and digital marketing abilities through recruitment, CRM, and social media management. I have developed impactful projects such as an Inventory Management System using Java Swing and SQL, an AI-based hand gesture math solver (Python, OpenCV, Streamlit, Gemini API), a layered, role-based Hospital Management System (Angular, ASP.NET Core MVC, SQL Server), and a Cosmetic Social Media Platform (Laravel, PHP, MySQL, HTML, CSS, JavaScript). These projects showcase my problem-solving, research, and communication skills through high-performance, user-focused solutions. Passionate about modern software engineering, data-driven decision-making, and emerging technologies like cloud computing, cheminformatics, computational chemistry, and AI/ML in science, I am committed to leveraging technology for real-world impact. I am actively seeking opportunities to collaborate, innovate, and contribute to projects that shape the future of computing and science.`;

  return (
    <section
      id="about"
      className="row target-section relative z-20 px-6 h-auto pt-16 md:pt-10"
      data-parallax="scroll"
    >
      {/* Heading outside ScrollReveal */}
      <h2 className=" my-3 text-center text-4xl">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
 
      
      {/* ScrollReveal wrapping plain text */}
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
        blurStrength={10}
        containerClassName="rounded-2xl w-full flex flex-col justify-between text-justify"
        textClassName="text-base md:text-sm lg:text-sm leading-relaxed"

      >
        {aboutMeText}
      </ScrollReveal>
    </section>
  );
}
