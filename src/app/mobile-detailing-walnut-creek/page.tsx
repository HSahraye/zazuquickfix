import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-walnut-creek"];

export const metadata: Metadata = {
  title: "Mobile Detailing Walnut Creek, CA | Mobile Labs",
  description:
    "Mobile detailing in Walnut Creek with clear package options and convenient booking from Mobile Labs.",
};

export default function MobileDetailingWalnutCreekPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
