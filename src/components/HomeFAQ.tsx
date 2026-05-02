"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { faqItems } from "@/lib/siteContent";

export default function HomeFAQ() {
  return (
    <section className="section-padding bg-white" id="faq">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Quick answers before you book your mobile detail.
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqItems.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <div>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronUpIcon
                            className={`${open ? "rotate-180" : ""} h-6 w-6 text-primary transition-transform duration-200`}
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
                        <p className="text-base leading-7 text-gray-600 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}