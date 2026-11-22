import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectLabels, projects } from "@/data/projects";
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
      </div>
    </section>
  );
}
