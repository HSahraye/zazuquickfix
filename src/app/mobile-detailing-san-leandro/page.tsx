import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-detailing-san-leandro"];

export const metadata: Metadata = {
  title: "Mobile Detailing San Leandro, CA | ZazuQuickFix",
  description:
    "Book mobile detailing in San Leandro with ZazuQuickFix. Interior reset, exterior wash, and full detail options available.",
};

export default function MobileDetailingSanLeandroPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
