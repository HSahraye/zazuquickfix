const items = [
  {
    title: "We Come to You",
    body: "Home, office, apartment parking, or driveway service across Oakland and nearby Bay Area cities.",
  },
  {
    title: "Simple Package Options",
    body: "Pick Quick Wash, Full Detail, or Deep Reset based on your vehicle condition.",
  },
  {
    title: "Photos Help Us Quote Faster",
    body: "Send clear interior and exterior photos after booking so we can confirm the right package.",
  },
];

export default function DetailingMadeSimple() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl container-padding">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Detailing Made Simple
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
          No shop drop-off. No waiting room. Choose a package, book a time, and
          we come to your location.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
