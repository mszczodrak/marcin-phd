"use client";

import React, { useState, useEffect } from "react";
import Msz from "./Msz";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
    { url: "/#industry", label: "Industry" },
    { url: "/#academia", label: "Academia" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent py-5"}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                <Msz />

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 text-zinc-400 md:hidden hover:text-zinc-100 transition-colors focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div
                    className={`${isMenuOpen ? "block absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800/50 py-4 px-6" : "hidden"} md:block md:static md:w-auto md:bg-transparent md:p-0 md:border-none`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
