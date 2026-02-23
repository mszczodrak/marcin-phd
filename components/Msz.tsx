import Link from "next/link";

const Msz = () => {
    return (
        <div>
            <Link
                href="/"
                className="text-xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300 hover:opacity-80 transition-opacity duration-300 animate-text-shine"
            >
                marcin.phd
            </Link>
        </div>
    );
}

export default Msz;