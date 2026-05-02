import Link from "next/link";
import { serviceAreaCities } from "@/lib/siteContent";

const cityPages = [
  { label: "Mobile Detailing Oakland", href: "/mobile-detailing-oakland" },
  { label: "Mobile Car Wash Oakland", href: "/mobile-car-wash-oakland" },
  { label: "Mobile Detailing Alameda", href: "/mobile-detailing-alameda" },
  { label: "Mobile Detailing Berkeley", href: "/mobile-detailing-berkeley" },
  {
    label: "Mobile Detailing San Leandro",
    href: "/mobile-detailing-san-leandro",
  },
  { label: "Mobile Detailing Hayward", href: "/mobile-detailing-hayward" },
  {
    label: "Mobile Detailing Walnut Creek",
    href: "/mobile-detailing-walnut-creek",
  },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl container-padding">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Bay Area Service Areas
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          We currently service Oakland, Alameda, Berkeley, Emeryville, San
          Leandro, Hayward, Castro Valley, Walnut Creek, Lafayette, San Ramon,
          Dublin, Pleasanton, Fremont, and nearby areas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {serviceAreaCities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {city}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cityPages.map((cityPage) => (
            <Link
              key={cityPage.href}
              href={cityPage.href}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
            >
              {cityPage.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
