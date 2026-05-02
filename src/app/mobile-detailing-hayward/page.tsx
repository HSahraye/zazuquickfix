import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-hayward"];

export const metadata: Metadata = {
  title: "Mobile Detailing Hayward, CA | ZazuQuickFix",
  description:
    "ZazuQuickFix offers mobile detailing in Hayward with flexible packages and quote-first service at your location.",
};

export default function MobileDetailingHaywardPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
