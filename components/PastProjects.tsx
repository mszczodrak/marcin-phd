import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  link: string;
  logo: string;
}

const projects: Project[] = [
  {
    title: "Landmark Lessons",
    description:
      "A podcast deconstructing pivotal moments and influential people that define entrepreneurial journeys. Extracting actionable insights from turning points that matter.",
    link: "https://landmarklessons.com",
    logo: "/images/Landmark_Lessons_logo_300x300.avif",
  },
  {
    title: "Sauver",
    description:
      "An open-source, agentic defense layer for the inbox. Using Model Context Protocol (MCP) to identify and neutralize AI-generated email slop.",
    link: "https://sauver.org",
    logo: "/images/sauver_logo.svg",
  },
  {
    title: "Proof Partners",
    description:
      "A Silicon Valley-based engineering group turning vision into execution for high-growth companies with production-ready systems.",
    link: "https://proof.partners",
    logo: "/images/ProofPartnersLogo.avif",
  },
];

const PastProjects = () => {
  return (
    <section
      id="past-projects"
      className="bg-transparent text-zinc-900 py-24 border-t border-zinc-100/50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-zinc-900">
            Previous Ventures
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl text-lg font-light">
            A selection of past projects and side ventures. Today, my focus is 100% dedicated to building the future of simulation at Refract Systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block no-underline"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50 flex items-center justify-center">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={48}
                      height={48}
                      className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 tracking-tight mb-2 flex items-center gap-2">
                    {project.title}
                    <svg className="opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
