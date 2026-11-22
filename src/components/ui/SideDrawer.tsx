"use client";

import { X } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import "./SideDrawer.css";

type SideDrawerProps = {
  id: string;
  title: string;
  triggerLabel: string;
  triggerContent: ReactNode;
  triggerClassName: string;
  closeLabel: string;
  variant?: "experience";
  headerDetails?: ReactNode;
  children: ReactNode;
};

export default function SideDrawer({
  id, title, triggerLabel, triggerContent, triggerClassName, closeLabel, variant, headerDetails, children,
}: SideDrawerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function openDrawer() {
    const panel = dialog.current;
    if (!panel || panel.open) return;
    panel.showModal();
    setOpen(true);
    closeButton.current?.focus();
  }

  function closeDrawer() {
    dialog.current?.close();
  }

  return (
    <>
      <button
        ref={trigger}
        className={triggerClassName}
        type="button"
        aria-label={triggerLabel}
        aria-haspopup="dialog"
        aria-controls={id}
        aria-expanded={open}
        onClick={openDrawer}
      >
        {triggerContent}
      </button>
      <dialog
        ref={dialog}
        id={id}
        data-side-drawer={variant ?? "skills"}
        aria-labelledby={`${id}-title`}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDrawer();
        }}
      >
        <div data-drawer-panel>
          <header data-drawer-header>
            <div data-drawer-heading>
              <h2 id={`${id}-title`}>{title}</h2>
              {headerDetails}
            </div>
            <button ref={closeButton} data-drawer-close type="button" aria-label={closeLabel} onClick={closeDrawer}>
              <X size={22} aria-hidden="true" />
            </button>
          </header>
          <div data-drawer-content>{children}</div>
        </div>
      </dialog>
    </>
  );
}
