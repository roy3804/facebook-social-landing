import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Rubik, Heebo } from "next/font/google";
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
  title: "חשבונות פייסבוק ישנים | פרטים ויצירת קשר",
  description: site.description,
  // Kept out of search indexing until the owner is ready. Same page for every visitor.
  robots: { index: false, follow: false },
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
  return <html lang="he" dir="rtl" className={`${display.variable} ${text.variable}`}><body>{children}</body></html>;
}
