import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryCards = [
  {
    name: "Interior Before & After",
    caption: "Heavy dust and clutter reset into a clean, fresh daily driver interior.",
    image: "/images/gallery/detailing-1.jpg",
  },
  {
    name: "Pet Hair Removal",
    caption: "Seats, carpets, and cargo areas lifted and de-haired for a cleaner cabin.",
    image: "/images/gallery/detailing-2.jpg",
  },
  {
    name: "Stain Treatment",
    caption: "Targeted stain work on high-contact areas with practical visible improvements.",
    image: "/images/gallery/detailing-3.jpg",
  },
  {
    name: "Exterior Wash & Shine",
    caption: "Road film removed with hand wash process for a sharp, glossy finish.",
    image: "/images/gallery/detailing-1.jpg",
  },
  {
    name: "Headlight Restoration",
    caption: "Cloudy headlights polished for better clarity and a cleaner front-end look.",
    image: "/images/gallery/detailing-2.jpg",
  },
  {
    name: "Family SUV Reset",
    caption: "High-use family vehicles restored with interior reset and stain attention.",
    image: "/images/gallery/detailing-3.jpg",
  },
  {
    name: "Rideshare Detail",
    caption: "Quick turnaround cleaning for drivers who need presentable interiors daily.",
    image: "/images/gallery/detailing-1.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Before & After Mobile Detailing Results
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
            Real service outcomes from interior and exterior detailing packages.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryCards.map((card) => (
              <article
                key={card.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative h-56">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-900">{card.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">{card.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}