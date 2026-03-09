"use client";

import React from "react";
import Msz from "./Msz";

import { SocialIcon } from "./SocialIcon";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export function Footer() {
  const links = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/szczodrak/",
      label: "LinkedIn",
    },
    { icon: FaXTwitter, href: "https://x.com/mszczodrak", label: "X" },
    {
      icon: FaGithub,
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
