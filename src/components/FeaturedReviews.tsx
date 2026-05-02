"use client";

import { motion } from "framer-motion";

const customerOutcomes = [
  {
    id: 1,
    title: "Convenience-first scheduling",
    quote:
      "Most customers choose us because we come to their home, office, or apartment parking area.",
  },
  {
    id: 2,
    title: "Clear package expectations",
    quote:
      "We use straightforward package descriptions and quote-first pricing so there are no surprises.",
  },
  {
    id: 3,
    title: "Practical detailing results",
    quote:
      "From family SUVs to rideshare vehicles, we focus on visible interior and exterior improvements.",
  },
];

export default function FeaturedReviews() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Customers Book ZazuQuickFix
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Built around convenience, clear pricing, and results-focused
            detailing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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