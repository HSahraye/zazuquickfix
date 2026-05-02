"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { contactInfo, trustBadges } from "@/lib/siteContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden text-center text-white">
      <Image
        src="/images/hero-background.jpg"
        alt="Clean vehicle after mobile detailing service"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div
        className="relative z-10 max-w-4xl container-padding"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Bay Area Mobile Car Wash & Detailing, Wherever Your Car Is
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white sm:text-xl">
          ZazuQuickFix brings professional car washing and interior detailing
          to your home, office, apartment, or driveway. From quick exterior
          washes to deep interior resets, we make your car feel clean again
          without the wait at a shop.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contactInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg"
          >
            Book Mobile Detail
          </a>
          <a
            href={contactInfo.smsHref}
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
          >
            Text Photos for Quote
          </a>
          <Link
            href="/services"
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-gray-100"
          >
            View Services
          </Link>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="rounded-full border border-white/40 bg-black/35 px-4 py-2 text-white"
            >
              {badge}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}