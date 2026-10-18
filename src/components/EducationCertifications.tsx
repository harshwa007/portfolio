"use client";

import React from "react";
import { educationList, certifications, languages } from "@/data/portfolioData";
import { GraduationCap, Award, Languages as LanguagesIcon, CheckCircle2 } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative bg-grid-pattern/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Credentials & Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Solid foundations in advanced computing, microservices, and electronics engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-blue-300">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 self-start sm:self-auto border border-blue-500/30">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span>📍 {edu.location}</span>
                  </p>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Certifications</span>
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <LanguagesIcon className="w-5 h-5 text-indigo-400" />
                <span>Spoken Languages</span>
              </h3>

              <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-none text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-emerald-400 font-medium">{lang.fluency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
