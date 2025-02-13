import Link from 'next/link';

const Header = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between text-white">
                <Link 
                    href="/" 
                    className="text-xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#00f5ff] via-[#fd00ff80] to-[#fb00ff] hover:opacity-80 transition-opacity duration-300 animate-text-shine"
                >
                    msz.ai
                </Link>

                <div className="flex gap-8">
                    {links.map(({ href, label }) => (
                        <Link 
                            key={href} 
                            href={href} 
                            className="mx-2 relative text-white"
                        >
                            <span className="hover:text-[#00f5ff] hover:drop-shadow-[0_0_0.3rem_#00f5ff70] transition-all duration-300">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;