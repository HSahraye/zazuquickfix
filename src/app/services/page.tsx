import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactInfo } from "@/lib/siteContent";

const packages = [
  {
    name: "Quick Wash",
    price: "From $79",
    bestFor: "Maintenance cleanups and lightly dirty vehicles.",
    includes: [
      "Exterior hand wash",
      "Wheels and tires cleaned",
      "Windows cleaned",
      "Quick interior vacuum",
      "Light wipe-down of obvious dust",
      "Tire shine",
    ],
    cta: "Book Quick Wash",
    bookingPath: "/book?package=quick-wash",
  },
  {
    name: "Full Detail",
    price: "From $199",
    bestFor:
      "Most customers who want the inside and outside cleaned in one visit.",
    includes: [
      "Exterior wash",
      "Wheels, tires, and windows",
      "Interior vacuum",
      "Dashboard, console, cupholders, and door panels wiped down",
      "Light stain attention",
      "Interior refresh",
    ],
    cta: "Book Full Detail",
    bookingPath: "/book?package=full-detail",
  },
  {
    name: "Deep Reset",
    price: "From $299+",
    bestFor:
      "Neglected interiors, family cars, pet hair, stains, odors, and rideshare vehicles.",
    includes: [
      "Deep interior vacuum",
      "Pet hair removal where possible",
      "Stain treatment",
      "Shampoo/extraction where appropriate",
      "Odor treatment option",
      "Exterior wash included",
      "Final walkthrough",
    ],
    cta: "Book Deep Reset",
    bookingPath: "/book?package=deep-reset",
  },
];

const addOns = [
  "Heavy pet hair",
  "Heavy stains",
  "Odor treatment",
  "Headlight restoration",
  "Oversized SUV/truck",
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Mobile Detailing Packages
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            Three clear packages to make booking simple and fast.
          </p>

          <section className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-gray-900">{pkg.name}</h2>
                <p className="mt-1 text-lg font-bold text-primary">{pkg.price}</p>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Best for:</span>{" "}
                  {pkg.bestFor}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {pkg.includes.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
                <a
                  href={pkg.bookingPath}
                  className="mt-6 inline-block btn-primary"
                >
                  {pkg.cta}
                </a>
              </article>
            ))}
          </section>

          <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-xl font-semibold text-gray-900">Available Add-ons</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {addOns.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <p className="mt-8 rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
            Prices are starting rates. Final pricing depends on vehicle size,
            condition, pet hair, stains, odor, parking access, and location.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={contactInfo.phoneHref} className="btn-secondary text-center">
              Call or Text
            </a>
            <a href={contactInfo.bookPath} className="btn-primary text-center">
              Book Appointment
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}