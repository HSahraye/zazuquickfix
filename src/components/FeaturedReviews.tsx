"use client";

import { motion } from "framer-motion";

const customerOutcomes = [
  {
    id: 1,
    title: "Dirty interiors",
    quote: "High-traffic daily drivers that need a full interior reset.",
  },
  {
    id: 2,
    title: "Pet hair",
    quote: "Fur buildup in seats, carpets, and trunk areas.",
  },
  {
    id: 3,
    title: "Coffee stains",
    quote: "Stain treatment for seats and upholstery touch points.",
  },
  {
    id: 4,
    title: "Family SUVs",
    quote: "Interior cleanup packages for high-use family vehicles.",
  },
  {
    id: 5,
    title: "Rideshare cleaning",
    quote: "Fast turnarounds between shifts and weekly resets.",
  },
  {
    id: 6,
    title: "Headlight restoration",
    quote: "Cloudy headlights polished for a cleaner front-end look.",
  },
];

export default function FeaturedReviews() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Customers Book Us For
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Common detailing needs we handle across Oakland and the Bay Area.
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