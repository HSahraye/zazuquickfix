"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/siteContent";
import Link from "next/link";

export default function QuickContact() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Book Mobile Labs Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            For the fastest quote, call or text with your vehicle type, city,
            and a few photos of the interior and exterior.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={contactInfo.phoneHref}
            className="rounded-lg bg-gray-800 p-6 text-center transition hover:bg-gray-700"
          >
            <PhoneIcon className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold text-white">Call or Text</h3>
            <p className="mt-1 text-lg text-gray-300">{contactInfo.phoneDisplay}</p>
          </a>
          <Link
            href={contactInfo.bookPath}
            className="rounded-lg bg-primary p-6 text-center transition hover:bg-primary/90"
          >
            <h3 className="text-xl font-semibold text-white">Book Appointment</h3>
            <p className="mt-1 text-lg text-white">Reserve your mobile detail slot</p>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={contactInfo.bookPath} className="btn-accent px-12 py-4 text-lg">
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 