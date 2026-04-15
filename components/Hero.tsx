"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-transparent pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/20 via-transparent to-transparent" />

      <div className="relative z-10 container px-6 md:px-12 lg:px-24 mx-auto flex flex-col items-start justify-center">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-medium tracking-tighter text-zinc-900 leading-[1.1]">
              Notice, Iterate, Simplify. <br className="hidden md:block" />
              <span className="text-zinc-400">
                With unconditional love for customers.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light max-w-2xl leading-relaxed">
              Passionate software engineer building innovative solutions that
              scale, perform, and make a tangible difference in the real world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 flex items-center gap-6"
          >
            <Link
              href="#industry"
              className="group inline-flex items-center gap-2 text-zinc-900 font-medium text-sm sm:text-base border border-zinc-200 bg-white hover:bg-zinc-50 px-6 py-3 rounded-full shadow-sm transition-all"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
