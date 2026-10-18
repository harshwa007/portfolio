import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <InteractiveTerminal />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
