import { Github, ExternalLink, Code, Terminal, GitBranch, Star, Activity, Trophy, BarChart3, Globe, Database, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Profiles() {
  const getCategoryBadge = (category: string) => {
    if (category.includes("Data")) {
      return "bg-amber-500/10 text-amber-300 border-amber-500/20";
    }
    if (category.includes("Full Stack")) {
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
    }
    return "bg-sky-500/10 text-sky-300 border-sky-500/20";
  };

  const getRepoIcon = (category: string) => {
    if (category.includes("Data")) return <BarChart3 className="w-4 h-4 text-amber-400" />;
    if (category.includes("Full Stack")) return <Globe className="w-4 h-4 text-emerald-400" />;
    return <Database className="w-4 h-4 text-sky-400" />;
  };

  return (
    <section id="profiles" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Coding Footprint & Open Source
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub Repositories & LeetCode Profile
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Real-world implementations spanning full-stack cloud applications, .NET microservices, interactive Power BI intelligence dashboards, and continuous DSA problem solving.
          </p>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-white">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Latest GitHub Repositories</h3>
                <span className="text-xs font-mono text-slate-400">github.com/{portfolioData.personal.githubHandle}</span>
              </div>
            </div>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <span>Explore All on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.githubRepos.map((repo, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  {/* Top Category & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        {getRepoIcon(repo.category)}
                      </div>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getCategoryBadge(repo.category)}`}>
                        {repo.category}
                      </span>
                    </div>

                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {repo.name}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-light">
                    {repo.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {repo.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-4">
                    {repo.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-950/40 text-sky-300 border border-sky-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 hover:border-slate-600 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>

                    {repo.liveUrl && (
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl border text-xs font-semibold transition-all ${
                          repo.category.includes("Data")
                            ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30"
                            : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-sm shadow-emerald-500/10"
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{repo.category.includes("Data") ? "Live Report" : "Live App"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LeetCode Profile Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#17130b] border border-slate-800 hover:border-amber-500/40 p-7 sm:p-8 shadow-2xl transition-all hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Info */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>LeetCode Problem Solving</span>
                    <span className="text-[11px] font-mono font-normal text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      DSA & Algorithmic Foundations
                    </span>
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    Profile: @{portfolioData.personal.leetcodeHandle}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Continuous practice solving computational problems with rigorous attention to optimal space and time complexities (\(O(n)\), \(O(\log n)\)), memory footprints, and clean object-oriented patterns in C# & Java.
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300 font-medium">DSA Foundations</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Arrays & Strings</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Trees & Graphs</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Dynamic Prog.</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="md:col-span-4 flex flex-col justify-center items-center md:items-end md:border-l md:border-slate-800 md:pl-6 space-y-3">
              <span className="text-xs text-slate-400 text-center md:text-right">
                View verified solutions, problem stats, and algorithmic progression.
              </span>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-amber-500/10"
              >
                <Code className="w-4 h-4 text-amber-400" />
                <span>Open LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
