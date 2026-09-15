import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Rubik, Heebo } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import { site } from "@/lib/site";
import "./globals.css";

// Two variable Hebrew families. Rubik carries the headlines — it is the more
// drawn, more branded face — and Heebo is the quieter one for running copy.
// Omitting `weight` is what makes next/font fetch the variable file, so every
// weight the stylesheet asks for is a real instance rather than a synthetic one.
//
// Both families need "latin" as well as "hebrew", and not only for the phone
// number and "Meta"/"WhatsApp": Google's hebrew subset range does not include
// U+0020, so the SPACES in a Hebrew heading are served by the latin face.
// Measured — dropping "latin" here did not save a byte, it only removed the
// preload hint and left a 35 KB file that the page still fetches, arriving
// late enough to reflow the headline. Keep both subsets on both families.
const display = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Hebrew", "Arial", "sans-serif"],
});
const text = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-text",
  display: "swap",
  fallback: ["Arial Hebrew", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  // Every og:* URL is resolved against this. Setting it explicitly is what stops
  // Next resolving a relative image against the per-deployment VERCEL_URL, which
  // on a preview build is behind Vercel Authentication and unreadable to Meta.
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.description,
  // Kept out of search indexing until the owner is ready. Same page for every visitor.
  // noindex is for search engines; facebookexternalhit ignores it and still builds
  // a link preview, so the og block below is what a paid click actually shows.
  robots: { index: false, follow: false },
  // Built only from strings that already exist in lib/site.ts — no new claims.
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    title: site.metaTitle,
    description: site.description,
    // alt is the headline the card actually draws, so it describes the image.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.title, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.description,
    images: ["/og.jpg"],
  },
  // One paste target. An empty domainVerification emits no tag at all.
  ...(site.domainVerification ? { other: { "facebook-domain-verification": site.domainVerification } } : {}),
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // The page is light-only; declaring it stops a dark-mode device rendering UA
  // scrollbars and controls dark against a light page.
  colorScheme: "light",
  // Matches the actual colour at the very top of the page.
  themeColor: "#f4f9ff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // MetaPixel first in the body: the snippet has to run before the reader can
  // leave, and it carries its own client enhancement, so this is the only line
  // the pixel adds to the layout.
  return <html lang="he" dir="rtl" className={`${display.variable} ${text.variable}`}><body><MetaPixel />{children}</body></html>;
}
