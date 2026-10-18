"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/portfolioData";
import {
  Code2,
  Server,
  Layout,
  Cpu,
  Sparkles,
  Cloud,
  Search,
  Check,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Server,
  Layout,
  Cpu,
  Sparkles,
  Cloud,
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredCategories = skillCategories
    .filter((cat) => activeTab === "All" || cat.title === activeTab)
    .map((cat) => {
      if (!searchTerm.trim()) return cat;
      const matchingSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Technology Stack
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Comprehensive breakdown of languages, enterprise frameworks, 3D industrial tools, and cloud infrastructure.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "All"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.title}
                onClick={() => setActiveTab(c.title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === c.title
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, Next.js, NX)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Code2;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all duration-200 ${
                          skill.highlight
                            ? "bg-blue-500/15 border border-blue-500/30 text-blue-200 hover:border-blue-400 shadow-sm"
                            : "bg-white/5 border border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{cat.skills.length} skills listed</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Production Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
