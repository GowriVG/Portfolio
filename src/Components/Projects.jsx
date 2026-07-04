import React from 'react';
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A role-based hospital management system for patients, doctors, appointments, and medical records, built with ASP.NET Core MVC, Angular, C#, Entity Framework Core, and SQL Server.",
    image: "/projects/project1.png",
    tags: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project Placeholder", // Changed title to be unique
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className=" px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-4xl">
          <span className="my-4 text-primary">Projects</span>
        </h2>
        <div className="my-3 w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-neutral-800"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium border border-neutral-700 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-100"> {project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 font-medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;