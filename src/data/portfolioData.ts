export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & GenAI" | "PDM & Industrial" | "Full Stack & Cloud";
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string; highlight?: boolean }[];
}

export const personalInfo = {
  name: "Harshvardhan Rajkumar Wadavane",
  shortName: "Harshvardhan Wadavane",
  role: "Software Development Engineer",
  tagline: "Building high-performance web applications and resilient backend systems with React.js, Next.js, Java, and C#.",
  experienceYears: "2+",
  location: "Pune, Maharashtra, India",
  email: "harshwa007@gmail.com",
  phone: "+91 9834529448",
  cleanPhone: "+919834529448",
  status: "Open to High-Impact SDE Roles",
  socials: {
    linkedin: "https://www.linkedin.com/in/harshvardhan-wadavane",
    github: "https://github.com/harshwa007",
    leetcode: "https://leetcode.com/theincredibleharsh200",
    email: "mailto:harshwa007@gmail.com",
    phone: "tel:+919834529448",
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "LeetCode Solved", value: "400+" },
    { label: "Core Enterprise Platforms", value: "4" },
    { label: "Technologies Mastered", value: "15+" },
  ],
  bio: `I am a Software Development Engineer based in Pune with 2+ years of hands-on experience building mission-critical distributed systems, PDM platforms, and modern web architectures. At Prescient Technologies, I develop backend and full-stack solutions for flagship platforms including AI-PDM (Product Data Management & CAD integration), factoryCONNECT (Workflow & Order Tracking), and Idle Time Monitoring.

My technical core is anchored in React.js, Next.js, and Java (Spring Boot), alongside C# (ASP.NET Core), PostgreSQL, and GenAI integrations (OpenRouter, OpenAI). I am an active competitive programmer with 400+ problems solved on LeetCode, dedicated to low-latency API design, clean code, and enterprise-grade security (Anti-CSRF, Anti-Clickjacking, XSS defenses).`,
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Prescient Technologies",
    location: "Pune, India",
    period: "Jul 2024 – Present",
    type: "Full-Time",
    description:
      "Design and implement secure, multi-tier software solutions for PDM platforms and manufacturing execution, prioritizing scalable backend code, high reliability, and sub-second query performance.",
    responsibilities: [
      "Architect and maintain Prescient's signature enterprise platforms: AI-PDM (Product Data Management & CAD Integration), factoryCONNECT (Workflow & Manufacturing Execution), and Idle Time Monitoring.",
      "Implemented enterprise-grade security protocols including Anti-CSRF tokens, Anti-Clickjacking headers, and XSS defensive architectures to fortify web applications and REST APIs.",
      "Developed live telemetry & data analytics dashboards along with custom analytical reports using React and PostgreSQL to deliver actionable operational insights.",
      "Executed strategic Proof of Concepts (POCs) on SCORM 2004/xAPI compiler architecture, OSLC cross-system integration, Microsoft Teams enterprise bot development, and advanced real-time data visualization with Grafana.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "Next.js",
      "C#",
      "ASP.NET Core",
      "PostgreSQL",
      "Siemens NX",
      "Grafana",
      "Docker",
      "Azure DevOps",
    ],
    highlights: [
      "Hardened API defense posture across entire enterprise suite with Zero-Trust principles",
      "Engineered real-time telemetry pipelines handling manufacturing telemetry and shop-floor events",
      "Engineered AI-driven course generation and PDM BOM extraction pipelines",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "scorm-authoring-lms",
    title: "AI-Powered SCORM Authoring Tool & LMS Player",
    tagline: "Decoupled AI Course Generator & Standardized SCORM/xAPI Packaging Engine",
    category: "AI & GenAI",
    badge: "Featured AI Architecture",
    featured: true,
    description:
      "A high-performance modern LMS linking a Next.js/Vercel frontend with a Spring Boot/Render backend and serverless Neon PostgreSQL. Incorporates dynamic LLM course generation and a client-side SCORM 2004/xAPI compiler with custom security proxying.",
    highlights: [
      "Decoupled Microservices Architecture: Designed and built an elastic architecture connecting a Next.js/Vercel frontend with a Spring Boot/Render backend and serverless Neon PostgreSQL database.",
      "AI-Powered SCORM Compiler: Integrated OpenRouter LLM endpoints to dynamically synthesize course blueprints and developed a client-side JSZip packaging engine compiling standardized SCORM 2004 & xAPI zip packages.",
      "Hybrid Player & Security Routing: Engineered an embedded iframe player using scorm-again to sync tracking metrics (bookmarks, times, scores) in real-time, resolving Same-Origin Policy constraints via Next.js reverse proxy rewrites.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Spring Boot (Java)",
      "PostgreSQL (Neon)",
      "OpenRouter API",
      "SCORM 2004",
      "xAPI",
      "JSZip",
      "Vercel",
      "Render",
    ],
    metrics: "Sub-second AI Blueprint Generation • 100% SCORM 2004 & xAPI Standard Compliant",
    liveUrl: "https://dummy-lms-ai-integration.vercel.app",
    githubUrl: "https://github.com/harshwa007",
  },
  {
    id: "ai-pdm-platform",
    title: "AI-PDM – Product Data Management Platform",
    tagline: "CAD Lifecycle Management, Automated BOM Extraction & PDM Workflow Engine",
    category: "PDM & Industrial",
    badge: "PDM & CAD Integration",
    featured: true,
    description:
      "Enterprise Product Data Management (PDM) platform featuring automated Bill of Materials (BOM) extraction from Siemens NX CAD models, native revision control check-in/out, and engineering lifecycle workflow state management.",
    highlights: [
      "BOM Extraction & Attribute Mapping: Engineered automated Bill of Materials (BOM) extraction pipelines parsing CAD models into multi-level assemblies, sub-assemblies, and part hierarchies with custom attributes, properties, and geometric data.",
      "Siemens NX Commit & Integration: Implemented native Siemens NX commit functionality enabling seamless CAD check-in/check-out, version revision control, and bi-directional metadata synchronization with the PDM repository.",
      "Workflow Management: Architected robust PDM engineering workflow management handling lifecycle state transitions (In-Review, Released, Obsolete), access control, and engineering change audit trails.",
      "High-Performance RESTful APIs: Developed and optimized ASP.NET Core REST APIs with PostgreSQL for rapid metadata retrieval and transaction integrity across large assembly trees.",
    ],
    technologies: [
      "Siemens NX",
      "React.js",
      "C#",
      "ASP.NET Core Web API",
      "PostgreSQL",
      "Product Data Management (PDM)",
    ],
    metrics: "Multi-level CAD Hierarchy Parsing • Real-time Revision Control",
    githubUrl: "https://github.com/harshwa007",
  },
  {
    id: "factory-connect",
    title: "factoryCONNECT – Production Order Tracking & Workflow Management",
    tagline: "End-to-End Shop Floor Execution & Production Lifecycle Analytics",
    category: "Full Stack & Cloud",
    badge: "Workflow Management",
    featured: true,
    description:
      "Production workflow management system orchestrating real-time tracking of manufacturing orders, activity mapping, and shop-floor execution with high-throughput ASP.NET Core RESTful APIs and PostgreSQL.",
    highlights: [
      "Engineered a production workflow management module enabling end-to-end tracking of manufacturing orders, activity mapping, and shop-floor execution.",
      "Designed RESTful APIs in ASP.NET Core with PostgreSQL for order lifecycle validation, dependency checks, status transitions, and estimated vs. actual production time analytics.",
      "Created interactive dashboards with filtering, sorting, and Excel export, optimizing database query performance for large production datasets.",
    ],
    technologies: [
      "React.js",
      "ASP.NET Core Web API",
      "C#",
      "PostgreSQL",
      "Material UI",
      "React Query",
      "SignalR",
    ],
    metrics: "Optimized complex query execution for high-volume shop floor order streams",
    githubUrl: "https://github.com/harshwa007",
  },
  {
    id: "idle-time-monitoring",
    title: "Idle Time Monitoring and Industrial Reporting System",
    tagline: "Real-time PLC Signal Processing & Manufacturing Downtime Detection",
    category: "PDM & Industrial",
    badge: "Hardware/PLC Telemetry",
    featured: false,
    description:
      "Real-time industrial downtime detection and telemetry suite interfacing physical PLC hardware via OPC (DA) to compute idle duration, energy consumption, and automated Pareto downtime analytics.",
    highlights: [
      "Developed a complete Idle Time Monitoring and Reporting System from scratch, enabling real-time detection of process idle events in a manufacturing plant.",
      "Developed an OPC Data Logger in Java and data bridge to read raw PLC signals via OPC (DA), process HMD signal transitions, and calculate idle time, idle energy consumption, and current bar size.",
      "Designed and implemented multiple analytical reports (Detailed, Summary, Comparison) along with Pareto charts (Reason-wise & Area-wise) and scheduled automated reports.",
      "Created intuitive web dashboards featuring shift-wise pie charts, Pareto charts, and trend visualizations for plant management analysis.",
    ],
    technologies: [
      "Java (OPC Logger)",
      "C#",
      "ASP.NET",
      "PostgreSQL",
      "OPC (DA)",
      "WinForms",
      "FlexCel",
      "SQL",
    ],
    metrics: "Zero-data-loss OPC signal polling • Automated Pareto breakdown generation",
    githubUrl: "https://github.com/harshwa007",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Strong object-oriented design, type safety, and high-performance algorithms",
    iconName: "Code2",
    skills: [
      { name: "Java (OOP, Multithreading, Collections)", highlight: true },
      { name: "C#", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "HTML5 / CSS3", highlight: false },
    ],
  },
  {
    title: "Backend & Microservices",
    description: "Scalable REST APIs, enterprise middleware, concurrency, and real-time sockets",
    iconName: "Server",
    skills: [
      { name: "Spring Boot", highlight: true },
      { name: "ASP.NET Core Web API", highlight: true },
      { name: "Microservices Architecture", highlight: true },
      { name: "RESTful Web Services", highlight: true },
      { name: "SignalR", highlight: false },
      { name: "Node.js", highlight: false },
    ],
  },
  {
    title: "Frontend & Web Engineering",
    description: "Modern reactive web apps, responsive glassmorphism UI, and state management",
    iconName: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "React Query", highlight: false },
      { name: "Material UI", highlight: false },
      { name: "Framer Motion", highlight: false },
    ],
  },
  {
    title: "PDM & Industrial Protocols",
    description: "CAD integration, engineering lifecycle standards, and shop floor automation",
    iconName: "Cpu",
    skills: [
      { name: "Siemens NX Integration", highlight: true },
      { name: "Product Data Management (PDM)", highlight: true },
      { name: "BOM Extraction & Attribute Mapping", highlight: true },
      { name: "OPC (DA) PLC Telemetry", highlight: true },
      { name: "SCORM 2004 & xAPI", highlight: true },
      { name: "OSLC Integration", highlight: false },
    ],
  },
  {
    title: "AI, GenAI & Modern Tooling",
    description: "LLM synthesis, prompt design, and AI-assisted workflows",
    iconName: "Sparkles",
    skills: [
      { name: "LLM Integration (OpenRouter, OpenAI, Gemini)", highlight: true },
      { name: "Prompt Engineering", highlight: true },
      { name: "Engineering Copilot / MCP", highlight: true },
      { name: "AI Course Generation", highlight: false },
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    description: "Reliable database design, containerization, and automated deployments",
    iconName: "Cloud",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Neon Serverless Postgres", highlight: true },
      { name: "SQL Server", highlight: false },
      { name: "AWS (S3 & Cloud Services)", highlight: true },
      { name: "Docker", highlight: false },
      { name: "Linux", highlight: false },
      { name: "Azure DevOps & Git", highlight: true },
      { name: "Grafana", highlight: false },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: "Centre for Development of Advanced Computing (CDAC)",
    degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    location: "Pune, India",
    year: "2024",
    details: "Intensive training in advanced Java, microservices, enterprise systems, modern web engineering with React, and database management.",
  },
  {
    institution: "Government College of Engineering, Karad",
    degree: "B.Tech in Electronics & Telecommunication (E&Tc)",
    location: "Karad, Maharashtra, India",
    year: "2023",
    details: "Rigorous engineering foundation in digital logic, embedded hardware, communications, and computational fundamentals.",
  },
];

export const certifications = [
  {
    name: "Programming in Java",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    year: "Certified",
    badge: "Java Master",
  },
  {
    name: "PG-DAC (Post Graduate Diploma in Advanced Computing)",
    issuer: "CDAC Pune",
    year: "2024",
    badge: "Enterprise Computing",
  },
];

export const languages = [
  { name: "English", fluency: "Professional Working / Fluent" },
  { name: "Hindi", fluency: "Fluent" },
  { name: "Marathi", fluency: "Native / Fluent" },
];
