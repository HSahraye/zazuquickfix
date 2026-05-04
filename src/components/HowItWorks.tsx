const steps = [
  {
    title: "Choose a package",
    description: "Pick Quick Wash, Full Detail, or Deep Reset.",
  },
  {
    title: "Book your appointment",
    description: "Reserve a time through the Mobile Labs booking page.",
  },
  {
    title: "Send photos if needed",
    description:
      "For stains, pet hair, or heavy dirt, send photos so we can confirm the best option.",
  },
  {
    title: "We detail at your location",
    description:
      "We arrive, complete the service, and walk through the result with you.",
  },
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
            <div key={step.title} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-primary">
                Step {index + 1}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-900">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
