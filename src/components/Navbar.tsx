"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from "@/lib/siteContent";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Book', href: '/book' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkBaseClass = "text-sm font-semibold leading-6 transition-colors duration-200 ease-in-out";
  const scrolledLinkClass = "text-gray-700 hover:text-primary";
  const transparentLinkClass = "text-secondary hover:text-primary";

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out 
                  ${isScrolled || mobileMenuOpen ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent shadow-none'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className={`text-2xl font-bold transition-colors duration-200 ease-in-out ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-primary'}`}>Mobile<span className="text-accent">Labs</span></span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-200 ease-in-out ${isScrolled || mobileMenuOpen ? 'text-gray-700' : 'text-secondary'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${navLinkBaseClass} ${isScrolled || mobileMenuOpen ? scrolledLinkClass : transparentLinkClass}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={contactInfo.phoneHref}
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Call or Text
          </a>
          <Link href={contactInfo.bookPath} className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute inset-x-0 top-0 origin-top bg-white shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="px-6 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                   <span className="text-2xl font-bold text-primary">Mobile<span className="text-accent">Labs</span></span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href={contactInfo.phoneHref}
                      className="mb-3 block rounded-full border border-primary px-4 py-2 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Call or Text
                    </a>
                    <Link
                      href={contactInfo.bookPath}
                      className="btn-primary block w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 