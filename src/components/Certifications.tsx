import { Award, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-[#090e1a]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            Accreditation & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Validated cloud and AI architecture proficiencies from Microsoft and Google. Click any credential to verify authenticity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1.5 shadow-xl group overflow-hidden"
            >
              {/* Top ambient color glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.badgeColor} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
              />

              <div>
                {/* Issuer Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                      cert.issuer === "Microsoft"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.status}
                  </span>
                </div>

                {/* Cert Name */}
                <h3 className="font-bold text-base text-white group-hover:text-sky-300 transition-colors leading-snug mb-3">
                  {cert.name}
                </h3>
              </div>

              <div>
                {/* Validity Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Verified</span>
                  </span>
                  <span>{cert.validity}</span>
                </div>

                {/* Direct Verification Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800/70 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700/60 hover:border-sky-500/40 text-xs font-semibold transition-all group-hover:border-sky-500/30 shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
