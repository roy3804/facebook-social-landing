import { createPixelSnippet } from "@/lib/analytics";
import { site } from "@/lib/site";
import ContactTracking from "./ContactTracking";

export default function MetaPixel() {
  // One switch. pixelEnabled: false in lib/site.ts and nothing below reaches the
  // page: no snippet, no beacon, no listener, no request to facebook.com.
  if (!site.pixelEnabled) return null;
  return <>
    {/* Server-rendered, like the dialog, so PageView fires from the HTML itself
        before React hydrates. That is also why reactStrictMode cannot fire it
        twice: no effect is involved. The loader this inserts sets async, so a
        slow or unreachable connect.facebook.net delays nothing on the page. */}
    <script dangerouslySetInnerHTML={{ __html: createPixelSnippet(site.pixelId) }} />
    <noscript>
      <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${site.pixelId}&ev=PageView&noscript=1`} />
    </noscript>
    {/* Same shape as OfferPopup and PopupBehavior: server markup, plus one thin
        client enhancement that adds the click reporting and nothing else. */}
    <ContactTracking />
  </>;
}
