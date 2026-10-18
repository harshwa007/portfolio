"use client";

import React, { useState, useRef, useEffect } from "react";
import { personalInfo, projects, experiences } from "@/data/portfolioData";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1.5 text-slate-300">
          <p className="text-emerald-400 font-semibold">
            ⚡ Welcome to Harshvardhan's Interactive Engineering Shell (v2.4.0)
          </p>
          <p className="text-slate-400 text-xs">
            Type a command or click any quick command below: <span className="text-blue-400">help</span>, <span className="text-blue-400">whoami</span>, <span className="text-blue-400">skills</span>, <span className="text-blue-400">projects</span>, <span className="text-blue-400">experience</span>, <span className="text-blue-400">contact</span>, <span className="text-blue-400">clear</span>
          </p>
        </div>
      ),
    },
  ]);

  const terminalBoxRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <p><span className="text-emerald-400 font-mono">whoami</span> - Candidate profile summary</p>
              <p><span className="text-emerald-400 font-mono">skills</span> - Full technical skill tree</p>
              <p><span className="text-emerald-400 font-mono">projects</span> - Production projects & live links</p>
              <p><span className="text-emerald-400 font-mono">experience</span> - Roles at Prescient Technologies</p>
              <p><span className="text-emerald-400 font-mono">leetcode</span> - Problem solving metrics (400+)</p>
              <p><span className="text-emerald-400 font-mono">contact</span> - Phone, Email & Social links</p>
              <p><span className="text-emerald-400 font-mono">architecture</span> - Core architectural highlights</p>
              <p><span className="text-emerald-400 font-mono">clear</span> - Clear terminal window</p>
            </div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-bold">{personalInfo.name}</p>
            <p className="text-blue-400 text-xs">{personalInfo.role} • 2+ Years Experience</p>
            <p className="text-slate-300 text-xs leading-relaxed">{personalInfo.bio}</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-semibold">Primary Tech Stack:</p>
            <p className="text-xs"><span className="text-blue-400">Core Technologies:</span> React.js, Next.js, Java (Spring Boot), C# (ASP.NET Core)</p>
            <p className="text-xs"><span className="text-emerald-400">Languages:</span> Java (OOP, Multithreading), C#, TypeScript, JavaScript, SQL</p>
            <p className="text-xs"><span className="text-indigo-400">PDM & Industrial:</span> Siemens NX Integration, PDM Workflows, BOM Extraction, OPC (DA), SCORM 2004, xAPI</p>
            <p className="text-xs"><span className="text-amber-400">Data & Cloud:</span> PostgreSQL, Neon Serverless, AWS S3, Docker, Azure DevOps</p>
            <p className="text-xs"><span className="text-purple-400">Competitive Programming:</span> 400+ Problems Solved on LeetCode</p>
          </div>
        );
        break;

      case "leetcode":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-white font-semibold">LeetCode Profile:</p>
            <p className="text-xs text-amber-400 font-bold">400+ Problems Solved (Data Structures & Algorithms)</p>
            <p className="text-xs">Profile: <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="underline text-blue-400">{personalInfo.socials.leetcode}</a></p>
            <p className="text-xs text-slate-400">Focus: Arrays, Trees, Dynamic Programming, Graphs, Concurrency, and System Design</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-white font-semibold">Featured Projects:</p>
            {projects.map((p) => (
              <div key={p.id} className="text-xs pl-2 border-l border-blue-500/40">
                <p className="text-blue-300 font-bold">{p.title}</p>
                <p className="text-slate-400">{p.tagline}</p>
                {p.liveUrl && (
                  <p className="text-emerald-400 font-mono">Live Demo: <a href={p.liveUrl} target="_blank" rel="noreferrer" className="underline">{p.liveUrl}</a></p>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-white font-bold">Prescient Technologies (Jul 2024 - Present)</p>
            <p className="text-xs text-blue-300">Software Engineer • Pune, India</p>
            <ul className="text-xs list-disc list-inside space-y-1 text-slate-300">
              <li>Architecting multi-tier software solutions for PDM platforms and manufacturing execution.</li>
              <li>Engineered AI-PDM with Siemens NX CAD integration and automated BOM extraction.</li>
              <li>Implemented Anti-CSRF, Anti-Clickjacking, and XSS defensive architectures.</li>
            </ul>
          </div>
        );
        break;

      case "architecture":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-white font-semibold">Architectural Highlights:</p>
            <p>1. <span className="text-blue-400">SCORM Reverse Proxy:</span> Next.js server rewrites resolving cross-origin iframe communication.</p>
            <p>2. <span className="text-emerald-400">CAD BOM Parsing:</span> Recursive extraction of multi-level assembly hierarchies in Siemens NX.</p>
            <p>3. <span className="text-purple-400">Real-Time OPC Data Logger:</span> Ingesting raw PLC signal transitions with zero telemetry drop.</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-white font-semibold">Contact Harshvardhan Wadavane:</p>
            <p>Email: <a href={personalInfo.socials.email} className="text-blue-400 underline">{personalInfo.email}</a></p>
            <p>Phone: <a href={personalInfo.socials.phone} className="text-emerald-400 underline">{personalInfo.phone}</a></p>
            <p>LinkedIn: <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalInfo.socials.linkedin}</a></p>
            <p>GitHub: <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalInfo.socials.github}</a></p>
            <p>LeetCode: <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="text-amber-400 underline">{personalInfo.socials.leetcode}</a> (400+ Solved)</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs">
            Command not recognized: <span className="font-mono">{cmdText}</span>. Type <span className="text-blue-400 font-mono">help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: outputNode }]);
    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  // Only scroll inside the terminal container when user actually issues commands, NEVER on first render!
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTo({
        top: terminalBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const quickCommands = ["whoami", "skills", "leetcode", "projects", "experience", "architecture", "contact", "clear"];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Console</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Interactive Engineering CLI
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            For recruiters and engineers: explore my portfolio directly via the command line interface.
          </p>
        </div>

        {/* Terminal Box */}
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm">
          {/* Top Bar */}
          <div className="bg-[#0b101f] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-slate-400 text-xs ml-2 hidden sm:inline">
                harshvardhan@production-terminal: ~
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Shell Online</span>
            </div>
          </div>

          {/* Quick Buttons for Mobile & Fast Testing */}
          <div className="bg-[#090d1a] px-4 py-2 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[11px] text-slate-500 mr-1 shrink-0">Quick run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[11px] text-blue-300 border border-white/10 transition-colors shrink-0 cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal History - scrollable strictly inside this container */}
          <div
            ref={terminalBoxRef}
            className="p-4 sm:p-6 bg-[#060a14]/95 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Terminal Prompt Input */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-[#0a0e1c] px-4 py-3 border-t border-white/10 flex items-center gap-2"
          >
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (try 'whoami' or 'leetcode')..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-500 text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
