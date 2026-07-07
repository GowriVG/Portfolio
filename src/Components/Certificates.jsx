import React from "react";
import CircularGallery from "./CircularGallery/CircularGallery";
import BorderGlow from "./BorderGlow/BorderGlow";

const certificates = [
  {
    id: 1,
    name: "Diploma in Computer Application",
    certifier: "Center for Continuing Education, Kerala",
    year: "May 2024",
    desc: "Completed a comprehensive diploma covering computer fundamentals, office applications, and programming basics.",
    link: "https://drive.google.com/file/d/1sNqVTH9dX31-ralBYNxI3QSdt1UarJiA/view?usp=sharing",
  },
  {
    id: 2,
    name: "Programming in C++",
    certifier: "Center for Continuing Education, Kerala",
    year: "May 2024",
    desc: "Gained proficiency in C++ including OOP concepts, data structures, and memory management.",
    link: "https://drive.google.com/file/d/1-PNIyGlnfedoUKeYxSmVNJPPNgTCGWzB/view?usp=sharing",
  },
  {
    id: 3,
    name: "Database Administration Workshop",
    certifier: "Inspired Software Development, Kochi",
    year: "2024",
    desc: "Hands-on workshop covering database design, SQL querying, and administration best practices.",
    link: "https://drive.google.com/file/d/1C5F5SwNHpR1uIhzHhaVByUd6EJDnzicm/view?usp=drive_link",
  },
  {
    id: 4,
    name: "Advanced AI Workshop",
    certifier: "TechySpot",
    year: "2025",
    desc: "Explored advanced AI concepts, prompt engineering, and practical applications of modern AI tools.",
    link: "https://www.linkedin.com/posts/gowri-v-gopal-2332a9213_artificialintelligence-techyspot-topperformer-activity-7352211845878853633-siwP",
  },
  {
    id: 5,
    name: "Learning C#",
    certifier: "LinkedIn Learning",
    year: "2025",
    desc: "Completed structured course on C# covering .NET fundamentals, OOP, LINQ, and async programming.",
    link: "https://drive.google.com/file/d/1j4ViNBpAMOIRln5BLQ8r1xFcTfHIt928/view?usp=drive_link",
  },
  {
    id: 6,
    name: "ASP.NET Core Web API",
    certifier: "Udemy",
    year: "2025",
    desc: "Built production-ready REST APIs using ASP.NET Core, Entity Framework, JWT auth, and Swagger.",
    link: "https://drive.google.com/file/d/1xo99ItwCXn0WtOgPlgErQUGKipki_giy/view?usp=sharing",
  },
];

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + word).length > maxChars) {
      lines.push(current.trim());
      current = word + " ";
      if (lines.length >= 3) break;
    } else {
      current += word + " ";
    }
  }
  if (current.trim() && lines.length < 3) lines.push(current.trim());
  return lines;
}

function wrapName(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + word).length > maxChars) {
      lines.push(current.trim());
      current = word + " ";
      if (lines.length >= 2) break;
    } else {
      current += word + " ";
    }
  }
  if (current.trim() && lines.length < 2) lines.push(current.trim());
  return lines;
}

function createCertCard(cert) {
  const nameLines = wrapName(cert.name, 20);
  const descLines = wrapText(cert.desc, 36);

  const nameY = 80;
  const nameLineHeight = 42; // was 22 — must be ≥ font size
  const dividerY = nameY + 2 * nameLineHeight + 28;
  const certifierY = dividerY + 46;
  const yearY = certifierY + 36;
  const descStartY = yearY + 52;
  const descLineHeight = 34;
  const linkY = 562;

  const nameSVG = nameLines
    .map(
      (line, i) =>
        `<text x="400" y="${nameY + i * nameLineHeight}" font-family="Inter,sans-serif" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">${line}</text>`,
    )
    .join("");

  const descSVG = descLines
    .map(
      (line, i) =>
        `<text x="400" y="${descStartY + i * descLineHeight}" font-family="Inter,sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle">${line}</text>`,
    )
    .join("");

  const linkText = cert.link
    ? `<text x="400" y="${linkY}" font-family="Inter,sans-serif" font-size="20" fill="#e2e8f0" text-anchor="middle" font-weight="600">View Certificate →</text>`
    : `<text x="400" y="${linkY}" font-family="Inter,sans-serif" font-size="18" fill="#4b5563" text-anchor="middle">No link available</text>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#131313"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="7" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="800" height="600" fill="url(#bg)" rx="24"/>
    <rect x="0" y="0" width="800" height="5" fill="#64748b" rx="3"/>
    <rect x="2" y="2" width="796" height="596" fill="none" stroke="#94a3b8" stroke-width="2" rx="23" filter="url(#glow)" opacity="0.6"/>
    <rect x="2" y="2" width="796" height="596" fill="none" stroke="#cbd5e1" stroke-width="1" rx="23" opacity="0.3"/>
    ${nameSVG}
    <rect x="120" y="${dividerY}" width="560" height="1" fill="#475569" opacity="0.4"/>
    <rect x="80" y="${dividerY}" width="640" height="2" fill="#475569" opacity="0.6"/>
    <text x="400" y="${certifierY}" font-family="Inter,sans-serif" font-size="24" fill="#cbd5e1" text-anchor="middle">${cert.certifier}</text>
    <text x="400" y="${yearY}" font-family="Inter,sans-serif" font-size="20" fill="#64748b" text-anchor="middle">${cert.year}</text>
    ${descSVG}
    <rect x="120" y="528" width="560" height="1" fill="rgba(255,255,255,0.07)"/>
    <rect x="80" y="530" width="640" height="2" fill="rgba(255,255,255,0.1)"/>
    ${linkText}
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const galleryItems = certificates.map((cert) => ({
  image: createCertCard(cert),
  text: "",
}));

const CertificatesSection = () => {
  return (
    <section id="certificates" className="pt-16 pb-0 px-4 sm:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-center text-4xl text-white">
          Certificates & Workshops
        </h2>
        <div className="w-52 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some of the certifications and workshops I have successfully
          completed.
        </p>
      </div>

      <div
        style={{
          height: "500px",
          position: "relative",
          overflow: "hidden",
          marginTop: "-60px",
        }}
      >
        <CircularGallery
          items={galleryItems}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollSpeed={2.5}
          scrollEase={0.05}
          font="bold 1px sans-serif"
        />
      </div>
    </section>
  );
};

export default CertificatesSection;
