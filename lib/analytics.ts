/** Meta Pixel: the loader snippet, and delegated click tracking. Both are
    entirely optional — the WhatsApp anchors stay plain links and work with
    JavaScript off, with the pixel off, and with connect.facebook.net blocked. */

type PixelParams = Record<string, string | number>;
type Fbq = (command: "track" | "trackCustom", event: string, params?: PixelParams) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** The standard Meta loader, verbatim, with the id and the PageView call appended. */
export function createPixelSnippet(pixelId: string): string {
  // Digits only. This string is interpolated into an inline <script>, so a value
  // that is not a plain id would be executable text rather than a number.
  if (!/^\d{10,20}$/.test(pixelId)) {
    throw new Error("Use a Meta Pixel ID with digits only, e.g. 2308388850011506.");
  }
  return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`;
}

export type ContactTrackingOptions = {
  enabled?: boolean;
  selector?: string;
  eventName?: string;
  repeatWindowMs?: number;
};

export function initializeContactTracking({
  enabled = true,
  selector = "[data-wa-placement]",
  eventName = "Contact",
  repeatWindowMs = 1000,
}: ContactTrackingOptions = {}): () => void {
  if (!enabled || typeof document === "undefined") return () => {};
  // Keyed on the anchor node, so an impatient double-tap while the app switch
  // is still resolving is one intent, not two. Never suppresses a click on a
  // different button.
  const lastFired = new WeakMap<Element, number>();

  function onClick(event: MouseEvent): void {
    // The icons inside .cta are SVG: they are Element but NOT HTMLElement, and
    // nothing sets pointer-events:none on them, so they are real click targets.
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest<HTMLAnchorElement>(selector);
    if (!anchor || !anchor.isConnected) return;

    const now = Date.now();
    const previous = lastFired.get(anchor);
    if (previous !== undefined && now - previous < repeatWindowMs) return;
    lastFired.set(anchor, now);

    // fbq is missing whenever the snippet never ran — an ad blocker, a network
    // that cannot reach Meta, pixelEnabled: false. Nothing here may assume it
    // exists, and a pixel that misbehaves must not reach the link.
    if (typeof window.fbq !== "function") return;
    try {
      window.fbq("track", eventName, {
        content_name: `whatsapp_${anchor.dataset.waPlacement ?? "unknown"}`,
        content_category: "whatsapp_click",
      });
    } catch { /* Reporting is best effort; the click is not. */ }
  }

  // Capture phase: runs before React's root listener and before any bubble
  // handler, which is the earliest the request can reach the network stack
  // ahead of the browser navigating away to wa.me. The default action is never
  // touched — no preventDefault, no programmatic navigation.
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
