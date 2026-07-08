import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A role-based hospital management system for patients, doctors, appointments, and medical records, built with ASP.NET Core MVC, Angular, C#, Entity Framework Core, and SQL Server.",
    image: "/projects/project1.png",
    tags: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
    // demoUrl: "#",
    githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
  },
  {
    id: 2,
    title: "Azure Resource Health",
    description:
      "A role-based hospital management system for patients, doctors, appointments, and medical records, built with ASP.NET Core MVC, Angular, C#, Entity Framework Core, and SQL Server.",
    image: "/projects/AzureResourceHealth.png",
    tags: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
    // demoUrl: "#",
    githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
  },
  {
    id: 3,
    title: "LUMI AI Meeting Assistant", // Changed title to be unique
    description:
      "A Microsoft Teams-integrated AI assistant that automates meeting summarization, context-aware Q&A, and work item generation using Azure OpenAI and RAG-powered FastAPI.",
    image: "/projects/Lumi.png",
    tags: ["Angular", "FastAPI", "Azure OpenAI", "Azure DevOps"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "OpsNexus AI Operational Intelligence Portal",
    description:
      "A full-stack cloud cost governance platform that analyzes Azure resource utilization, automates DevOps work item creation, and visualizes optimization recommendations through interactive Angular dashboards.",
    image: "/projects/OpsNexus.png",
    imagePosition: "object-center",
    tags: ["Angular", "FastAPI", "Azure DevOps", "Chart.js"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "EEP Artifacts Integration & Runtime Model Generator",
    description:
      "An enterprise-grade Angular and .NET platform that integrates Azure DevOps Artifacts for package management and dynamically generates JSON schemas at runtime using reflection, with an interactive UI for schema exploration and comparison.",
    image: "/projects/EEPArtifact.png",
    tags: ["Angular", ".NET", "Azure DevOps", "Swagger"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Inventory Management System",
    description:
      "A Java Swing desktop application for real-time inventory tracking with full CRUD operations, reducing manual errors and improving data accuracy.",
    image: "/projects/project1.png",
    tags: ["Java", "Swing", "SQLite"],
    // demoUrl: "#",
    githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
  },
  {
    id: 7,
    title: "AI-Based Hand Gesture Math Solver",
    description:
      "A real-time AI math solver that interprets mid-air hand gestures using computer vision and solves problems via Gemini 1.5 Flash, with an integrated chatbot for math queries.",
    image: "/projects/project1.png",
    tags: ["Python", "OpenCV", "Streamlit", "Gemini API"],
    // demoUrl: "#",
    githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
  },
  {
    id: 8,
    title: "Cosmetic Social Media Platform",
    description:
      "A real-time AI math solver that interprets mid-air hand gestures using computer vision and solves problems via Gemini 1.5 Flash, with an integrated chatbot for math queries.",
    image: "/projects/project2.jpg",
    tags: ["Python", "OpenCV", "Streamlit", "Gemini API"],
    // demoUrl: "#",
    githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-2 px-4 relative">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center tracking-tight text-4xl text-white" style={{
            fontFamily: '"Commissioner", sans-serif',
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}>Projects</h2>
        <div
          style={{
            width: "180px",
            height: "2px",
            margin: "14px auto 0",
            background:
              "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
            borderRadius: "2px",
            boxShadow:
              "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          }}
        />
        <p className="text-center py-3 text-gray-400 mb-4 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm
                hover:border-neutral-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
                `}
            >
              {/* Image */}
              <div className="overflow-hidden h-40 bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-6">
                  <p className="text-gray-300 text-sm text-center">
                    {project.description}
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      border: "1px solid rgba(255,255,255,0.2)",
                      transition: "all 0.5s cubic-bezier(0.165,0.84,0.44,1)",
                      borderRadius: "100px",
                      fontWeight: "800",
                      padding: "0.45rem 0.8rem",
                      fontSize: "0.7rem",
                      lineHeight: "1rem",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      boxShadow:
                        "inset 0 1px 0 0 rgba(255,255,255,0.04),inset 0 0 0 1px rgba(255,255,255,0.04)",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fce803";
                      e.currentTarget.style.transform = "translate(0,-0.25rem)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.transform = "translate(0,0)";
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>View on Github</span>
                  </a>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs border border-neutral-700 rounded-full text-neutral-400 bg-neutral-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold text-gray-100">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
