import { ui, type Language } from "@/data/language";
import { CodeXml, Database, Monitor, Workflow, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { featuredSkills, frenchSkillGroups, frenchSkills, skillGroups, skillLogos } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillsDrawer from "./SkillsDrawer";

const groupIcons = { languages: CodeXml, databases: Database, tools: Monitor, practices: Workflow };

function SkillLabel({ label, language, fallback: Icon = CodeXml }: { label: string; language: Language; fallback?: LucideIcon }) {
  const logo = skillLogos[label];

  return (
    <>
      {logo ? (
        <span className="technical-skill-logo">
          <Image src={`/images/skills/${logo}.svg`} width={18} height={18} alt="" unoptimized />
        </span>
      ) : (
        <Icon className="technical-skill-icon" size={19} aria-hidden="true" />
      )}
      <span>{language === "fr" ? frenchSkills[label] ?? label : label}</span>
    </>
  );
}

export default function Skills({ language }: { language: Language }) {
  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-title">
      <SectionHeading id="skills-title">{ui[language].skills}</SectionHeading>
      <ul className="featured-skills">
        {featuredSkills.map((label) => (
          <li className="featured-skill" key={label}><SkillLabel language={language} label={label} /></li>
        ))}
        <li className="skills-drawer-entry">
          <SkillsDrawer language={language}>
            {skillGroups.map(({ id, title, items }) => (
              <section className="technical-skills-group" key={id} aria-labelledby={`skill-group-${id}`}>
                <h3 id={`skill-group-${id}`}>{language === "fr" ? frenchSkillGroups[id] : title}</h3>
                <ul className="technical-skills-grid">
                  {items.map((label) => <li key={label}><SkillLabel language={language} label={label} fallback={groupIcons[id]} /></li>)}
                </ul>
              </section>
            ))}
          </SkillsDrawer>
        </li>
      </ul>
    </section>
  );
}
