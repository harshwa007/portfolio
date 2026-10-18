"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import {
  Server,
  ShieldCheck,
  Sparkles,
  Code2,
  Box,
  Layers,
} from "lucide-react";

const pillars = [
  {
    title: "Distributed Backend & High Concurrency",
    desc: "Architecting multi-tier services in Java (Spring Boot) and C# (.NET Core). Deep focus on database query optimization with PostgreSQL, RESTful standards, transaction integrity, and sub-second latencies.",
    icon: Server,
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-500/20",
    tag: "Java / Spring Boot / C# / PostgreSQL",
  },
  {
    title: "Product Data Management (PDM) Platform",
    desc: "Deep engineering in PDM platforms and manufacturing execution. Engineered automated multi-level Bill of Materials (BOM) extraction from Siemens NX CAD models, native revision control check-in/out, and lifecycle workflow states.",
    icon: Box,
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/20",
    tag: "Siemens NX / PDM / BOM Extraction",
  },
  {
    title: "Enterprise Application Security",
    desc: "Hardening production web applications and REST APIs against critical vulnerabilities. Implemented comprehensive Anti-CSRF token verification, Anti-Clickjacking defense, and strict input/output XSS sanitization.",
    icon: ShieldCheck,
    color: "from-rose-500 to-pink-600",
    border: "border-rose-500/20",
    tag: "Anti-CSRF / Anti-Clickjacking / XSS",
  },
  {
    title: "Modern Web & GenAI Systems",
    desc: "Crafting reactive, high-performance interfaces with React.js and Next.js. Integrating state-of-the-art LLMs (OpenRouter, OpenAI) to synthesize structured learning blueprints and package standardized SCORM 2004/xAPI archives.",
    icon: Sparkles,
    color: "from-purple-500 to-indigo-600",
    border: "border-purple-500/20",
    tag: "React.js / Next.js / SCORM / LLMs",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Resilient Systems at the Intersection of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Enterprise Scale & Modern Web
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A software development engineer with 2+ years of production experience crafting 
            robust backend services, PDM platforms, and modern full-stack web applications.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
              <span>Full-Stack Craftsmanship with Heavy Backend Specialization</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Currently at <span className="text-white font-medium">Prescient Technologies</span> in Pune, 
                I design and implement multi-tier distributed software solutions for enterprise <span className="text-white font-medium">PDM platforms</span> and manufacturing execution systems. 
                My core expertise centers on <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and <span className="text-emerald-400 font-semibold">Java</span> (Spring Boot), combined with C# (ASP.NET Core) and PostgreSQL for high-throughput relational data workflows.
              </p>
              <p>
                From parsing complex CAD assemblies in Siemens NX into multi-level Bill of Materials (BOM) hierarchies, to compiling client-side SCORM 2004 e-learning packages generated dynamically by LLMs, I excel at solving demanding technical challenges that require deep algorithmic thinking and systems discipline.
              </p>
              <p>
                I hold a <span className="text-emerald-400 font-medium">Post Graduate Diploma in Advanced Computing (PG-DAC)</span> from CDAC Pune and a <span className="text-blue-400 font-medium">B.Tech in Electronics & Telecommunication</span> from Government College of Engineering, Karad.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                ⚛️ React.js & Next.js
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                ☕ Java & Spring Boot
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                📐 Product Data Management (PDM)
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                🔒 Enterprise Security First
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                ⚡ 400+ LeetCode Solved
              </span>
            </div>
          </div>

          {/* Quick Info & Highlights card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider text-xs flex items-center justify-between">
                <span>Fast Facts for Recruiters</span>
                <span className="text-emerald-400 font-mono text-[11px] font-normal">verified</span>
              </h4>

              {/* Candidate Info with Photo */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-white/10">
                <div className="w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-blue-500 to-emerald-400 overflow-hidden shrink-0 shadow-md shadow-blue-500/20">
                  <Image
                    src="/profile.jpg"
                    alt="Harshvardhan Rajkumar Wadavane"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm leading-tight">Harshvardhan Wadavane</h5>
                  <p className="text-xs text-blue-400">Software Development Engineer</p>
                  <p className="text-[11px] text-slate-400">Prescient Technologies • Pune</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Total Experience:</span>
                  <span className="text-white font-medium">2+ Years (Full-Time SDE)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Competitive Programming:</span>
                  <span className="text-amber-400 font-bold">400+ Problems Solved on LeetCode</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Primary Location:</span>
                  <span className="text-white font-medium">Pune, Maharashtra, India</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Current Employer:</span>
                  <span className="text-white font-medium">Prescient Technologies</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Core Technologies:</span>
                  <span className="text-emerald-400 font-mono">React.js, Next.js, Java, C#</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Highest Education:</span>
                  <span className="text-white font-medium">PG-DAC (CDAC Pune, 2024)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Notice Period / Availability:</span>
                  <span className="text-emerald-400 font-medium">Open to High-Impact SDE Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-card glass-card-hover p-6 rounded-2xl border ${pillar.border} space-y-4`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
