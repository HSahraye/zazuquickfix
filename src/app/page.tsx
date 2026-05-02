import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import FeaturedReviews from "@/components/FeaturedReviews";
import HomeFAQ from "@/components/HomeFAQ";
import QuickContact from "@/components/QuickContact";
import PricingPackages from "@/components/PricingPackages";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeServices />
        <PricingPackages />
        <HowItWorks />
        <ServiceAreas />
        <FeaturedReviews />
        <HomeFAQ />
        <QuickContact />
      </main>
      <Footer />
    </div>
  );
}
