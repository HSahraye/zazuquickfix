import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DetailingMadeSimple from "@/components/DetailingMadeSimple";
import FeaturedReviews from "@/components/FeaturedReviews";
import HomeFAQ from "@/components/HomeFAQ";
import QuickContact from "@/components/QuickContact";
import HowItWorks from "@/components/HowItWorks";
import PackageRecommendation from "@/components/PackageRecommendation";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DetailingMadeSimple />
        <HowItWorks />
        <PackageRecommendation />
        <ServiceAreas />
        <FeaturedReviews />
        <HomeFAQ />
        <QuickContact />
      </main>
      <Footer />
    </div>
  );
}
