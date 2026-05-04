"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BOOKING_QUERY_TO_LINK,
  DEFAULT_BOOKING_QUERY,
  BOOKING_LINKS,
  PHONE_NUMBER_TEL,
} from "@/config/booking";

const bookingCards = [
  {
    name: "Quick Wash",
    description:
      "Maintenance cleanups and lightly dirty vehicles. Includes exterior hand wash, wheels and tires cleaned, windows cleaned, quick interior vacuum, light wipe-down of obvious dust, and tire shine.",
    query: "quick-wash",
  },
  {
    name: "Full Detail",
    description:
      "Our most popular package for a full inside-and-out refresh. Includes exterior wash, wheels, windows, interior vacuum, dashboard, console, cupholders, door panels, and light stain attention.",
    query: "full-detail",
  },
  {
    name: "Deep Reset",
    description:
      "A deeper detail for neglected interiors, family cars, pet hair, stains, odors, or rideshare vehicles. Includes deep vacuuming, stain treatment, shampoo/extraction where needed, exterior wash, and final walkthrough.",
    query: "deep-reset",
  },
];

const calendlyOptions = [
  { label: "Quick Wash", value: BOOKING_LINKS.quickWash },
  { label: "Full Detail", value: BOOKING_LINKS.fullDetail },
  { label: "Deep Reset", value: BOOKING_LINKS.deepReset },
];

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function BookNowPage() {
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState(
    BOOKING_QUERY_TO_LINK[DEFAULT_BOOKING_QUERY],
  );
  const embedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const packageQuery = new URLSearchParams(window.location.search).get(
      "package",
    );
    if (packageQuery && packageQuery in BOOKING_QUERY_TO_LINK) {
      setSelectedCalendlyUrl(
        BOOKING_QUERY_TO_LINK[packageQuery as keyof typeof BOOKING_QUERY_TO_LINK],
      );
    } else {
      setSelectedCalendlyUrl(BOOKING_QUERY_TO_LINK[DEFAULT_BOOKING_QUERY]);
    }
  }, []);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`,
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const parentElement = embedRef.current;
    if (!parentElement) return;

    const renderWidget = () => {
      if (!window.Calendly) return false;
      parentElement.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: selectedCalendlyUrl,
        parentElement,
      });
      return true;
    };

    if (renderWidget()) return;

    const timeout = window.setTimeout(() => {
      renderWidget();
    }, 600);

    return () => window.clearTimeout(timeout);
  }, [selectedCalendlyUrl]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-bold tracking-tight sm:text-5xl text-primary">
            Book Your Mobile Detail
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-center text-gray-700">
            Choose your package and schedule online. For the most accurate
            quote, send clear photos of your vehicle after booking.
          </p>

          <div className="mt-8 flex justify-center">
            <a href={PHONE_NUMBER_TEL} className="btn-primary">
              Call or Text
            </a>
          </div>

          <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {bookingCards.map((card) => (
              <article
                key={card.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-gray-900">{card.name}</h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {card.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCalendlyUrl(
                      BOOKING_QUERY_TO_LINK[
                        card.query as keyof typeof BOOKING_QUERY_TO_LINK
                      ],
                    )
                  }
                  className="mt-6 inline-block btn-primary"
                >
                  Select {card.name}
                </button>
              </article>
            ))}
          </section>

          <p className="mt-8 rounded-lg bg-white p-4 text-sm text-gray-700">
            Tap Call or Text and send clear photos of your vehicle for the
            fastest quote.
          </p>

          <section className="mt-12 rounded-xl bg-white p-6 shadow-sm" id="schedule-online">
            <h2 className="text-2xl font-semibold text-gray-900">Schedule Online</h2>
            <div className="sticky top-20 z-20 mt-5 flex flex-wrap gap-2 bg-white pb-3">
              {calendlyOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedCalendlyUrl(option.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCalendlyUrl === option.value
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div
              key={selectedCalendlyUrl}
              ref={embedRef}
              className="calendly-inline-widget mt-4 w-full overflow-hidden rounded-lg border border-gray-200"
              data-url={selectedCalendlyUrl}
              style={{ minWidth: "320px", height: "800px" }}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}