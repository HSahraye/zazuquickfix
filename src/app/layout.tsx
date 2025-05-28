import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ZazuQuickFix - Mobile Auto Repair & Detailing | Oakland & Bay Area",
  description: "Affordable and professional mobile mechanic and car detailing services in Oakland and the Bay Area. ZazuQuickFix comes to you!",
  keywords: "mobile mechanic Oakland, car detailing Bay Area, auto repair, mobile car wash, ZazuQuickFix, Oakland, Bay Area",
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
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
