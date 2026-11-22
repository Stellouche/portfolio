import type { Metadata } from "next";
import { pageMetadata } from "@/data/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectGallery from "./ProjectGallery";
import { pagePath, ui, type Language } from "@/data/language";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectLabels, projects } from "@/data/projects";

function findProject(slug: string) {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return project;
}

export function projectMetadata(slug: string, language: Language): Metadata {
  const project = findProject(slug);
  const title = `${project.title} | Stella Petrescu`;
  const description = project.copy[language].summary;
  const cover = project.screenshots[0];
  return pageMetadata({
    language, page: { project: slug }, title, description,
    image: { url: cover.image.src, width: cover.image.width, height: cover.image.height, alt: cover.caption[language] },
  });
}

export default function ProjectPage({ slug, language }: { slug: string; language: Language }) {
  const project = findProject(slug);
  const labels = projectLabels[language];
  const copy = project.copy[language];

  return (
    <div className="site-shell" lang={language}>
      <a className="skip-link" href="#main-content">{ui[language].skip}</a>
      <Header language={language} page={{ project: slug }} />
      <main id="main-content" className="project-page" lang={language} tabIndex={-1}>
        <div className="project-page-navigation">
          <Link className="project-back" href={pagePath(language) + "#projects"}><ArrowLeft size={18} aria-hidden="true" /> {labels.back}</Link>
        </div>
        <header className="project-page-header">
          <h1 id="project-introduction" tabIndex={-1}>{project.title}</h1>
          <p>{copy.introduction}</p>
          <a className="button button--primary" href={project.repository} target="_blank" rel="noopener noreferrer">
            {labels.github} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </header>
        <div className="project-page-overview">
          <section aria-labelledby="project-problem">
            <SectionHeading id="project-problem">{labels.problem}</SectionHeading>
            <p>{copy.problem}</p>
          </section>
          <section aria-labelledby="project-features">
            <SectionHeading id="project-features">{labels.features}</SectionHeading>
            <ul className="project-features">{copy.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </section>
        </div>
        {copy.userExperience && (
          <section className="project-user-experience" aria-labelledby="project-user-experience">
            <SectionHeading id="project-user-experience">{labels.userExperience}</SectionHeading>
            {copy.userExperience.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        )}
        <section aria-labelledby="project-screenshots">
          <SectionHeading id="project-screenshots">{labels.screenshots}</SectionHeading>
          <p className="project-gallery-note">{labels.galleryNote}</p>
          <ProjectGallery language={language} screenshots={project.screenshots.map(({ image, caption }) => ({ image, caption: caption[language] }))} />
        </section>
        <div className="project-page-overview">
          <section aria-labelledby="project-stack">
            <SectionHeading id="project-stack">{labels.stack}</SectionHeading>
            {[{ label: labels.frontend, tools: project.frontend }, { label: labels.backend, tools: project.backend }].map(({ label, tools }) => (
              <div className="project-stack-group" key={label}>
                <h3>{label}</h3>
                <ul className="skill-list">{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            ))}
          </section>
          <section aria-labelledby="project-architecture">
            <SectionHeading id="project-architecture">{labels.architecture}</SectionHeading>
            <p>{copy.architecture}</p>
          </section>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}
