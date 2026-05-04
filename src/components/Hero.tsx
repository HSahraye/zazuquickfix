"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { contactInfo, trustBadges } from "@/lib/siteContent";

export default function Hero() {
  return (
    <section className="relative flex min-h-[82svh] items-center overflow-hidden text-white">
      <Image
        src="/images/hero-background.jpg"
        alt="Mobile Labs detailing service"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl container-padding py-28"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="mx-auto max-w-5xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Bay Area Mobile Car Wash & Detailing at Your Door
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-8 text-white sm:text-xl">
          Mobile Labs brings professional exterior washes, interior detailing,
          pet hair removal, stain treatment, and full mobile detail packages
          directly to your home, office, apartment, or driveway across Oakland
          and the Bay Area.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={contactInfo.phoneHref}
            className="btn-primary px-10 py-4 text-lg"
          >
            Call or Text
          </a>
          <Link
            href={contactInfo.bookPath}
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Book an Appointment
          </Link>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white/95 p-6 text-gray-900">
            <h2 className="text-xl font-semibold text-gray-900">
              Popular Mobile Detail Packages
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Quick Wash</span>
                <span className="font-semibold">From $79</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Full Detail</span>
                <span className="font-semibold">From $199</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Deep Reset</span>
                <span className="font-semibold">From $299+</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Final price may vary by vehicle size, condition, pet hair, stains,
              and location.
            </p>
            <a
              href={contactInfo.smsHref}
              className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
            >
              Text photos for the fastest quote
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 self-start md:mt-2">
            {trustBadges.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg bg-black/30 px-4 py-3 text-sm"
              >
                <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}