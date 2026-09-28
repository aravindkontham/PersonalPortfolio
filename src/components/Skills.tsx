import { Wrench, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Specialized in enterprise .NET backend engineering, Microsoft BizTalk Server, Azure Integration Services, and scalable API systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <h3 className="font-bold text-base text-white">{group.category}</h3>
                <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                  {group.skills.length} Skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
