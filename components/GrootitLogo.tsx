import Image from "next/image";

interface GrootitLogoProps {
  variant?: "default" | "light";
  className?: string;
}

export function GrootitLogo({
  variant = "default",
  className = "",
}: GrootitLogoProps) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/grootit-logo.png"
        alt="GROOTIT"
        width={148}
        height={36}
        priority
        className={`h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-8 ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </span>
  );
}
