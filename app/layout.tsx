import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | HVAC in Indianapolis`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${site.name} | HVAC in Indianapolis`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
