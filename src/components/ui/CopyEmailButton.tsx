"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export default function CopyEmailButton({ email, labels }: { email: string; labels: { copy: string; copied: string; failed: string } }) {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    setStatus("");
    try {
      await navigator.clipboard.writeText(email);
      setStatus(labels.copied);
    } catch {
      setStatus(labels.failed);
    }
  }

  return (
    <>
      <button className="button button--outline" type="button" onClick={copyEmail}>
        <Copy size={16} aria-hidden="true" /> {labels.copy}
      </button>
      <p className="copy-status" role="status">{status}</p>
    </>
  );
}
