import Image from "next/image";
import type { Artwork as ArtworkData } from "@/types/portfolio";

export default function Artwork({ image, className, sizes, priority = false, unoptimized = false }: {
  image: ArtworkData;
  className: string;
  sizes: string;
  priority?: boolean;
  unoptimized?: boolean;
}) {
  return (
    <div className={className}>
      <Image src={image.src} alt={image.alt} fill sizes={unoptimized ? undefined : sizes} unoptimized={unoptimized} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} />
    </div>
  );
}

