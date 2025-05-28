"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data - replace with actual image details
const allImages = [
  { id: 1, src: "/images/gallery/mechanic-1.jpg", alt: "Mechanic service 1", category: "Mechanic", title: "Engine Diagnostic" },
  { id: 2, src: "/images/gallery/detailing-1.jpg", alt: "Detailing service 1", category: "Detailing", title: "Full Interior Detail" },
  { id: 3, src: "/images/gallery/mechanic-2.jpg", alt: "Mechanic service 2", category: "Mechanic", title: "Brake Replacement" },
  { id: 4, src: "/images/gallery/detailing-2.jpg", alt: "Detailing service 2", category: "Detailing", title: "Exterior Wash & Wax" },
  { id: 5, src: "/images/gallery/mechanic-3.jpg", alt: "Mechanic service 3", category: "Mechanic", title: "Oil Change" },
  { id: 6, src: "/images/gallery/detailing-3.jpg", alt: "Detailing service 3", category: "Detailing", title: "Headlight Restoration" },
];

// Create placeholder image files if they don't exist
// For example, in public/images/gallery/mechanic-1.jpg etc.

const categories = ["All", "Mechanic", "Detailing"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? allImages : allImages.filter(image => image.category === filter);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-center">Our Work</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">See the ZazuQuickFix difference. High-quality repairs and stunning details, all done at your convenience.</p>

        <div className="flex justify-center space-x-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                          ${filter === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredImages.map(image => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg group relative"
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 