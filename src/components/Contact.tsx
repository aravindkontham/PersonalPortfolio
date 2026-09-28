"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, Download, ExternalLink, RefreshCw, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailService, setEmailService] = useState<"outlook" | "gmail" | "default">("outlook");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const subject = `Opportunity Inquiry from ${formData.name || "Recruiter"}`;
  const body = `Hi Aravind,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;

  // Direct URLs for various email providers
  const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const outlookWebUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    portfolioData.personal.email
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    portfolioData.personal.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyPreparedMessage = () => {
    navigator.clipboard.writeText(body);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#0284c7", "#6366f1"],
    });

    setSubmitted(true);

    // Open target email provider in a new tab
    if (emailService === "outlook") {
      window.open(outlookWebUrl, "_blank");
    } else if (emailService === "gmail") {
      window.open(gmailWebUrl, "_blank");
    } else {
      // Default mail app
      const anchor = document.createElement("a");
      anchor.href = mailtoUrl;
      anchor.click();
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect & Discuss Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Open for Azure Cloud, .NET Backend, and Distributed Systems roles. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you have an upcoming role, an architectural question, or a project collaboration, I&apos;d love to connect.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-mono">Email</div>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-xs font-medium text-slate-200 hover:text-sky-400 transition-colors truncate block"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">Phone</div>
                      <a
                        href={`tel:${portfolioData.personal.phone}`}
                        className="text-xs font-medium text-slate-200 hover:text-sky-400 transition-colors"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Location</div>
                    <div className="text-xs font-medium text-slate-200">{portfolioData.personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Resume Download Button */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below. You can send directly via Outlook, Gmail, or your default mail app.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-slate-800/40 border border-sky-500/30 text-left space-y-5 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Message Ready!</h4>
                      <p className="text-xs text-slate-400">
                        Select which email app you&apos;d like to send from:
                      </p>
                    </div>
                  </div>

                  {/* Provider Quick Launch Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={outlookWebUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-xs font-semibold text-blue-300 transition-all hover:scale-[1.02]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Send via Outlook (Web)
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/30 text-xs font-semibold text-rose-300 transition-all hover:scale-[1.02]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        Send via Gmail (Web)
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={mailtoUrl}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 transition-all hover:scale-[1.02]"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                        Desktop App (Outlook / Mail)
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={copyPreparedMessage}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Copy className="w-3.5 h-3.5 text-sky-400" />
                        {copiedBody ? "Copied to Clipboard!" : "Copy Full Message"}
                      </span>
                      {copiedBody && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                    <span className="text-slate-400">Want to edit your message?</span>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 underline"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Edit details</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Recruiter)"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Message / Role Details</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aravind, I came across your profile and would love to connect regarding an Azure / .NET opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Choose Email Provider */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Send via:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setEmailService("outlook")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          emailService === "outlook"
                            ? "bg-blue-600/20 border-blue-500 text-blue-300 shadow-sm"
                            : "bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        Outlook (Web)
                      </button>
                      <button
                        type="button"
                        onClick={() => setEmailService("gmail")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          emailService === "gmail"
                            ? "bg-rose-600/20 border-rose-500 text-rose-300 shadow-sm"
                            : "bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        Gmail (Web)
                      </button>
                      <button
                        type="button"
                        onClick={() => setEmailService("default")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                          emailService === "default"
                            ? "bg-sky-600/20 border-sky-500 text-sky-300 shadow-sm"
                            : "bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        Desktop App
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Aravind</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
