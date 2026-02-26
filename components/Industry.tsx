import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

export interface Feature {
  title: string;
  description: string;
  image?: string;
  visual?: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Refract Systems",
    description:
      "A cyber-physical simulation platform that accelerates embedded systems development through a deterministic 'Shift-Left' digital twin architecture for firmware execution.",
    image: "/images/firmware_studio_visualization_small.avif",
  },
  {
    title: "Figure AI",
    description:
      "Started company's software development infrastructure from scratch and designed the first version of the Humanoid Management Systems.",
    image: "/images/Figure_02_Web.avif",
  },
  {
    title: "Tesla",
    description:
      "Accelerated transition to sustainable energy with industrial (Megapack) and residential (Powerwall) energy storage products as well as wireless vehicle charging.",
    image: "/images/tesla_projects.avif",
  },
  {
    title: "Google Brain Robotics",
    description:
      "Robots playing ping pong, Reinforcement Learning with Model Predictive Control and robotics teleoperation.",
    image: "/images/google_brain_ping_pong.avif",
  },
  {
    title: "Google X (now Intrinsic)",
    description:
      "AI meets Industry 4.0. Building the future of manufacturing with AI and robotics.",
    image: "/images/google_x_instrinsic.avif",
  },
  {
    title: "Google Hardware",
    description: "Nest Thermostat, 3rd Generation and version E.",
    image: "/images/nest_thermostat_3_500x500.avif",
  },
  {
    title: "Essential",
    description:
      "New home operating system Ambient OS - the biggest thing since Android.",
    image: "/images/essential_home_481x300.avif",
  },
  {
    title: "Nest",
    description:
      "Building a conscious home that takes care of people inside and the surrounding environment. Nest Learning Thermostat, Nest Protect, Nest Security and network protocols for smart home: Thread and Weave.",
    image: "/images/nest_home_security.avif",
  },
  {
    title: "Philips",
    description:
      "Helping to build the future of smart city with outdoor lighting products.",
    image: "/images/philips_lighting.avif",
  },
];

const Industry = () => {
  return (
    <section
      id="industry"
      className="bg-white text-zinc-900 py-24 border-t border-zinc-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-zinc-900">
            Industry Experience
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl text-lg font-light">
            A track record of building impactful software and hardware solutions
            at leading technology companies.
          </p>
        </div>

        <div className="grid gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-stretch h-full min-h-[300px]">
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <h3 className="text-2xl font-semibold text-zinc-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 text-base leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className={`${index % 2 === 1 ? "md:order-1" : ""} bg-zinc-50 flex items-center justify-center p-6 md:p-8`}
                  >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                      {feature.visual ? (
                        feature.visual
                      ) : (
                        <Image
                          src={feature.image!}
                          alt={feature.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
