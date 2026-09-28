"use client";

import { useState } from "react";
import { Sparkles, Download, Mail, Phone, MapPin, Award, CheckCircle, ExternalLink, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function RecruiterSummary() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#0284c7", "#3b82f6"],
    });
  };

  return (
    <section id="recruiter-view" className="py-16 md:py-24 bg-[#0a0f1d] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Recruiter Quick Briefing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Recruiter Fast-Track (30-Sec Glance)
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Everything you need to assess Aravind&apos;s candidacy at a glance — background, certifications, core stack, and instant contact info.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={portfolioData.personal.resumeUrl}
              download
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Full PDF Resume</span>
            </a>
          </div>
        </div>

        {/* 4 Key Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {portfolioData.recruiterQuickFacts.map((fact, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm mb-3">
                0{index + 1}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{fact.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{fact.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Contact & Profile Drawer Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Quick Contact */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
                <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Quick Response
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs text-slate-300 truncate">{portfolioData.personal.email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-xs text-slate-300">{portfolioData.personal.phone}</span>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Badges / Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400 font-medium mr-1">Key Strengths:</span>
                {["C# & .NET 8", "Azure Serverless", "Azure APIM & ADF", "Microservices", "RESTful APIs", "SQL Server"].map(
                  (badge, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-950/60 text-sky-300 border border-sky-800/40"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Quick Links / Profiles */}
            <div className="lg:col-span-5 flex flex-col justify-center sm:border-l sm:border-slate-800 sm:pl-8 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Recruiter Direct Links
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/30 hover:bg-blue-600/10 hover:border-blue-500/40 border border-slate-800 text-xs text-slate-200 transition-all group"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    LinkedIn: /in/{portfolioData.personal.linkedinHandle}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 hover:border-slate-600 border border-slate-800 text-xs text-slate-200 transition-all group"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    GitHub: github.com/{portfolioData.personal.githubHandle}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>

                <a
                  href={portfolioData.personal.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/30 hover:bg-amber-500/10 hover:border-amber-500/40 border border-slate-800 text-xs text-slate-200 transition-all group"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    LeetCode Profile: @{portfolioData.personal.leetcodeHandle}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
