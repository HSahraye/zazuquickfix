import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packageCards, pricingNote, contactInfo } from "@/lib/siteContent";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Mobile Detailing Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            Starting rates for our most-requested detailing and car wash
            packages.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packageCards.map((pkg) => (
              <article
                key={pkg.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900">{pkg.name}</h2>
                <p className="mt-2 text-lg font-bold text-primary">{pkg.price}</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{pkg.includes}</p>
                <a href={pkg.bookingUrl} className="mt-4 inline-block btn-primary">
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-700">
            {pricingNote}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={contactInfo.smsHref} className="btn-primary text-center">
              Text Photos for Quote
            </a>
            <a href={contactInfo.bookPath} className="btn-accent text-center">
              Book Appointment
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}