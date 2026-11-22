import type { ReactNode } from "react";
import DocumentLayout from "@/components/layout/DocumentLayout";
import { siteMetadata } from "@/data/metadata";

export const metadata = siteMetadata;

export default function Layout({ children }: { children: ReactNode }) {
  return <DocumentLayout language="fr">{children}</DocumentLayout>;
}
