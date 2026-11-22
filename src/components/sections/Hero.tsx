import { ui, type Language } from "@/data/language";
import { Mail } from "lucide-react";
import { artwork, contact, portfolio, portfolioFrench } from "@/data/portfolio";
import Artwork from "@/components/ui/Artwork";
import Button from "@/components/ui/Button";

const socialIconPaths = {
  "GitHub": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.81 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.628-5.475 5.921.429.373.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.292 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  "LinkedIn": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.265 2.371 4.265 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
};

export default function Hero({ language }: { language: Language }) {
  const labels = ui[language];
  const copy = language === "fr" ? portfolioFrench : portfolio;
  return (
    <section id="home" tabIndex={-1} aria-labelledby="hero-title" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{copy.role}</p>
        <h1 id="hero-title">{language === "fr" ? "Bonjour, je suis " : "Hi, I’m "}<span>Stella.</span></h1>
        <p className="hero-intro">{copy.heroIntroduction}</p>
        <div className="hero-actions">
          <Button href="#projects">{labels.projects} <span aria-hidden="true">→</span></Button>
          <Button href="#about" variant="outline">{labels.about}</Button>
        </div>
        <ul className="profile-links" aria-label={labels.social}>
          {contact.profiles.map(({ href, label }) => {
            return (
              <li key={href}>
                <a href={href} aria-label={`${label} (${labels.newTab})`} target="_blank" rel="noopener noreferrer">
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={socialIconPaths[label]} />
                  </svg>
                </a>
              </li>
            );
          })}
          <li>
            <a href={`mailto:${contact.email}`} aria-label={labels.emailStella}>
              <Mail size={21} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <Artwork image={language === "fr" ? { ...artwork.hero, alt: "Illustration de Stella devant son ordinateur avec ses deux chiens" } : artwork.hero} className="hero-art" sizes="(max-width: 760px) 160vw, 100vw" priority unoptimized />
      <Artwork image={artwork.sakura} className="decoration hero-sakura" sizes="(max-width: 575px) 20vw, 115px" />
      <Artwork image={artwork.petals} className="decoration hero-petals" sizes="(max-width: 1500px) 7vw, 105px" />
    </section>
  );
}

