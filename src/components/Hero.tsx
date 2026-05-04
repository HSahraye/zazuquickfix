"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/siteContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden text-white">
      <Image
        src="/images/hero-background.jpg"
        alt="Mobile Labs detailing service"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl container-padding py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent">
              Oakland & Bay Area Mobile Detailing
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Bay Area Mobile Car Wash & Detailing at Your Door
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/95 sm:text-xl">
              Mobile Labs brings exterior washes, interior detailing, pet hair
              cleanup, stain treatment, and full mobile detail packages directly
              to your home, office, apartment, or driveway.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactInfo.bookPath} className="btn-primary text-center">
                Book an Appointment
              </Link>
              <a
                href={contactInfo.phoneHref}
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Call or Text
              </a>
            </div>

            <p className="mt-5 text-sm text-white/90">
              Mobile service • Simple packages • Text photos for a faster quote
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-gray-900 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl">
            <h2 className="text-xl font-semibold">Choose Your Detail Level</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:border-primary/40 hover:bg-blue-50/40">
                <p className="font-semibold">Quick Wash</p>
                <p className="mt-1 text-sm text-gray-600">
                  Light maintenance clean with exterior wash + quick interior
                  vacuum.
                </p>
              </div>
              <div className="rounded-lg border border-primary/30 bg-blue-50 p-4 transition duration-200 hover:border-primary/60 hover:shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Full Detail</p>
                  <span className="rounded-full bg-accent px-2 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Best for most cars. Inside-and-out refresh in one visit.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 transition duration-200 hover:border-primary/40 hover:bg-blue-50/40">
                <p className="font-semibold">Deep Reset</p>
                <p className="mt-1 text-sm text-gray-600">
                  For pet hair, stains, odors, family cars, and neglected
                  interiors.
                </p>
              </div>
            </div>
            <Link href="/services" className="mt-5 inline-block btn-primary">
              Compare Packages
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}