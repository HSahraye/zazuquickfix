"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { packageCards } from "@/lib/siteContent";

export default function HomeServices() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Car Wash & Detailing Packages
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Choose the package that matches your vehicle condition and schedule.
            We focus on fast, high-impact interior and exterior cleaning at your
            location.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packageCards.map((service, index) => (
            <motion.div
              key={service.name}
              className="rounded-xl border border-orange-100 bg-orange-50 p-6 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{service.price}</p>
              <p className="mt-2 text-sm text-gray-600">
                {service.includes}
              </p>
              <a
                href={service.bookingPath}
                className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-primary">
            View Package Details
          </Link>
        </div>
      </div>
    </section>
  );
}