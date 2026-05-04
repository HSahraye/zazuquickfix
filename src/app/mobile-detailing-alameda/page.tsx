import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-alameda"];

export const metadata: Metadata = {
  title: "Mobile Detailing Alameda, CA | Mobile Labs",
  description:
    "Mobile detailing in Alameda with interior and exterior packages from Mobile Labs. Get quote-first service at your location.",
};

export default function MobileDetailingAlamedaPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
