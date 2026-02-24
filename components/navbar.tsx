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
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3 shadow-sm" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                <Msz />

                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none border-none bg-transparent"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <div
                    className={`${isMenuOpen ? "block absolute top-full left-0 w-full bg-white border-b border-zinc-200 py-6 px-6 shadow-lg" : "hidden"} md:block md:static md:w-auto md:bg-transparent md:p-0 md:border-none md:shadow-none`}
                    id="navbar-default"
                >
                    <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
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
