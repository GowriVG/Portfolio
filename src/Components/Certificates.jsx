import React from "react";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "Diploma in Computer Application(DCA)",
    certifier: "Center for Continuing Education, Kerala",
    year: "May 2024",
    link: "https://drive.google.com/file/d/1sNqVTH9dX31-ralBYNxI3QSdt1UarJiA/view?usp=sharing",
  },
  {
    id: 2,
    name: "Programming in C++",
    certifier: "Center for Continuing Education, Kerala",
    year: "May 2024",
    link: "https://drive.google.com/file/d/1-PNIyGlnfedoUKeYxSmVNJPPNgTCGWzB/view?usp=sharing",
  },
  {
    id: 3,
    name: "Database Administration Workshop",
    certifier: "Inspired Software Development, Kochi",
    year: "2024",
    link: "",
  },
  {
    id: 4,
    name: "Advanced Artificial Intelligence Workshop",
    certifier: "TechySpot",
    year: "2025",
    link: "https://www.linkedin.com/posts/gowri-v-gopal-2332a9213_artificialintelligence-techyspot-topperformer-activity-7352211845878853633-siwP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX4cAcB_dupznW2nB8lBpiH3c34XOuning",
  },
  {
    id: 5,
    name: "Learning C#",
    certifier: "LinkedIn Learning",
    year: "2025",
    link: "https://drive.google.com/file/d/1j4ViNBpAMOIRln5BLQ8r1xFcTfHIt928/view?usp=drive_link",
  },
  {
    id: 6,
    name: "ASP.NET Core Web API- Scratch to Finish",
    certifier: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1xo99ItwCXn0WtOgPlgErQUGKipki_giy/view?usp=sharing",
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-6 px-6 ">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-center mb-16text-center text-4xl text-white">
          Certificates & Workshops
        </h2>
        <div className="w-52 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-center text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
          Here are some of the certifications and workshops I have successfully completed.
        </p>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-black/60 border border-gray-700 rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-purple-500/20 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400">{cert.certifier}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.year}</p>

              <a
                href={cert.link}
                target="_blank"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                View Certificate <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
