const steps = [
  "Send photos or choose a package",
  "Get a clear quote",
  "We come to your location",
  "Inspect the finished result and pay",
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl container-padding">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-primary">
                Step {index + 1}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
