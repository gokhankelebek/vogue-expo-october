import Image from "next/image";

type BoothImageProps = {
  src: string;
  alt: string;
  /** Layout classes for the box: aspect ratio, rounding, width, hover, etc. */
  className?: string;
  /** Responsive sizes hint. Defaults to a 3-up grid layout. */
  sizes?: string;
  /** Set true for above-the-fold / LCP images so they aren't lazy-loaded. */
  priority?: boolean;
};

/**
 * next/image wrapper for content photos. Renders a relative, clipped box
 * (sized by the passed className) with a `fill` image on top, so the
 * framework handles responsive srcset, AVIF/WebP, and lazy-loading.
 */
export default function BoothImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: BoothImageProps) {
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
