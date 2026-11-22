"use client";

import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { ui, type Language } from "@/data/language";

export default function ProjectGallery({ screenshots, language }: {
  screenshots: readonly { image: StaticImageData; caption: string }[];
  language: Language;
}) {
  const labels = ui[language];
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const active = screenshots[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + screenshots.length) % screenshots.length);
  }

  return (
    <>
      <div className="project-gallery">
        {screenshots.map(({ image, caption }, position) => (
          <figure key={image.src}>
            <button className="gallery-thumbnail" type="button" aria-haspopup="dialog" aria-label={`${labels.openImage} : ${caption}`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                setIndex(position);
                dialog.current?.showModal();
                close.current?.focus();
              }}>
              <Image src={image} alt="" sizes="(max-width: 760px) 100vw, (max-width: 1220px) 50vw, 600px" />
              <Maximize2 className="gallery-expand" size={18} aria-hidden="true" />
            </button>
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className="gallery-dialog" aria-label={labels.gallery}
        onClose={() => opener.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        <div className="gallery-viewer">
          <header>
            <p aria-live="polite">{active.caption} <span>· {index + 1} / {screenshots.length}</span></p>
            <button ref={close} className="icon-button" type="button" aria-label={labels.closeImage} onClick={() => dialog.current?.close()}><X size={21} aria-hidden="true" /></button>
          </header>
          <div className="gallery-original">
            <Image src={active.image} alt={active.caption} unoptimized />
          </div>
          <div className="gallery-controls">
            <button className="icon-button" type="button" aria-label={labels.previousImage} onClick={() => move(-1)}><ArrowLeft size={21} aria-hidden="true" /></button>
            <button className="icon-button" type="button" aria-label={labels.nextImage} onClick={() => move(1)}><ArrowRight size={21} aria-hidden="true" /></button>
          </div>
        </div>
      </dialog>
    </>
  );
}
