import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterSummary from "@/components/RecruiterDrawer";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Profiles from "@/components/Profiles";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <Hero />
      <RecruiterSummary />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Profiles />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
