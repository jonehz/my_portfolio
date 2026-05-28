import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function HomePage() {
  return (
    <main className="px-6 md:px-16 lg:px-32">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}