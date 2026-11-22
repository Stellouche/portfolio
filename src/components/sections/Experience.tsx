import workspaceImage from "../../../public/images/experience-workspace.png";
import Artwork from "@/components/ui/Artwork";
import { ui, type Language } from "@/data/language";
import { experienceFrench } from "@/data/experience-fr";
import { ArrowUpRight, CalendarDays, CodeXml, MapPin } from "lucide-react";
import Image from "next/image";
import { experience, experienceHighlight } from "@/data/experience";
import { skillLogos } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SideDrawer from "@/components/ui/SideDrawer";
import type { ExperienceEntry } from "@/types/portfolio";

function ExperiencePeriod({ start, end, language }: Pick<ExperienceEntry, "start" | "end"> & { language: Language }) {
  const format = (period: ExperienceEntry["start"]) => language === "fr"
    ? new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(period.date + "-01T00:00:00Z"))
    : period.label;
  return <><time dateTime={start.date}>{format(start)}</time> – {end ? <time dateTime={end.date}>{format(end)}</time> : ui[language].present}</>;
}

export default function Experience({ language }: { language: Language }) {
  const labels = ui[language];
  const entries = language === "fr"
    ? experience.map((entry) => ({ ...entry, ...experienceFrench[entry.start.date], engagement: entry.engagement === "Apprenticeship" ? "Alternance" : "Freelance" }))
    : experience;
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title">
      <SectionHeading id="experience-title">{labels.experience}</SectionHeading>
      <div className="experience-layout">
        <div className="experience-history">
          <p className="experience-highlight">{language === "fr" ? "Plus de 3,5 ans d’expérience" : experienceHighlight}</p>
          <ol className="timeline">
            {entries.map(({ title, company, engagement, start, end, location, introduction, responsibilities, tools }) => (
              <li className="timeline-entry" key={start.date}>
                <h3>{title}</h3>
                <p>{company} · {engagement}</p>
                <p><ExperiencePeriod language={language} start={start} end={end} /></p>
                <SideDrawer
                  id={`experience-${start.date}`}
                  title={title}
                  triggerLabel={labels.details + ": " + title}
                  triggerClassName="experience-trigger"
                  triggerContent={<>{labels.details} <ArrowUpRight size={14} aria-hidden="true" /></>}
                  closeLabel={labels.closeExperience}
                  variant="experience"
                  headerDetails={(
                    <div className="experience-context">
                      <p className="experience-company">{company} · {engagement}</p>
                      <ul className="experience-facts">
                        <li><CalendarDays size={16} aria-hidden="true" /><span><ExperiencePeriod language={language} start={start} end={end} /></span></li>
                        <li><MapPin size={16} aria-hidden="true" /><span>{location}</span></li>
                      </ul>
                    </div>
                  )}
                >
                  <p className="experience-intro">{introduction}</p>
                  <section className="experience-detail-group" aria-labelledby={`experience-responsibilities-${start.date}`}>
                    <h3 id={`experience-responsibilities-${start.date}`}>{labels.responsibilities}</h3>
                    <ul className="experience-responsibilities">
                      {responsibilities.map((responsibility) => <li key={responsibility}><span>{responsibility}</span></li>)}
                    </ul>
                  </section>
                  <section className="experience-detail-group" aria-labelledby={`experience-tools-${start.date}`}>
                    <h3 id={`experience-tools-${start.date}`}>{labels.tools}</h3>
                    <ul className="experience-tools">
                      {tools.map((tool) => {
                        const logo = skillLogos[tool];
                        return (
                          <li key={tool}>
                            {logo ? (
                              <span className="technical-skill-logo">
                                <Image src={`/images/skills/${logo}.svg`} width={18} height={18} alt="" unoptimized />
                              </span>
                            ) : <CodeXml size={17} aria-hidden="true" />}
                            <span>{tool}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </SideDrawer>
              </li>
            ))}
          </ol>
        </div>
        <Artwork
          image={{ src: workspaceImage, alt: "" }}
          className="experience-art"
          sizes="(max-width: 550px) 94vw, (max-width: 899px) 510px, (max-width: 1300px) 48vw, 630px"
        />
      </div>
    </section>
  );
}
