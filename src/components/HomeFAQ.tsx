"use client";

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, ShieldCheckIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What areas do you service in the Bay Area?",
    answer: "ZazuQuickFix proudly serves Oakland, Berkeley, Alameda, Emeryville, and surrounding East Bay communities. Contact us to confirm service in your specific location!"
  },
  {
    question: "How does the mobile service actually work?",
    answer: "It\'s simple! You book an appointment online or by phone. We arrive at your specified location (home, work, etc.) in our fully equipped service van with all necessary tools and parts. We perform the service on-site, and you pay securely once completed. No need to visit a shop!"
  },
  {
    question: "Are your mechanics certified?",
    answer: "Yes, all our mechanics are certified professionals with extensive experience in a wide range of auto repair and maintenance services. We ensure they are up-to-date with the latest automotive technologies."
  },
  {
    question: "What if I need a service not listed on your website?",
    answer: "While we list our most common services, we can often accommodate special requests. Please contact us with your specific needs, and we\'ll let you know if we can help."
  },
  {
    question: "Is there a warranty on your repair work?",
    answer: "Absolutely! We stand by our work. Most repairs come with a 12-month/12,000-mile warranty on parts and labor. Our detailing services have a satisfaction guarantee – if you\'re not happy, we\'ll make it right."
  }
];

const highlightFeatures = [
    {
        name: 'Fully Mobile Service',
        description: 'We come to you, wherever you are in the Oakland & Bay Area.',
        icon: TruckIcon,
    },
    {
        name: 'Book in Minutes',
        description: 'Easy online scheduling or a quick call is all it takes.',
        icon: ClockIcon,
    },
    {
        name: 'All Work Guaranteed',
        description: 'Certified mechanics and a commitment to your satisfaction.',
        icon: ShieldCheckIcon,
    },
];

export default function HomeFAQ() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl">Why Choose ZazuQuickFix?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience hassle-free car care with our core promises. We prioritize your convenience, time, and trust.
              </p>
            </motion.div>

            <dl className="mt-10 space-y-10">
              {highlightFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <dt className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-4 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-14 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mt-16 lg:col-span-7 lg:mt-0">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl text-center lg:text-left">Frequently Asked Questions</h2>
            </motion.div>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronUpIcon
                              className={`${open ? 'rotate-180' : ''} h-6 w-6 text-primary transition-transform duration-200`}
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600 whitespace-pre-line">{faq.answer}</p>
                        </Disclosure.Panel>
                      </Transition>
                    </motion.div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
} 