"use client";

import { motion } from "framer-motion";

const customerOutcomes = [
  {
    id: 1,
    title: "Dirty daily drivers",
    quote:
      "Vacuuming, wipe-downs, and interior refreshes for cars used every day.",
  },
  {
    id: 2,
    title: "Pet hair",
    quote:
      "Extra attention for seats, carpets, cargo areas, and hard-to-reach fabric.",
  },
  {
    id: 3,
    title: "Coffee and drink stains",
    quote:
      "Targeted stain attention for seats, carpets, and high-contact areas.",
  },
  {
    id: 4,
    title: "Family SUVs",
    quote: "Cleanup for crumbs, dust, spills, and high-use interiors.",
  },
  {
    id: 5,
    title: "Rideshare cleaning",
    quote: "Refresh the cabin before or after driving shifts.",
  },
  {
    id: 6,
    title: "Headlight restoration",
    quote: "Improve the look of cloudy headlights with restoration as an add-on.",
  },
];

export default function FeaturedReviews() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What We Help With
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Common reasons Bay Area drivers book Mobile Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {customerOutcomes.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <blockquote className="text-gray-600 italic leading-relaxed flex-grow">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 