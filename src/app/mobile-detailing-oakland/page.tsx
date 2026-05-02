import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-oakland"];

export const metadata: Metadata = {
  title: "Mobile Detailing Oakland, CA | ZazuQuickFix",
  description:
    "Book mobile detailing in Oakland with ZazuQuickFix. Interior resets, exterior washes, pet hair removal, and full detail packages at your location.",
};

export default function MobileDetailingOaklandPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
