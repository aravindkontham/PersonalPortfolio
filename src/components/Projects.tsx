"use client";

import { useState } from "react";
import { Code2, Github, ExternalLink, Database, Shield, Server, ArrowUpRight, CheckCircle2, BarChart3, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Cloud Data & API", "Backend Microservices", "Full Stack", "Power BI Analytics"];

  const getFilteredProjects = () => {
    if (activeTab === "All") return portfolioData.projects;
    if (activeTab === "Cloud Data & API") {
      return portfolioData.projects.filter(
        (p) => p.category.includes("Data") || p.category.includes("Gateway")
      );
    }
    if (activeTab === "Backend Microservices") {
      return portfolioData.projects.filter((p) => p.category.includes("Backend"));
    }
    if (activeTab === "Full Stack") {
      return portfolioData.projects.filter((p) => p.category.includes("Full Stack"));
    }
    if (activeTab === "Power BI Analytics") {
      return portfolioData.projects.filter((p) => p.category.includes("Intelligence"));
    }
    return portfolioData.projects;
  };

  const getProjectIcon = (category: string) => {
    if (category.includes("Data") && !category.includes("Intelligence")) return <Database className="w-5 h-5 text-sky-400" />;
    if (category.includes("Intelligence")) return <BarChart3 className="w-5 h-5 text-amber-400" />;
    if (category.includes("Gateway") || category.includes("Security")) return <Shield className="w-5 h-5 text-indigo-400" />;
    if (category.includes("Full Stack")) return <Globe className="w-5 h-5 text-emerald-400" />;
    return <Server className="w-5 h-5 text-blue-400" />;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#090e1a]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Engineering Projects & Repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Implementations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Production-grade architectures across Azure Cloud, ASP.NET Core microservices, full-stack Next.js + Supabase apps, and Power BI executive dashboards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="text-xs font-medium text-sky-400 font-mono">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded">
                    {project.period}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Highlights Pill list */}
                <div className="space-y-2 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-slate-800/80 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-950/40 text-sky-300 border border-sky-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white border border-slate-700 hover:border-slate-600 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          project.category.includes("Data")
                            ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30"
                            : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-sm shadow-emerald-500/10"
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.category.includes("Data") ? "Live Report" : "Live Demo"}</span>
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>Enterprise Architecture</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    #{idx + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
