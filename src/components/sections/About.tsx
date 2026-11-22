import { ui, type Language } from "@/data/language";
import { artwork, frenchFocusAreas, portfolio, portfolioFrench } from "@/data/portfolio";
import { focusAreas } from "@/data/skills";
import Artwork from "@/components/ui/Artwork";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About({ language }: { language: Language }) {
  const copy = language === "fr" ? portfolioFrench : portfolio;
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className="about">
      <Artwork image={language === "fr" ? { ...artwork.portrait, alt: "Portrait illustré de Stella avec un casque, entourée de fleurs de cerisier" } : artwork.portrait} className="portrait-art" sizes="(max-width: 760px) 260px, (max-width: 1325px) 24vw, 318px" unoptimized />
      <div>
        <SectionHeading id="about-title">{ui[language].about}</SectionHeading>
        <div className="about-copy">
          {copy.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="focus-list">
          {focusAreas.map(({ label, symbol }) => (
            <li key={label}><span aria-hidden="true">{symbol}</span>{language === "fr" ? frenchFocusAreas[label] ?? label : label}</li>
          ))}
        </ul>
      </div>
      <Artwork image={artwork.maple} className="decoration about-maple" sizes="(max-width: 760px) 110px, 140px" />
    </section>
  );
}

