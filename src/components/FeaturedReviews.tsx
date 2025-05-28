"use client";

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const reviews = [
  {
    id: 1,
    name: 'Sarah L. - Oakland',
    avatar: '/images/avatars/avatar-1.jpg', // Replace with actual avatar paths
    rating: 5,
    quote: "ZazuQuickFix saved my day! My car wouldn't start, and they came to my office within an hour. Super professional, fixed it quickly, and the price was very reasonable. Highly recommend!"
  },
  {
    id: 2,
    name: 'Mike B. - Berkeley',
    avatar: '/images/avatars/avatar-2.jpg',
    rating: 5,
    quote: "Got a full detail and my car looks brand new. The attention to detail was incredible. They even got out some old coffee stains I thought were permanent. Will definitely use them again."
  },
  {
    id: 3,
    name: 'Jessica P. - Alameda',
    avatar: '/images/avatars/avatar-3.jpg',
    rating: 5,
    quote: "So convenient having them come to my home for an oil change and brake check. The mechanic was friendly and explained everything clearly. Top-notch service!"
  },
];

export default function FeaturedReviews() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Trusted by Your Neighbors</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied customers in Oakland and the Bay Area are saying about ZazuQuickFix.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center mb-4">
                {/* Placeholder for avatar image if you add them */}
                {/* <img className="h-12 w-12 rounded-full mr-4" src={review.avatar} alt={review.name} /> */}
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed flex-grow">
                <p>&ldquo;{review.quote}&rdquo;</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 