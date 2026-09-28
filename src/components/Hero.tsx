"use client";

import { useState } from "react";
import { Download, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Database, Cloud, Cpu, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#0284c7", "#6366f1"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#60a5fa", "#3b82f6"],
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid">
      {/* Glow background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">Software Engineer @ Capgemini</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 hidden sm:inline">Azure & .NET Backend Specialist</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
              Hi, I&apos;m <span className="gradient-text-azure">{portfolioData.personal.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-6 max-w-2xl leading-relaxed">
              Engineering <span className="text-sky-400 font-semibold">cloud-native microservices</span>, robust{" "}
              <span className="text-indigo-400 font-semibold">ASP.NET Core APIs</span>, and automated{" "}
              <span className="text-blue-400 font-semibold">Azure data pipelines</span> that scale securely under enterprise demand.
            </p>

            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#recruiter-view"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Recruiter 30-Sec Summary</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download
                onClick={handleDownloadCelebration}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 text-slate-200 font-semibold text-sm transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-slate-800/80">
              {portfolioData.personal.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-3">
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  <div className="text-sm sm:text-base font-bold text-sky-300 mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Cloud Architecture & Tech Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative gradient border frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-sky-500/30 via-slate-800/60 to-slate-900/90 p-1 shadow-2xl shadow-sky-950/40">
                <div className="rounded-[14px] bg-[#0c1220] p-5 sm:p-6 border border-slate-800/90 text-left">
                  {/* Top bar simulating developer console */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">cloud-arch-flow.json</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      LIVE ARCH
                    </span>
                  </div>

                  {/* Visual Architecture Flow Representation */}
                  <div className="space-y-3 font-mono text-xs">
                    {/* Node 1: APIM & BizTalk */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-between hover:border-sky-400/60 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">Azure APIM & BizTalk EAI</div>
                          <div className="text-[10px] text-slate-400">Enterprise Orchestrations • Schemas • Gateway</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">200 OK</span>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center text-slate-600 text-xs py-0.5 font-sans">
                      ↓ <span className="text-[10px] text-slate-400 ml-1">Event Ingestion & Queuing</span>
                    </div>

                    {/* Node 2: Service Bus & Serverless */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex items-center justify-between hover:border-indigo-400/60 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <Cloud className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">Azure Functions & Logic Apps</div>
                          <div className="text-[10px] text-slate-400">Service Bus Topics • Async Orchestration</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">&lt;15ms</span>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center text-slate-600 text-xs py-0.5 font-sans">
                      ↓ <span className="text-[10px] text-slate-400 ml-1">Clean Architecture / DDD</span>
                    </div>

                    {/* Node 3: ASP.NET Core & SQL / Data Factory */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 flex items-center justify-between hover:border-blue-400/60 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">ASP.NET Core Web API + ADF</div>
                          <div className="text-[10px] text-slate-400">Azure SQL Database • Blob Storage ETL</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Resilient</span>
                    </div>
                  </div>

                  {/* Highlights checklist inside card */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>4x Certified: Azure AI Engineer & Google GenAI</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>Enterprise EAI (BizTalk Server) & Azure Cloud at Capgemini</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>SOLID Principles, CQRS & Repository Patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
