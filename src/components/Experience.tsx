"use client";

import React from "react";
import { experiences } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Enterprise Impact
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering robust software solutions for PDM platforms and manufacturing execution at scale.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Main Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-emerald-400 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-slate-300 text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Platforms & Security Highlights in Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
                      <Cpu className="w-4 h-4" />
                      <span>Core Platforms Engineered</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>
                        <span className="font-semibold text-white">AI-PDM:</span> Product Data Management (PDM), Siemens NX CAD integration, and automated BOM extraction.
                      </li>
                      <li>
                        <span className="font-semibold text-white">factoryCONNECT:</span> End-to-end shop floor manufacturing order tracking & execution.
                      </li>
                      <li>
                        <span className="font-semibold text-white">Idle Time Monitoring:</span> Real-time plant idle event detection & OPC PLC signal ingestion.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Security & Proof of Concepts</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li>
                        <span className="font-semibold text-white">Security Hardening:</span> Built-in Anti-CSRF, Anti-Clickjacking headers, and XSS sanitization across APIs.
                      </li>
                      <li>
                        <span className="font-semibold text-white">Enterprise POCs:</span> SCORM 2004/xAPI compilation, OSLC integrations, MS Teams bots, and Grafana telemetry.
                      </li>
                      <li>
                        <span className="font-semibold text-white">Analytics:</span> High-performance PostgreSQL queries and dynamic Pareto chart visualizations.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Detailed Responsibilities */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider text-xs">
                    Key Architectural Responsibilities & Deliverables:
                  </h4>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Technologies Applied in Production:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-blue-300 font-mono transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
