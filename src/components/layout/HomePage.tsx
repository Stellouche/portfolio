import { ui, type Language } from "@/data/language";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage({ language }: { language: Language }) {
  return (
    <div className="site-shell" lang={language}>
      <a className="skip-link" href="#main-content">{ui[language].skip}</a>
      <Header language={language} page="home" />
      <main id="main-content" tabIndex={-1}>
        <Hero language={language} />
        <div className="content">
          <About language={language} />
          <Skills language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}

