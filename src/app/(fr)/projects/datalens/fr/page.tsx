import ProjectPage, { projectMetadata } from "@/components/sections/ProjectPage";

export const metadata = projectMetadata("datalens", "fr");

export default function Page() {
  return <ProjectPage slug="datalens" language="fr" />;
}
