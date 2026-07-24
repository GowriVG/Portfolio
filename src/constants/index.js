//About Me Section Text
export const aboutMeText = `I am a Software Developer with a Master of Computer Applications (MCA) from Rajagiri College of Social Sciences and a Bachelor's degree in Chemistry from Kerala University. My academic journey from science to software development has strengthened my analytical thinking, problem-solving, and ability to adapt to new technologies.

My technical expertise includes C#, .NET, ASP.NET Core, Angular, Java, Python, C/C++, JavaScript, HTML, CSS, SQL Server, and MySQL. I have a strong interest in building scalable applications and continuously expanding my knowledge in cloud technologies, DevOps, and modern software engineering practices.

During my Angular & .NET Development internship at H&R Block (India) Pvt. Ltd., I gained hands-on experience in full-stack application development, collaborating on enterprise-level solutions using Angular, .NET, and SQL Server. Alongside my internship, I have developed several academic and personal projects that strengthened my understanding of full-stack development, database design, and AI-powered applications.

I am passionate about creating reliable, user-focused software and enjoy solving real-world problems through technology. As I begin my professional journey, I look forward to contributing to innovative teams while continuing to grow in software engineering, cloud computing, and DevOps.`;

// Experience Section Logo's
import HRBlockLogo from '../assets/company_logo/HR block.png';
import RevstarLogo from '../assets/company_logo/Revstar.png';
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
      degree: "Bachelor of Science - B.Sc. (Chemistry)",
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
  
  // Projects Section Images
  import Project1 from "../assets/projects/project1.png";
  import AzureResourceHealth from "../assets/projects/AzureResourceHealth.png";
  import Lumi from "../assets/projects/Lumi.png";
  import OpsNexus from "../assets/projects/OpsNexus.png";
  import EEPArtifact from "../assets/projects/EEPArtifact.png";
  import Project2 from "../assets/projects/project2.jpg";
  export const Projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description:
        "A role-based hospital management system for patients, doctors, appointments, and medical records, built with ASP.NET Core MVC, Angular, C#, Entity Framework Core, and SQL Server.",
      image: Project1,
      tags: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 2,
      title: "Azure Resource Health",
      description:
        "A role-based hospital management system for patients, doctors, appointments, and medical records, built with ASP.NET Core MVC, Angular, C#, Entity Framework Core, and SQL Server.",
      image: AzureResourceHealth,
      tags: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 3,
      title: "LUMI AI Meeting Assistant",
      description:
        "A Microsoft Teams-integrated AI assistant that automates meeting summarization, context-aware Q&A, and work item generation using Azure OpenAI and RAG-powered FastAPI.",
      image: Lumi,
      tags: ["Angular", "FastAPI", "Azure OpenAI", "Azure DevOps"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 4,
      title: "OpsNexus AI - Powered Cloud Cost Governance Platform",
      description:
        "A full-stack cloud cost governance platform that analyzes Azure resource utilization, automates DevOps work item creation, and visualizes optimization recommendations through interactive Angular dashboards.",
      image: OpsNexus,
      imagePosition: "object-center",
      tags: ["Angular", "FastAPI", "Azure DevOps", "Chart.js"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 5,
      title: "EEP Artifacts Integration & Runtime Model Generator",
      description:
        "An enterprise-grade Angular and .NET platform that integrates Azure DevOps Artifacts for package management and dynamically generates JSON schemas at runtime using reflection, with an interactive UI for schema exploration and comparison.",
      image: EEPArtifact,
      tags: ["Angular", ".NET", "Azure DevOps", "Swagger"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "A Java Swing desktop application for real-time inventory tracking with full CRUD operations, reducing manual errors and improving data accuracy.",
      //image: InventoryManagement,
      image: Project1,
      tags: ["Java", "Swing", "SQLite"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 7,
      title: "AI-Based Hand Gesture Math Solver",
      description:
        "A real-time AI math solver that interprets mid-air hand gestures using computer vision and solves problems via Gemini 1.5 Flash, with an integrated chatbot for math queries.",
      //image: MathSolver,
      image: Project1,
      tags: ["Python", "OpenCV", "Streamlit", "Gemini API"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
    {
      id: 8,
      title: "Cosmetic Social Media Platform",
      description:
        "A real-time AI math solver that interprets mid-air hand gestures using computer vision and solves problems via Gemini 1.5 Flash, with an integrated chatbot for math queries.",
      //image: CosmeticSocialMedia,
      image: Project2,
      tags: ["Python", "OpenCV", "Streamlit", "Gemini API"],
      // demoUrl: "#",
      githubUrl: "https://github.com/GowriVG/Hospital-Management-System.git",
    },
  ];