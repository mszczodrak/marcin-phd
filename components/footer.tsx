"use client";

import React from "react";
import Msz from "./Msz";

import { SocialIcon } from "./social-icon"
import { XIcon } from "./icons/x-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"

export function Footer() {
    const links = [
        { icon: LinkedInIcon, href: "https://www.linkedin.com/in/szczodrak/", label: "Home" },
        { icon: XIcon, href: "https://x.com/mszczodrak", label: "X" },
    ];

    return (
        <footer className="z-50 bg-black backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between text-white">
                 <Msz />

                <div className="flex gap-8">
                    {links.map(({ icon, href, label }) => (
                        <SocialIcon
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            icon={React.createElement(icon, { className: "w-6 h-6" })}
                        />
                    ))}
                </div>
            </nav>
        </footer>
    );
};

