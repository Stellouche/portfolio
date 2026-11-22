import type { ReactNode } from "react";

export default function Button({ href, children, variant = "primary", download }: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  download?: boolean;
}) {
  return <a className={`button button--${variant}`} href={href} download={download}>{children}</a>;
}

