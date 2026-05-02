"use client";

import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/siteContent";

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
            Need A Quote Fast?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Text photos for the fastest estimate, or submit the quote form so we
            can match the right package to your vehicle.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={contactInfo.smsHref}
            className="rounded-lg bg-gray-800 p-6 text-center transition hover:bg-gray-700"
          >
            <PhoneIcon className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold text-white">Call Us</h3>
            <p className="mt-1 text-lg text-gray-300">{contactInfo.phoneDisplay}</p>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-lg bg-gray-800 p-6 text-center transition hover:bg-gray-700"
          >
            <EnvelopeIcon className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="text-xl font-semibold text-white">Email Us</h3>
            <p className="mt-1 text-lg text-gray-300">{contactInfo.email}</p>
          </a>
          <Link
            href="/book"
            className="rounded-lg bg-primary p-6 text-center transition hover:bg-primary/90"
          >
            <h3 className="text-xl font-semibold text-white">Get Quote Form</h3>
            <p className="mt-1 text-lg text-white">Share details and photos</p>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={contactInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-12 py-4 text-lg"
          >
            Book on Calendly
          </a>
        </motion.div>
      </div>
    </section>
  );
} 