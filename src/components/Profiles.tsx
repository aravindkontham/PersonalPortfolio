import { Github, ExternalLink, Code, Terminal, GitBranch, Star, Activity, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Profiles() {
  return (
    <section id="profiles" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Coding Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub & LeetCode Profiles
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Continuous problem solving, data structures & algorithms proficiency, and production-grade open source projects.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Card */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0c1220] border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1.5 shadow-2xl group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-slate-700/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-white">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      GitHub Repositories
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      @{portfolioData.personal.githubHandle}
                    </div>
                  </div>
                </div>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Open GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Hosting backend architectures, .NET Web API implementations, Azure integration workflows, and clean code repositories.
              </p>

              {/* GitHub Highlights */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-200">On-Demand-Car-Wash</span>
                  </div>
                  <span className="text-[10px] bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20">
                    ASP.NET Core
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200">Azure Data Factory Pipeline</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">
                    ADF & SQL
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LeetCode Card */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#14120c] border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1.5 shadow-2xl group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      LeetCode Algorithmic Skills
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      @{portfolioData.personal.leetcodeHandle}
                    </div>
                  </div>
                </div>

                <a
                  href={portfolioData.personal.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Open LeetCode Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Dedicated problem solving with focus on optimal time & space complexity, data structures, and algorithmic patterns in C# & Java.
              </p>

              {/* LeetCode Topics / Highlights */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 font-medium">DSA Core Foundations</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 font-medium">Arrays & Strings</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 font-medium">Binary Trees & Graphs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 font-medium">Dynamic Programming</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium text-xs sm:text-sm transition-all shadow-sm"
              >
                <Code className="w-4 h-4 text-amber-400" />
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
