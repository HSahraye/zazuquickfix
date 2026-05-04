import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-berkeley"];

export const metadata: Metadata = {
  title: "Mobile Detailing Berkeley, CA | Mobile Labs",
  description:
    "Mobile Labs delivers mobile detailing in Berkeley, from quick washes to deep interior work for family and rideshare vehicles.",
};

export default function MobileDetailingBerkeleyPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
