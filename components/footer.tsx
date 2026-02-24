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
        <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
                <Msz />

                <div className="flex gap-8">
                    {links.map(({ icon, href, label }) => (
                        <SocialIcon
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            icon={React.createElement(icon, { className: "w-5 h-5 text-zinc-400 hover:text-zinc-100 transition-colors" })}
                        />
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-light">
                <p>&copy; {new Date().getFullYear()} Marcin Szczodrak. All rights reserved.</p>
            </div>
            <a href="/llms.txt" className="hidden" aria-label="llms" />
        </footer>
    );
};
