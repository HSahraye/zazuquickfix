"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const servicesCategories = [
  {
    name: 'Auto Repair Services',
    href: '/services#mechanic',
    icon: WrenchScrewdriverIcon,
    color: 'text-primary',
    bgColor: 'bg-blue-50',
    hoverBgColor: 'hover:bg-blue-100',
    description: 'Expert mobile mechanic services, from oil changes and brakes to diagnostics and engine work, all at your convenience.',
    cta: 'Explore Repair Services'
  },
  {
    name: 'Car Wash & Detailing',
    href: '/services#detailing',
    icon: SparklesIcon,
    color: 'text-accent',
    bgColor: 'bg-orange-50',
    hoverBgColor: 'hover:bg-orange-100',
    description: 'Revitalize your vehicle with our comprehensive detailing packages, including interior deep clean, exterior wash, and headlight restoration.',
    cta: 'Discover Detailing Options'
  },
];

export default function HomeServices() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Your Car, Expertly Cared For</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Whether it's a crucial repair or a meticulous detail, ZazuQuickFix brings professional automotive care directly to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {servicesCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 ${category.bgColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <category.icon className={`h-12 w-12 mr-4 shrink-0 ${category.color}`} aria-hidden="true" />
                  <h3 className={`text-2xl font-semibold ${category.color}`}>{category.name}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {category.description}
                </p>
                <Link 
                  href={category.href} 
                  className={`inline-flex items-center font-semibold ${category.color} hover:underline group`}
                >
                  {category.cta}
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 