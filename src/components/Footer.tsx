"use client";

import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { contactInfo } from "@/lib/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-secondary text-gray-300">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-primary">Mobile</span>
              <span className="text-accent">Labs</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Mobile car wash and detailing for Oakland and nearby Bay Area
              cities. We focus on practical, high-impact results at your
              location.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book</Link></li>
              <li><Link href="/mobile-detailing-oakland" className="hover:text-primary transition-colors">Oakland Page</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-primary" />
                <a href={contactInfo.phoneHref} className="hover:text-primary transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-sm">
                Servicing Oakland & the Bay Area
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">
              Text Photos for Quote
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Fastest way to get accurate pricing: text clear photos of the
              interior and exterior with your vehicle year, make, and model.
            </p>
            <a href={contactInfo.smsHref} className="mt-4 inline-block btn-primary">
              Text {contactInfo.phoneDisplay}
            </a>
            <p className="mt-4 text-sm text-gray-300">{contactInfo.instagramHandle}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-xs leading-5">
            &copy; {currentYear} Mobile Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}