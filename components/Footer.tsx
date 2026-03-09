"use client";

import React from "react";
import Msz from "./Msz";

import { SocialIcon } from "./SocialIcon";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const links = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/szczodrak/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/mszczodrak", label: "X" },
    {
      icon: Github,
      href: "https://github.com/mszczodrak",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <Msz />

        <div className="flex gap-8">
          {links.map(({ icon, href, label }) => (
            <SocialIcon key={href} href={href} aria-label={label} icon={icon} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-light">
        <p>
          &copy; {new Date().getFullYear()} Marcin Szczodrak. All rights
          reserved.
        </p>
      </div>
      <a href="/llms.txt" className="hidden" aria-label="llms" />
    </footer>
  );
}
