export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// Experience Section Logo's
import HRBlockLogo from '../assets/Company_logo/HR block.png';
import RevstarLogo from '../assets/Company_logo/Revstar.png';
export const EXPERIENCES = [
  {
    id: 0,
    img: HRBlockLogo,
    iconBg: "#dacfb7",
    role: "Software Developer Intern",
    company: "H&R Block (India) Private Limited",
    date: "Dec 2025 – June 2026",
    desc: "Built full-stack applications using Angular and .NET, designing and integrating REST APIs to enable efficient data communication across services. Managed dependencies using Azure DevOps Artifact Feeds to maintain consistent package versioning. Monitored application performance in Azure, analyzed system metrics, and debugged issues to enhance system stability.",
    skills: ["Angular", ".NET", "REST API", "Azure DevOps", "Azure"],
  },
  {
    id: 1,
    img: RevstarLogo,
    imgSize: "w-9 h-9",
    iconBg: "#dacfb7",
    role: "HR and Marketing Intern",
    company: "Revstar Solutions",
    date: "June 2025",
    desc: "Coordinated candidate workflows and supported daily HR operations in recruitment processes. Managed email communications and maintained CRM records, enabling smooth coordination across HR, marketing, and administrative functions.",
    skills: ["Recruitment", "CRM", "Email Marketing"],
  },
  {
    id: 2,
    img: HRBlockLogo,
    iconBg: "#dacfb7",
    role: "Full-Stack Developer Intern",
    company: "H&R Block (India) Private Limited",
    date: "April 2025 – May 2025",
    desc: "Developed a full-stack Hospital Management System using Angular and .NET, enabling efficient handling of patient, doctor, and appointment workflows. Collaborated with developers to integrate frontend, backend, and database components, improving system functionality and reducing integration gaps.",
    skills: ["Angular", ".NET", "SQL Server", "REST API"],
  },
];

// Education Section Logo's
import NSSLogo from '../assets/education_logo/NSSLogo.png';
import RajLogo from '../assets/education_logo/RajagiriLogo.png';
import ChristLogo from '../assets/education_logo/ChristLogo.png';
import FRLogo from '../assets/education_logo/FRLogo.png';

export const education = [
    {
      id: 0,
      img: RajLogo,
      school: "Rajagiri College of Social Sciences",
      date: "June 2024 - March 2026",
      grade: "8.37 CGPA",
      //desc: "I hold a Master of Computer Applications (MCA) from Rajagiri College of Social Sciences, Ernakulam. My academic journey provided me with a robust foundation in software development, data structures, and modern programming paradigms, which I have successfully applied to complex technical projects and problem-solving challenges.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: NSSLogo,
      school: "NSS College for Women, Neeramankara",
      date: "Nov 2021 - April 2024",
      grade: "8.75 CGPA",
      //desc: "I have completed my Bachelor’s degree in Chemistry from Kerala University, where I studied inorganic, organic, and physical chemistry, and gained practical exposure through laboratory work and an internship in polymer chemistry",
      degree: "Bachelor of Science - BSC (Chemistry)",
    },
    {
      id: 2,
      img: FRLogo,
      school: "FR.Phillips Higher Secondary School, Nellikad",
      date: "March 2021",
      grade: "98%",
      //desc: "I completed my Higher Secondary Education in the Science stream, with a focus on Physics, Chemistry, and Mathematics.",
      degree: "Kerala State Board (XII) - PCM (Physics, Chemistry, Mathematics)",
    },
    {
      id: 3,
      img: ChristLogo,
      school: "Christ Nagar Senior Secondary School, Thiruvallom",
      date: "March 2019",
      grade: "93%",
      //desc: "I completed my secondary education from Christ Nagar School, under the CBSE board, with a focus on Science and Mathematics.",
      degree: "CBSE(X), Science",
    },
  ];
  
  