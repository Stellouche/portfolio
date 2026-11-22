import ProjectPage, { projectMetadata } from "@/components/sections/ProjectPage";

export const metadata = projectMetadata("datalens", "en");

export default function Page() {
  return <ProjectPage slug="datalens" language="en" />;
}
