"use client";

import Image from "next/image"
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const currentProjects = [
  {
    title: "Landmark Lessons",
    description: "The podcast that deconstructs the pivotal moments and influential people that define an entrepreneurial journey.",
    image: "/images/Landmark_Lessons_logo_300x300.webp",
    link: "https://landmarklessons.com",
  },
  {
    title: "Proof Partners",
    description: "A venture studio building the future of AI.",
    image: "/images/ProofPartnersLogo.webp",
    link: "https://proof.partners",
  },
  {
    title: "VoxQuery",
    description: "Voice-enabled surveying for rapid data collection and analysis.",
    image: "/images/file_audio_icon_white.webp",
    link: "https://voxquery.com",
  },
  {
    title: "Firmware Studio",
    description: "Digital-Twin for Cyber-Physical Systems.",
    image: "/images/firmware_studio_square.webp",
    link: "https://firmware.studio/",
  },
];

const Current = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="current" className="bg-[rgb(23,26,39)] text-white p-8 pb-16">
      <h2 className="text-3xl font-orbitron text-white mb-4">Current</h2>
      <div className="max-w-5xl mx-auto px-8">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {currentProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-primary/80 transition-colors h-full">
                      <CardContent className="flex flex-col items-center justify-start text-center p-6 gap-4 h-full">
                        <Image src={project.image} alt={project.title} width={150} height={150} className="rounded-lg shadow-lg" />
                        <h3 className="text-2xl font-bold text-white hover-lime-scale">{project.title}</h3>
                        <p className="text-zinc-300 flex-grow">{project.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Current;