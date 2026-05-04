import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bay Area Mobile Car Wash & Detailing | Mobile Labs",
  description:
    "Mobile car wash and auto detailing in Oakland and the Bay Area. Interior detailing, exterior wash, pet hair removal, stain treatment, headlight restoration, and full mobile detail packages at your location.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TRFFL678KJ"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TRFFL678KJ');
          `}
        </Script>
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
