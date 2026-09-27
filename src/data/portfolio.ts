export const profile = {
  name: "Ashutosh Palhare",
  first: "Ashutosh",
  last: "Palhare",
  short: "AP",
  role: "Frontend-first Full Stack Developer • Cybersecurity Enthusiast",
  location: "Maharashtra, India",
  avatar: "https://avatars.githubusercontent.com/u/53346137?v=4",
  bio: "I design and build clean, high-performance web interfaces and practical developer tools. I treat AI as an engineering multiplier — using it to move faster on the repetitive work so I can focus on architecture, user experience, and shipping quality products.", 
  tagline: "Give me a problem → I'll figure out how to ship it.",
  socials: {
    github: "https://github.com/ashutoshpalhare",
    linkedin: "https://www.linkedin.com/in/ashutoshpalhare",
    twitter: "https://twitter.com/AshutoshPalhare",
    instagram: "https://instagram.com/ashutoshpalhare",
    site: "https://ashutoshpalhare.github.io",
  },
};

export const stats = [
  { value: "5+", label: "Years building" },
  { value: "19+", label: "Public projects" },
  { value: "6", label: "Core skill areas" },
  { value: "∞", label: "Curiosity" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Trimurti Pawan Pratishthan",
    period: "Dec 2024 — Present",
    points: [
      "Developing and maintaining websites using React, WordPress, PHP, HTML, CSS, and JavaScript across multiple domains.",
      "Built and delivered 5–6 production-ready websites for the institute and related projects.",
      "Conducting technical lectures and hands-on training sessions for students on modern web development.",
      "Handling end-to-end development including UI design, frontend, backend integration, and deployment.",
    ],
  },
  {
    role: "Founder & Full Stack Developer",
    org: "Dev Culture",
    period: "SEP 2023 — Present",
    points: [
      "Building and shipping developer tools, learning platforms, and product-grade web applications.",
      "Owning the complete product lifecycle — from concept and UI/UX design to development and deployment.",
      "Working primarily with React, TypeScript, Tailwind CSS, and modern frontend architecture.",
      "Publishing open tools and platforms on GitHub Pages used by the developer community.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    org: "Independent",
    period: "JUNE 2021 — Present",
    points: [
      "Delivered multiple client projects across different domains including business websites, redesigns, and custom solutions.",
      "Worked with a wide range of technologies — HTML, CSS, JavaScript, React, WordPress, and PHP.",
      "Focused on building responsive, accessible, and high-performance front-ends with clean and maintainable code.",
      "Managed projects end-to-end: requirement gathering, design, development, and delivery.",
    ],
  },
  {
    role: "Cybersecurity & Open Source Contributor",
    org: "Self-directed",
    period: "FEB 2019 — Present",
    points: [
      "Built practical Linux tooling, terminal utilities, and security-focused projects (Termy, FaceWise).",
      "Completed 50+ vanilla JavaScript mini-projects to strengthen core fundamentals without relying on frameworks.",
      "Continuously exploring system-level concepts, networking basics, and secure coding practices.",
    ],
  },
];




export type Category = "Web" | "Tools" | "Learning" | "Cyber" | "WordPress";

export const projects: {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  live?: string;
  repo: string;
  featured?: boolean;
}[] = [
  // ========== Featured Projects ==========
  {
    title: "craftc",
    description:
      "A free and structured C & C++ learning platform with interactive lessons, roadmaps, coding projects, interview questions, and cheatsheets.",
    tags: ["TypeScript", "React", "Tailwind"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/craftc/",
    repo: "https://github.com/ashutoshpalhare/craftc",
    featured: true,
  },

  {
    title: "VibeHai",
    description:
      "A modern music streaming platform inspired by Spotify — sleek UI, immersive playback and a fresh take on discovery.",
    tags: ["JavaScript", "UI", "Media"],
    category: "Web",
    live: "https://www.youtube.com/@ashutoshpalhare",
    repo: "https://github.com/ashutoshpalhare/VibeHai",
    featured: true,
  },


  {
    title: "CodeMuseum",
    description:
      "A museum-themed developer portfolio built with pure HTML, CSS and JavaScript. Features project exhibits, category filters, and smooth animations.",
    tags: ["JavaScript", "CSS", "UI Design"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/CodeMuseum/",
    repo: "https://github.com/ashutoshpalhare/CodeMuseum",
    featured: true,
  },
  {
    title: "CommandKit",
    description:
      "A searchable library of 100+ ready-to-use ChatGPT slash commands. Discover, organize, copy and favorite prompts for faster AI workflows.",
    tags: ["JavaScript", "AI", "Productivity"],
    category: "Tools",
    live: "https://ashutoshpalhare.github.io/CommandKit/",
    repo: "https://github.com/ashutoshpalhare/CommandKit",
    featured: true,
  },
  {
    title: "verse",
    description:
      "AP VERSE — a cinematic, local-first visual archive built with TanStack Start, Zustand and Framer Motion. Focused on smooth interactions and visual storytelling.",
    tags: ["TanStack Start", "React", "Framer Motion"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/verse/",
    repo: "https://github.com/ashutoshpalhare/verse",
    featured: true,
  },

   {
    title: "BioLinks",
    description:
      "A premium Linktree-style digital business card with modern glassmorphism UI, smooth animations, and clean profile + link management.",
    tags: ["CSS", "Glassmorphism", "UI"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/BioLinks",
    repo: "https://github.com/ashutoshpalhare/BioLinks",
    featured: true,
  },

  
  {
    title: "WebDev-Projects",
    description:
      "A collection of 50+ responsive mini web projects built with pure HTML5, CSS3 and vanilla JavaScript — zero frameworks, zero dependencies.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/WebDev-Projects/",
    repo: "https://github.com/ashutoshpalhare/WebDev-Projects",
    featured: true,
  },


  {
    title: "Python Micro Projects",
    description:
      "A growing collection of small, documented Python programs — each self-contained with its own docs and requirements.",
    tags: ["Python", "Automation"],
    category: "Learning",
    live: "https://ashutoshpalhare.github.io/Python-Micro-Projects/",
    repo: "https://github.com/ashutoshpalhare/Python-Micro-Projects",
    featured: true,
  },


  {
    title: "FaceWise",
    description:
      "Attendance management system powered by face recognition. Supports face registration, real-time attendance marking, and report generation using Python & OpenCV.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    category: "Cyber",
    live: "https://www.youtube.com/@ashutoshpalhare",
    repo: "https://github.com/ashutoshpalhare/FaceWise",
    featured: true,
  },

  {
    title: "Trimurti ACSCN",
    description:
      "Institute website built with WordPress for Trimurti ACSCN. Clean design with academic information and responsive layout.",
    tags: ["WordPress", "PHP"],
    category: "WordPress",
    live: "http://trimurtiacscn.com/",
    repo: "https://github.com/ashutoshpalhare",
    featured: true,
  },

  {
    title: "Trimurti Education",
    description:
      "Complete educational institute website built with WordPress. Includes course information, admissions details, responsive design and clean user experience.",
    tags: ["WordPress", "PHP", "Responsive Design"],
    category: "WordPress",
    live: "https://trimurtieducation.com/",
    repo: "https://github.com/ashutoshpalhare",
    featured: true,
  },
  

  // ========== Non-featured (View All) ==========
  

  {
    title: "Trimurti Gramin Pharmacy",
    description:
      "Professional pharmacy website developed with WordPress. Features product/service information, contact system and fully responsive layout.",
    tags: ["WordPress", "PHP", "UI Design"],
    category: "WordPress",
    live: "http://trimurtigraminpharmacy.com/",
    repo: "https://github.com/ashutoshpalhare",
    
  },


  {
    title: "Trimurti ACSCD",
    description:
      "College-related website developed using WordPress with modern design and responsive structure.",
    tags: ["WordPress", "PHP"],
    category: "WordPress",
    live: "http://trimurtiacscd.com/",
    repo: "https://github.com/ashutoshpalhare",
  
  },
  {
    title: "Trimurti Boys B.Ed",
    description:
      "Educational website for B.Ed program built with WordPress. Focused on clean information architecture and mobile-friendly design.",
    tags: ["WordPress", "PHP"],
    category: "WordPress",
    live: "http://trimurtiboysbed.com/",
    repo: "https://github.com/ashutoshpalhare",
  },
  
  {
    title: "E-Start 2",
    description:
      "A feature-rich custom Chrome start page with speed dials, quotes, search and a personalised layout.",
    tags: ["CSS", "JavaScript"],
    category: "Tools",
    live: "https://ashutoshpalhare.github.io/E-Start2/",
    repo: "https://github.com/ashutoshpalhare/E-Start2",
  },

  {
    title: "Termy",
    description:
      "A colourful and lightweight terminal emulator for Linux, designed for developers who live in the command line.",
    tags: ["Shell", "Linux", "Terminal"],
    category: "Cyber",
    live: "https://www.youtube.com/@ashutoshpalhare",
    repo: "https://github.com/ashutoshpalhare/Termy",
    featured: true,
  }, 

  
  {
    title: "TrimurtiACSD",
    description:
      "A modern, fully responsive redesign concept for a college website with clean multi-page architecture and improved user experience.",
    tags: ["HTML", "CSS", "Responsive Design"],
    category: "Web",
    live: "https://ashutoshpalhare.github.io/TrimurtiACSD/",
    repo: "https://github.com/ashutoshpalhare/TrimurtiACSD",
  },
];


export const skills = [
  {
    title: "Frontend",
    icon: "Layout",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design"
    ],
  },
  {
    title: "Backend & Databases",
    icon: "Server",
    items: [
      "Node.js",
      "Python",
      "PHP",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "Supabase"
    ],
  },
  {
    title: "Python & AI/ML",
    icon: "Sparkles",
    items: [
      "Python",
      "AI-assisted Development",
      "Prompt Engineering",
      "Basic Machine Learning",
      "Automation",
      "LLM"
    ],
  },
  {
    title: "Design & Creative",
    icon: "PenTool",
    items: [
      "Figma",
      "Photoshop",
      "Canva",
      "UI/UX Design",
      "Graphic Design",
      "Glassmorphism",
      "Prototyping"
    ],
  },
  {
    title: "Cybersecurity & Systems",
    icon: "ShieldCheck",
    items: [
      "Linux",
      "Bash",
      "Networking Basics",
      "Script Kiddie",
      "OSINT",
      "IoT Basics"
    ],
  },
  {
    title: "Tools & Others",
    icon: "Code2",
    items: [
      "Git & GitHub",
      "VS Code",
      "Vite",
      "WordPress",
      "GitHub Pages",
      "C / C++",
      "Java"
    ],
  },
];




export const education = [
  {
    degree: "Bachelor of Engineering — Computer Science",
    school: "Vishwabharati Academy's Engineering College, Ahmednagar",
    period: "Pune University • In Progress",
    note: "Currently pursuing B.E. in Computer Science with focus on software development, data structures, networks, and modern computing concepts.",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Dnyaneshwar Polytechnic, Bhanashivare",
    period: "Mumbai University • 87.94%",
    note: "Completed Diploma in Computer Engineering with strong academic performance. Built solid foundations in programming, databases, and system concepts.",
  },
  {
    degree: "Higher Secondary Certificate — Science",
    school: "Trimurty Junior College, Mukindpur",
    period: "Pune University • 58.77%",
    note: "Completed HSC in Science stream, laying the base for further studies in computer science and engineering.",
  },
];
