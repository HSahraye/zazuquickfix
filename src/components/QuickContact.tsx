"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/siteContent";
import Link from "next/link";

export default function QuickContact() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Book Your Mobile Detail?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Choose a package and schedule online. For the fastest quote, send
            photos after booking so we can confirm the right service for your
            vehicle.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={contactInfo.phoneHref}
            className="btn-secondary gap-2 text-center"
          >
            <PhoneIcon className="h-4 w-4 text-white" />
            Call or Text
          </a>
          <Link
            href={contactInfo.bookPath}
            className="btn-primary text-center"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 