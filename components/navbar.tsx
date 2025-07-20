"use client";
import React, { useState } from "react";
import Msz from "./Msz";
import Link from "next/link";

const links = [
    { url: "/#podcast", label: "Podcast" },
    { url: "/#industry", label: "Industry" },
    { url: "/#academia", label: "Academia" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Msz />

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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



















//     return (
//         <header
//             className="static top-0 z-50 flex-shrink-0 py-4 bg-zinc-800/80 backdrop-blur-sm border-b border-border md:border-b-0 md:sticky"
//         >
//             <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
//                 <Link href="/" passHref>
//                     <Msz />
//                 </Link>
//                 <Menu />
//             </div>
//         </header>
//     )
// }

// function Menu() {
//     return (
//         <ul
//             className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12"
//             data-cy="navbar-menu"
//         >
//             {links.map((item) => (
//                 <li key={item.url}>
//                     <Link href={item.url} passHref
//                         className={
//                             "py-4 hover:underline text-sm md:text-base font-semibold"
//                         }
//                     >
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }
