import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Projects } from "../constants/index.js";


export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative px-4 pt-2 pb-3 sm:px-6 sm:pt-4 sm:pb-3 md:pt-2 md:pb-2 lg:px-2 lg:pt-2 lg:pb-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl text-white mb-0">
          Projects
        </h2>
        <div
          className="w-28 md:w-32 lg:w-40 h-[2px] mx-auto mt-2 rounded-sm"
          style={{
            background:
              "linear-gradient(to right, transparent, #9999ae, #c8c8d8, #9999ae, transparent)",
            borderRadius: "2px",
            boxShadow:
              "0 0 10px rgba(180, 180, 200, 0.5), 0 0 24px rgba(160, 160, 190, 0.25)",
          }}
        />
        <p className="text-center py-3 text-gray-400 mb-4 max-w-2xl mx-auto">
          Explore the projects I’ve built, where I combine technical skills with
          a passion for creating efficient, reliable, and user-friendly
          applications.
        </p>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm gap-6 lg:gap-8 mt-4">
          {Projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm
                hover:border-neutral-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
                `}
            >
              {/* Image */}
              {/* <div className="overflow-hidden h-40 bg-neutral-900"> */}
              {/* <div className="relative overflow-hidden aspect-video bg-neutral-900"> */}
              <div className=" overflow-hidden aspect-video bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-6 ">
                  <p className="text-xs sm:text-sm text-gray-300 text-center">
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
              <div className="p-3 sm:p-4">
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
                <div className="flex items-center justify-start gap-2 mt-1">
                  <h3 className="text-sm font-semibold text-gray-100 leading-snug">
                    {project.title}

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:hidden inline-flex ml-1.5 w-5 h-5 items-center justify-center rounded-full border border-neutral-700 hover:border-neutral-400 text-gray-400 hover:text-white transition-all duration-200 align-middle"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                          fill="white"
                        >
                          <path d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331Z" />
                        </svg>
                      </a>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
