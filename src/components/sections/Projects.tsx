import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { opsBoard, projectLabels, projects } from "@/data/projects";
import { pagePath, type Language } from "@/data/language";
import SectionHeading from "@/components/ui/SectionHeading";
import Artwork from "@/components/ui/Artwork";

export default function Projects({ language }: { language: Language }) {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title">
      <SectionHeading id="projects-title">{projectLabels[language].selected}</SectionHeading>
      <div className="project-list">
        {projects.map(({ slug, title, screenshots, copy, featuredTools }) => (
          <article className="project-card" key={slug}>
            <Link href={pagePath(language, { project: slug }) + "#project-introduction"} className="project-card-link">
              <Artwork image={{ src: screenshots[0].image, alt: "" }} className="project-art" sizes="(max-width: 760px) 100vw, 580px" unoptimized />
              <div className="project-summary">
                <div className="project-card-heading">
                  <h3>{title}</h3>
                  <ArrowUpRight className="project-arrow" size={20} aria-hidden="true" />
                </div>
                <p>{copy[language].summary}</p>
                <ul className="skill-list">{featuredTools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            </Link>
          </article>
        ))}
        <article className="project-card" aria-labelledby="opsboard-title">
          <Artwork image={{ src: opsBoard.screenshot, alt: opsBoard.copy[language].screenshotAlt }} className="project-art" sizes="(max-width: 640px) 100vw, (max-width: 1079px) 50vw, 33vw" />
          <div className="project-summary">
            <div className="project-card-heading">
              <h3 id="opsboard-title">{opsBoard.title}</h3>
            </div>
            <p>{opsBoard.copy[language].summary}</p>
            <ul className="skill-list">{opsBoard.featuredTools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            <div className="project-card-actions">
              <a className="button button--outline" href={opsBoard.repository} target="_blank" rel="noopener noreferrer">
                {projectLabels[language].github}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button button--primary" href={opsBoard.demo} target="_blank" rel="noopener noreferrer">
                {opsBoard.copy[language].demoLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
