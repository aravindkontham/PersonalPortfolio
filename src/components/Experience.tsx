import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Proven track record of engineering cloud-native backend services and real-time enterprise integrations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {portfolioData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col sm:flex-row items-center">
                  {/* Timeline central dot */}
                  <div className="absolute left-4 sm:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#080c14] border-2 border-sky-400 shadow-lg shadow-sky-500/50 z-10 hidden sm:block">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 m-auto mt-0.5"></div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`w-full sm:w-[calc(50%-28px)] ${
                      isEven ? "sm:mr-auto sm:text-left" : "sm:ml-auto sm:text-left"
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 shadow-xl transition-all hover:-translate-y-1">
                      {/* Company & Role */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="text-sm font-medium text-sky-300 mb-3 flex items-center gap-1.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-light">
                        {exp.summary}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
