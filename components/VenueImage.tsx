"use client";

import { useState } from "react";
import Image from "next/image";

interface VenueImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  /** Layout classes for the box: aspect ratio, rounding, width/height. */
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function VenueImage({
  src,
  fallbackSrc,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: VenueImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => {
          if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
}
