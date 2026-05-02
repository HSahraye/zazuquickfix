import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  detailingServices,
  maintenanceServices,
  contactInfo,
} from "@/lib/siteContent";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Mobile Car Wash & Detailing Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            Detailing-first service menu for Oakland and the Bay Area.
          </p>

          <section id="detailing" className="mt-16">
            <h2 className="text-3xl font-semibold text-accent">
              Detailing & Car Wash Services
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {detailingServices.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-orange-100 bg-orange-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Mobile service available at home, office, or apartment
                    parking setup.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="mechanic" className="mt-14 rounded-xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-2xl font-semibold text-primary">
              Also Available: Basic Mobile Maintenance
            </h2>
            <p className="mt-2 text-gray-700">
              Mechanic support is available as secondary service depending on
              location and schedule.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {maintenanceServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {service}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/pricing" className="btn-primary text-center">
              See Detailing Packages
            </Link>
            <a href={contactInfo.smsHref} className="btn-secondary text-center">
              Text Photos for Quote
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}