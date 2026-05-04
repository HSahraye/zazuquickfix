import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";
import { cityLandingPages } from "@/lib/siteContent";

const page = cityLandingPages["mobile-car-wash-oakland"];

export const metadata: Metadata = {
  title: "Mobile Car Wash Oakland, CA | Mobile Labs",
  description:
    "Need a mobile car wash in Oakland? Mobile Labs brings exterior wash and interior reset packages directly to your home, office, or apartment.",
};

export default function MobileCarWashOaklandPage() {
  return <CityLandingPage h1={page.h1} intro={page.intro} />;
}
