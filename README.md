# Harshvardhan Rajkumar Wadavane – SDE Portfolio Website

An ultra-modern, high-performance portfolio website built for **Harshvardhan Rajkumar Wadavane** (Software Development Engineer with 2+ years of experience). Designed with an engineering-first aesthetic, interactive recruiter tools, smooth micro-interactions, dark-mode glassmorphism, and live clickable links.

---

## 🌟 Tech Stack & Highlights

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Glassmorphism, Dark Mode Theme
- **Icons & Visuals**: Lucide Icons & Custom SVGs (LinkedIn, GitHub, LeetCode)
- **Animations & Effects**: Canvas Confetti, Smooth Scroll, Responsive UI
- **Architecture**:
  - Fully responsive across Desktop, Tablet, and Mobile devices
  - Clean modular component hierarchy (`Navbar`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `InteractiveTerminal`, `EducationCertifications`, `Contact`, `Footer`)
  - Centralized portfolio data repository (`src/data/portfolioData.ts`) for zero-friction resume updates

---

## 🚀 Key Sections Included

1. **Floating Glass Navbar**
   - Live availability badge & brand monogram `HW`
   - Smooth navigation links with mobile-friendly drawer
   - One-click access to LinkedIn, GitHub, LeetCode, Resume, and Direct Contact

2. **High-Impact Hero Section**
   - Candidate headline: *Software Development Engineer | 2+ Years Experience | Pune, India*
   - Active status pill: *Open to SDE & Distributed Systems Roles*
   - One-click copy email with celebration confetti effect
   - Quick clickable badges: GitHub (`harshwa007`), LinkedIn, LeetCode (`theincredibleharsh200`), Phone (`+91 9834529448`), and Email (`harshwa007@gmail.com`)
   - Production blueprint preview & key metrics grid

3. **Engineering Profile & Architectural Pillars (About)**
   - 4 Architectural Pillars:
     1. Distributed Backend & High Concurrency (Spring Boot, .NET Core, FastAPI, PostgreSQL)
     2. Digital Factory & 3D PLM Engineering (Siemens NX, STEP AP242, Three.js/WebGL)
     3. Enterprise Application Security (Anti-CSRF, Anti-Clickjacking, XSS defenses)
     4. GenAI & Intelligent Systems (OpenRouter, Gemini, OpenAI, SCORM 2004, xAPI)
   - Fast facts card for tech recruiters

4. **Experience Timeline (Prescient Technologies - Jul 2024 to Present)**
   - Comprehensive breakdown of signature platforms:
     - **AI-PDM**: CAD integration, Siemens NX commit functionality, BOM extraction, STEP AP242 translation, 3D WebGL viewer
     - **factoryCONNECT**: Shop-floor order tracking, ASP.NET Core RESTful APIs, high-performance querying
     - **Idle Time Monitoring**: PLC signal ingestion via Java OPC Data Logger & OPC (DA), automated Pareto downtime reports
     - **Security Hardening**: Anti-CSRF, Anti-Clickjacking, and XSS sanitization
     - **POCs**: SCORM, OSLC integration, MS Teams bots, and Grafana telemetry

5. **Projects Showcase with Live Demos & Repositories**
   - Category filtering: *All*, *AI & GenAI*, *Industrial & PLM*, *Full Stack & Cloud*
   - Deep-dive collapsible architectural specs
   - Direct clickable **Live Demo** and **Repository** buttons
   - Featured projects:
     - AI-Powered SCORM Authoring Tool & LMS Player POC
     - AI-PDM – Product Data Management & 3D Engineering Platform
     - factoryCONNECT – Production Order Tracking & Workflow Management
     - Idle Time Monitoring and Industrial Reporting System

6. **Interactive Developer CLI (Terminal)**
   - Functional command line emulator inside the browser
   - Supported commands: `help`, `whoami`, `skills`, `projects`, `experience`, `architecture`, `contact`, `clear`
   - Quick-click command chips for rapid mobile & recruiter exploration

7. **Categorized Skills Matrix**
   - Real-time search filter and category switcher
   - Languages, Backend & Microservices, Frontend & 3D, PLM & Industrial, GenAI, Cloud & DevOps

8. **Education & Certifications**
   - CDAC Pune (PG-DAC, 2024)
   - Government College of Engineering, Karad (B.Tech E&Tc, 2023)
   - NPTEL Java Certification & CDAC PG-DAC
   - Languages: English, Hindi, Marathi

9. **Direct Contact Section & Mail Composer**
   - Clickable cards for Email (`mailto:`), Phone (`tel:`), LinkedIn, GitHub, LeetCode
   - Instant copy buttons with feedback
   - Interactive email composer triggering pre-filled candidate messages

---

## 💻 Getting Started Locally

Navigate to the project directory:

```bash
cd "H:\CodeBase\portfolio"
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to your GitHub account (`https://github.com/harshwa007/portfolio`).
2. Visit [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository and click **Deploy**. Next.js will auto-detect the configuration.
