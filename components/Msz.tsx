import Link from "next/link";

const Msz = () => {
    return (
        <div>
            <Link
                href="/"
                className="text-xl font-medium font-sans text-zinc-100 hover:text-zinc-400 transition-colors duration-300 tracking-tight no-underline"
            >
                marcin.phd
            </Link>
        </div>
    );
}

export default Msz;