import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import AnimatedTerminal, { TERMINAL_SEQUENCE } from "./AnimatedTerminal";

interface Product {
  title: string;
  description: string;
  link: string;
  logo: string;
  visual?: React.ReactNode;
}

const products: Product[] = [
  {
    title: "Firmware Studio",
    description:
      "A comprehensive digital twin platform that integrates Virtmcu with physics engines and cloud-based CI/CD for accelerated firmware development.",
    link: "https://firmware.studio",
    logo: "/images/firmware_studio_logo.avif",
    visual: (
      <Image
        src="/images/firmware_studio_visualization.avif"
        alt="Firmware Studio Visualization"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
      />
    ),
  },
  {
    title: "VirtMCU",
    description:
      "A high-performance simulation engine enabling deterministic execution of embedded platforms with native speed.",
    link: "https://virtmcu.com",
    logo: "/images/virtmcu_logo.svg",
    visual: (
      <AnimatedTerminal 
        sequence={TERMINAL_SEQUENCE} 
        title="virtmcu — simulation-log" 
        className="w-full h-full flex flex-col border-none rounded-none shadow-none text-xs" 
      />
    ),
  },
];

const RefractSystems = () => {
  return (
    <section
      id="refract-systems"
      className="bg-white text-zinc-900 py-24"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/images/firmware_studio_logo.avif" 
                alt="Refract Systems" 
                width={48} 
                height={48}
                className="rounded-lg"
              />
              <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-zinc-900">
                Refract Systems
              </h2>
            </div>
            <p className="text-zinc-500 max-w-2xl text-lg font-light">
              Building the future of cyber-physical systems development through high-fidelity digital twins and deterministic simulation.
            </p>
          </div>
          <a 
            href="https://refractsystems.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-600 transition-colors font-light text-sm flex items-center gap-1"
          >
            Visit refractsystems.com 
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>

        <div className="grid gap-12">
          {products.map((product, index) => (
            <a 
              key={index} 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block no-underline"
            >
              <Card className="bg-white border border-zinc-200 shadow-sm group-hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 items-stretch h-full min-h-[400px]">
                    <div
                      className={`p-8 md:p-12 flex flex-col justify-center space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}
                    >
                      <div className="mb-2 relative w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-zinc-100 bg-zinc-50 flex items-center justify-center">
                        <Image
                          src={product.logo}
                          alt={product.title}
                          width={64}
                          height={64}
                          className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
                        {product.title}
                        <svg className="opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </h3>
                      <p className="text-zinc-600 text-base leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>
                    <div
                      className={`${index % 2 === 1 ? "md:order-1" : ""} bg-[#0d1117] flex items-center justify-center p-0 md:p-0 overflow-hidden relative`}
                    >
                      <div className="w-full h-full absolute inset-0">
                        {product.visual}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefractSystems;
