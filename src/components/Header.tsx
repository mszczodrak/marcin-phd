import Link from 'next/link';

const Header = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" }
    ];

    return (
        (<header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-orbitron text-primary">
                    Marcin - msz.ai
                </Link>

                <div className="flex gap-8">
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className="mx-2 relative">
                            <span className="hover:text-secondary transition-colors">
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>)
    );
};

export default Header;