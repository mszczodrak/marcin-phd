import Image from "next/image"
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Current = () => {
  return (
    <section id="podcast" className="bg-[rgb(23,2639)] text-white p-8 pb-16">
      <h2 className="text-3xl font-orbitron text-white mb-4">Current</h2>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Link href="https://landmarklessons.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Landmark_Lessons_logo_300x300.webp"
                alt="Landmark Lessons Podcast Cover Art"
                width={300}
                height={300}
                className="rounded-lg shadow-lg mx-auto hover-glow"
              />
            </Link>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Current;