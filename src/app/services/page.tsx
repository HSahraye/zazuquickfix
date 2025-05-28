import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 section-padding container-padding pt-24 md:pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12 text-center">Our Services</h1>
        
        {/* Placeholder for Auto Mechanic Services */}
        <section id="mechanic" className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">🛠 Auto Mechanic Services</h2>
          <div className="space-y-4 text-lg">
            <p>Oil Change (Synthetic) – $75</p>
            <p>Brake Pad Replacement (Front or Rear) – $150</p>
            <p>Battery Replacement – $180</p>
            <p>OBD-II Diagnostic Scan – $40</p>
            <p>Air or Cabin Filter Replacement – $40</p>
            <p>Tire Plug Repair – $25</p>
            <p>Serpentine Belt Replacement – $90</p>
          </div>
        </section>

        {/* Placeholder for Car Wash & Detailing Services */}
        <section id="detailing" className="mb-16">
          <h2 className="text-3xl font-semibold text-accent mb-6">✨ Car Wash & Detailing Services</h2>
          <div className="space-y-4 text-lg">
            <p>Basic Exterior Wash – $25</p>
            <p>Premium Exterior Wash – $50</p>
            <p>Basic Interior Clean – $40</p>
            <p>Deep Interior Detail – $100</p>
            <p>Full Detail Combo – $180</p>
            <p>Headlight Restoration – $40</p>
          </div>
        </section>
        
        {/* Placeholder for Add-ons */}
        <section id="addons">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add-ons</h2>
          <div className="space-y-4 text-lg">
            <p>Pet Hair Removal – $20</p>
            <p>Stain Treatment – $25</p>
            <p>Engine Bay Cleaning – $30</p>
            <p>Ozone Odor Treatment – $30</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
} 