import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Rubik, Heebo } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Hebrew and Latin subsets keep mixed-direction text and spacing consistent.
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
  title: "חשבונות Gmail ישנים | פרטים ויצירת קשר",
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
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="he" dir="rtl" className={`${display.variable} ${text.variable}`}><body>{children}</body></html>;
}
