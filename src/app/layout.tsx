import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bay Area Mobile Car Wash & Detailing | ZazuQuickFix",
  description:
    "ZazuQuickFix offers mobile car wash and auto detailing in Oakland and the Bay Area. Interior detailing, exterior wash, pet hair removal, stain treatment, and full mobile detail packages at your location.",
  keywords:
    "mobile detailing Oakland, mobile car wash Oakland, Bay Area mobile detailing, interior car detailing Oakland, mobile auto detailing Bay Area, car wash at home Bay Area",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`}>
      <body className="min-h-screen pb-20 font-sans antialiased md:pb-0">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
