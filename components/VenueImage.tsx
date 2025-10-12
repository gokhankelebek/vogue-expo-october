"use client";

import { useState } from "react";

interface VenueImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function VenueImage({
  src,
  fallbackSrc,
  alt,
  className = "",
}: VenueImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img src={imgSrc} alt={alt} className={className} onError={handleError} />
  );
}
