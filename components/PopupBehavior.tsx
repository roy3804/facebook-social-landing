"use client";
import { useEffect } from "react";
import { initializeOfferPopup } from "@/lib/popup";
import { site } from "@/lib/site";

export default function PopupBehavior() {
  useEffect(() => initializeOfferPopup({ enabled: site.popupEnabled, delayMs: site.popupDelayMs }), []);
  return null;
}
