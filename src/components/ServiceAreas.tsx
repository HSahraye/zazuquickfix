import { serviceAreaCities } from "@/lib/siteContent";

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
              className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-gray-700"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
