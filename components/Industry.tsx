import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


const features: {
  title: string
  description: string
  image?: string
  visual?: React.ReactNode
}[] = [
    {
      title: "Distributed Intelligence",
      description: "The Nervous System of Autonomy. We architect the distributed communication layers for Humanoids, Swarms, and Connected Fleets.",
      visual: (
        <div className="w-full h-full bg-[#1e1e1e] p-4 font-mono text-xs md:text-sm leading-relaxed overflow-hidden flex flex-col">
          <div className="flex gap-2 mb-3 opacity-50">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-zinc-300">
            <div><span className="text-green-400">{">"}</span>init_sequence --force</div>
            <div><span className="text-green-400">{">"}</span>checking bus contention... 0.02ms</div>
            <div><span className="text-green-400">{">"}</span>syncing nodes [1..128]... <span className="text-green-400">OK</span></div>
            <div><span className="text-green-400">{">"}</span>latency check... <span className="text-green-400">PASS</span></div>
            <div><span className="text-green-400">{">"}</span><span className="animate-pulse">_</span></div>
          </div>
        </div>
      ),
    },
    {
      title: "Figure AI",
      description: "Started company's software development infrastructure from scratch and designed the first version of the Humanoid Management Systems.",
      image:
        "/images/Figure_02_Web.webp",
    },
    {
      title: "Tesla",
      description: "Accelerated transition to sustainable energy with industrial (Megapack) and \
                  residential (Powerwall) energy storage products as well as witeless vehicle charging.",
      image:
        "/images/tesla_projects.jpeg",
    },
    {
      title: "Google Brain Robotics",
      description: "Robots playing ping pong, Reinforcement Learning with Model Predictive Control and \
                robotics teleoperation.",
      image:
        "/images/google_brain_ping_pong.webp",
    },
    {
      title: "Google X (now Instrinsic)",
      description: "AI meets Indystry 4.0. Building the future of manufacturing with AI and robotics.",
      image:
        "/images/google_x_instrinsic.webp",
    },
    {
      title: "Google Hardware",
      description: "Nest Thermostat, 3rd Generation and version E.",
      image:
        "/images/nest_thermostat_3_500x500.webp",
    },
    {
      title: "Essential",
      description: "New home operating system Ambient OS - the biggest thing since Android.",
      image:
        "/images/essential_home_481x300.webp",
    },
    {
      title: "Nest",
      description: "Building a conscious home that takes care of people inside and the surrounding environment. \
                Nest Learning Thermostat, Nest Protect, Nest Security and network protocols for smart home: Thread and Weave.",
      image:
        "/images/nest_home_security.webp",
    },
    {
      title: "Philips",
      description: "Helping to build the future of smart city with outdoor ligting products.",
      image:
        "/images/philips_lighting.jpg",
    },
  ]

const Industry = () => {
  return (
    <section id="industry" className="bg-zinc-900 text-white p-8">
      <h2 className="text-3xl font-orbitron text-white mb-4">Industry</h2>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="pb-0">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-zinc-300">{feature.description}</p>
                  </div>
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      {feature.visual ? (
                        feature.visual
                      ) : (
                        <Image
                          src={feature.image!}
                          alt={feature.title}
                          fill
                          className="object-cover"
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
