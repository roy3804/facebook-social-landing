"use client";
import { useEffect } from "react";
import { initializeContactTracking } from "@/lib/analytics";
import { site } from "@/lib/site";

export default function ContactTracking() {
  useEffect(() => initializeContactTracking({ enabled: site.pixelEnabled, eventName: site.pixelClickEvent }), []);
  return null;
}
