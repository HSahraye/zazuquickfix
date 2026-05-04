import Link from "next/link";

export default function PackageRecommendation() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-5xl container-padding">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Not Sure Which Package to Pick?
        </h2>
        <div className="mt-8 rounded-2xl border border-primary/20 bg-blue-50 p-8 shadow-sm">
          <p className="text-xl font-semibold text-gray-900">
            Most customers start with Full Detail.
          </p>
          <p className="mt-3 text-gray-700">
            Full Detail is the best choice if you want the inside and outside
            cleaned in one visit. Choose Deep Reset if the vehicle has heavy
            pet hair, stains, odors, or has not been cleaned in a long time.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/services" className="btn-secondary text-center">
              View Packages
            </Link>
            <Link
              href="/book?package=full-detail"
              className="btn-primary text-center"
            >
              Book Full Detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
