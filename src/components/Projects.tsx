"use client";

import React, { useState } from "react";
import { projects, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";

const categories = ["All", "AI & GenAI", "PDM & Industrial", "Full Stack & Cloud"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Production & Architectural Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Technical Innovations
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-performance web applications, PDM platforms, and GenAI-driven architectures with clickable live demos and source links.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-500"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="glass-card glass-card-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Badges & Category */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{project.badge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs text-emerald-400 font-mono flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Technical Highlights (Collapsible / Expandable) */}
                  <div className="space-y-3 pt-1">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider py-1.5 border-b border-white/10 cursor-pointer"
                    >
                      <span>Architectural Highlights & Innovations</span>
                      {isExpanded ? (
                        <span className="flex items-center gap-1 text-blue-400">
                          Hide <ChevronUp className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-blue-400">
                          View Deep-Dive <ChevronDown className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="space-y-2.5 pt-2 animate-in fade-in duration-200">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-black/20 p-2.5 rounded-lg border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Section: Technologies & Action Links */}
                <div className="p-6 sm:p-8 pt-0 space-y-5">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Clickable Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/25 cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-all cursor-pointer"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {isExpanded ? "Collapse Specs" : "Expand Specs"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
