import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactInfo, packageCards, faqItems } from "@/lib/siteContent";

type CityLandingPageProps = {
  h1: string;
  intro: string;
};

export default function CityLandingPage({ h1, intro }: CityLandingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            {h1}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            {intro}
          </p>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold text-gray-900">
              Popular Mobile Packages
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packageCards.map((pkg) => (
                <article
                  key={pkg.name}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">{pkg.includes}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold text-gray-900">Local FAQs</h2>
            <div className="mt-6 space-y-4">
              {faqItems.slice(0, 5).map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-lg border border-gray-200 p-5"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-xl bg-gray-900 p-8 text-white">
            <h2 className="text-3xl font-semibold">Book Your Mobile Detail</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              Text photos for a quote or reserve a slot online.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a href={contactInfo.smsHref} className="btn-primary text-center">
                Text Photos for Quote
              </a>
              <Link href={contactInfo.bookPath} className="btn-accent text-center">
                Book Mobile Detail
              </Link>
              <Link href="/book" className="btn-secondary text-center">
                Go to Booking Page
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
