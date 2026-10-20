import Image from "next/image";

const overlays = {
  hero: "bg-[linear-gradient(90deg,#001030_0%,rgba(0,16,48,0.78)_38%,rgba(0,16,48,0.12)_100%)]",
  card: "bg-gradient-to-t from-[#001030]/80 via-[#001030]/5 to-transparent",
  soft: "bg-gradient-to-t from-[#001030]/55 via-transparent to-[#082860]/15",
} as const;

export function BrandImage({
  src,
  alt,
  className = "",
  priority = false,
  tone = "card",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  zoom = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  tone?: keyof typeof overlays;
  sizes?: string;
  zoom?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover saturate-110 contrast-105 ${zoom ? "transition duration-700 ease-out group-hover:scale-105" : ""}`}
      />
      <div className={`pointer-events-none absolute inset-0 ${overlays[tone]}`} />
    </div>
  );
}
