"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For background image

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-0px)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <Image 
        src="/images/hero-background.jpg" // Replace with an actual high-quality image path
        alt="Mobile mechanic working on a car"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div 
        className="relative z-10 container-padding max-w-3xl animate-slide-in-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Affordable Mobile Car Service & Detailing, <br className="hidden sm:inline" />
          <span className="text-primary">Wherever You Are</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-black sm:text-xl">
          ZazuQuickFix brings expert auto repair and premium detailing services directly to your location in Oakland and the Bay Area. Convenience and quality, guaranteed.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://calendly.com/zazuquickfix/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg"
          >
            Book Your Service
          </a>
          <Link href="/services" className="text-lg font-semibold leading-6 text-accent hover:text-primary transition-colors duration-200 ease-in-out">
            View Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>

      {/* Optional: Subtle animation or graphic element */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent -z-1"></div> */}
    </section>
  );
} 