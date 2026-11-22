import type { ReactNode } from "react";

export default function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={id} className="section-heading">{children}</h2>;
}

