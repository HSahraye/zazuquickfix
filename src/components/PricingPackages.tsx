import Link from "next/link";
import { packageCards, pricingNote } from "@/lib/siteContent";

export default function PricingPackages() {
  return (
    <section className="section-padding bg-gray-50" id="packages">
      <div className="mx-auto max-w-7xl container-padding">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Mobile Detailing Packages
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          Simple starting prices with package details so you know what to expect
          before we arrive.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packageCards.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
              <p className="mt-2 text-lg font-bold text-primary">{pkg.price}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600">{pkg.includes}</p>
              <a href={pkg.bookingUrl} className="mt-4 inline-block btn-primary">
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-lg bg-white p-4 text-center text-sm text-gray-700">
          {pricingNote}
        </p>
        <div className="mt-8 text-center">
          <Link href="/pricing" className="btn-primary">
            View Full Pricing Page
          </Link>
        </div>
      </div>
    </section>
  );
}
