"use client";

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

// Placeholder for social icons if you add them
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.777.242 2.228.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.173.451.363 1.056.413 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.242 1.777-.413 2.228-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.38.896-.451.173-1.056.363-2.228.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.777-.242-2.228-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.38-.173-.451-.363-1.056-.413-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.242-1.777.413-2.228.217-.562.477.96.896-1.381.42-.419.819-.679 1.38-.896.451-.173 1.056-.363 2.228-.413C8.416 2.175 8.796 2.163 12 2.163m0-1.808C8.743.355 8.373.345 7.098.288c-1.27.058-2.164.25-2.928.528a4.923 4.923 0 00-1.772 1.153A4.923 4.923 0 00.896 4.604c-.277.764-.47 1.658-.528 2.928C.31 8.798.3 9.17.3 12s.01 3.202.068 4.476c.058 1.27.25 2.164.528 2.928.278.765.696 1.416 1.153 1.772a4.923 4.923 0 001.772 1.153c.764.277 1.658.47 2.928.528C8.373 23.615 8.743 23.625 12 23.625s3.627-.01 4.902-.068c1.27-.058 2.164-.25 2.928-.528.765-.278 1.416-.696 1.772-1.153a4.923 4.923 0 001.153-1.772c.277-.764.47-1.658.528-2.928.058-1.274.068-1.648.068-4.476s-.01-3.202-.068-4.476c-.058-1.27-.25-2.164-.528-2.928a4.923 4.923 0 00-1.153-1.772A4.923 4.923 0 0019.072.816c-.764-.277-1.658-.47-2.928-.528C15.627.31 15.257.3 12 .3M12 6.865A5.135 5.135 0 1012 17.13a5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 section-padding">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {/* About Section */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Zazu<span className="text-primary">QuickFix</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Honest, affordable, high-quality mobile car services right to your door in Oakland & the Bay Area. Oil changes, detailing, we roll to you!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/book" className="hover:text-primary transition-colors">Book Now</Link></li>
              <li><Link href="/about#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+13412386141" className="hover:text-primary transition-colors">+1 (341) 238-6141</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:zazuquickfix@gmail.com" className="hover:text-primary transition-colors">zazuquickfix@gmail.com</a>
              </li>
              {/* Add location/map info here if needed */}
              <li className="text-sm">
                Servicing Oakland & the Bay Area
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold uppercase tracking-wider text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-xs leading-5">
            &copy; {currentYear} ZazuQuickFix. All rights reserved.
          </p>
          <p className="mt-4 text-xs leading-5 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 