import type React from "react";
import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  "aria-label": string;
  icon: IconType;
}

export function SocialIcon({
  href,
  "aria-label": ariaLabel,
  icon: Icon,
}: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-zinc-900 transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      <Icon className="w-5 h-5 transition-colors" />
    </a>
  );
}
