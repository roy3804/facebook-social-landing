import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "חשבונות פייסבוק ישנים | פרטים ויצירת קשר",
  description: site.description,
  // Kept out of search indexing until the owner is ready. Same page for every visitor.
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#edf6ff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
