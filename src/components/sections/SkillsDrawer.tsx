import { ui, type Language } from "@/data/language";
import { Ellipsis } from "lucide-react";
import type { ReactNode } from "react";
import SideDrawer from "@/components/ui/SideDrawer";

export default function SkillsDrawer({ children, language }: { children: ReactNode; language: Language }) {
  return (
    <SideDrawer
      id="technical-skills"
      title={ui[language].technical}
      triggerLabel={ui[language].showSkills}
      triggerContent={<Ellipsis size={22} aria-hidden="true" />}
      triggerClassName="skills-more"
      closeLabel={ui[language].closeSkills}
    >
      {children}
    </SideDrawer>
  );
}
