"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { detailingServices, maintenanceServices } from "@/lib/siteContent";

export default function HomeServices() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Mobile Detailing Services Built For Real Bay Area Drivers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Choose the package that matches your vehicle condition and schedule.
            We focus on fast, high-impact interior and exterior cleaning at your
            location.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailingServices.map((service, index) => (
            <motion.div
              key={service}
              className="rounded-xl border border-orange-100 bg-orange-50 p-6 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent">
                <SparklesIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Available as a mobile service at your home, office, or
                apartment parking area.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <div className="flex items-center gap-3">
            <WrenchScrewdriverIcon className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">
              Also Available: Basic Mobile Maintenance
            </h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {maintenanceServices.map((service) => (
              <span
                key={service}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}