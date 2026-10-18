"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  ArrowRight,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Award,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import confetti from "canvas-confetti";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const fullTitle = "Hi, I'm Harshvardhan Wadavane";

  // Typing effect on mount & ensure viewport starts at the very top
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#3b82f6", "#10b981", "#6366f1"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Render title with gradient on name
  const renderTypedTitle = () => {
    const prefix = "Hi, I'm ";
    if (displayedTitle.length <= prefix.length) {
      return <span>{displayedTitle}</span>;
    }
    const namePart = displayedTitle.slice(prefix.length);
    return (
      <>
        <span>{prefix}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
          {namePart}
        </span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium glow-pill">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to SDE Roles • Pune / Hybrid / Remote</span>
            </div>

            {/* Name with Typing Effect & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] min-h-[70px] sm:min-h-[80px]">
                {renderTypedTitle()}
                <span className="inline-block w-1.5 h-8 sm:h-11 ml-1 bg-blue-400 animate-pulse align-middle" />
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <span>{personalInfo.role}</span>
                <span className="text-blue-500 hidden sm:inline">•</span>
                <span className="text-slate-400 text-lg hidden sm:inline font-normal">
                  2+ Years Experience
                </span>
              </p>
            </div>

            {/* Summary Technologies: React.js, Next.js, and Java prominently featured */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Software Engineer at <span className="text-white font-medium">Prescient Technologies</span> specializing in building high-performance web applications and resilient distributed systems with{" "}
              <span className="text-cyan-400 font-semibold">React.js</span>,{" "}
              <span className="text-blue-400 font-semibold">Next.js</span>, and{" "}
              <span className="text-emerald-400 font-semibold">Java</span> (Spring Boot), alongside C# (.NET Core) for enterprise{" "}
              <span className="text-indigo-400 font-medium">PDM platforms</span> and GenAI integrations. Active problem solver with{" "}
              <span className="text-amber-400 font-semibold">400+ problems solved on LeetCode</span>.
            </p>

            {/* Clickable Social & Contact Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              {/* Email Button */}
              <a
                href={personalInfo.socials.email}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 text-xs font-medium transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              {/* Phone Link */}
              <a
                href={personalInfo.socials.phone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-colors"
                title="Call Harshvardhan"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/10 text-xs">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Social Media Link Pills with 400+ LeetCode highlight */}
            <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 text-xs font-medium transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4 text-slate-100" />
                <span>GitHub (harshwa007)</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-950/40 hover:bg-blue-900/50 text-blue-300 border border-blue-800/50 text-xs font-medium transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-950/30 hover:bg-amber-900/40 text-amber-300 border border-amber-800/50 text-xs font-medium transition-all hover:scale-105"
                title="400+ Problems Solved on LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode (400+ Solved)</span>
              </a>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-102 active:scale-98"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-sm border border-white/15 transition-all hover:scale-102"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Contact & Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Photo Card & Stats */}
          <div className="lg:col-span-5 space-y-5">
            {/* Elegant Portrait Frame */}
            <div className="relative group max-w-sm sm:max-w-md mx-auto">
              {/* Glowing gradient back-glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 opacity-60 blur-xl group-hover:opacity-85 transition duration-500 group-hover:duration-200 -z-10" />

              <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-blue-500/70 via-indigo-500/40 to-emerald-400/70 shadow-2xl overflow-hidden glass-card">
                <div className="relative overflow-hidden rounded-[22px] bg-[#090d18]">
                  <Image
                    src="/profile.jpg"
                    alt="Harshvardhan Rajkumar Wadavane"
                    width={420}
                    height={520}
                    priority
                    className="w-full h-[360px] sm:h-[400px] object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Gradient bottom overlay for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080c14] via-[#080c14]/70 to-transparent pointer-events-none" />

                  {/* Floating Top Badge: Availability */}
                  <div className="absolute top-3.5 right-3.5 bg-[#080c14]/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-2 text-xs font-medium text-emerald-400 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Roles</span>
                  </div>

                  {/* Floating Bottom Left: Role Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="bg-[#0b101f]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-left">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                        <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                        <span>Prescient Technologies</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Software Engineer (SDE)</p>
                    </div>

                    <div className="bg-[#0b101f]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-amber-500/30 text-right">
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                        <Award className="w-3.5 h-3.5" />
                        <span>400+ Solved</span>
                      </div>
                      <p className="text-[10px] text-slate-400">LeetCode Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-sm sm:max-w-md mx-auto">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-3 rounded-xl border border-white/10 text-center hover:border-blue-500/30 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
