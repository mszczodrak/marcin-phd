import Link from "next/link";
import Msz from "./Msz";

const Header = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/#industry", label: "Industry" },
    { href: "/#academia", label: "Academia" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-800/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between text-white">
        <Msz />
        <div className="flex gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="mx-2 relative text-white">
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
