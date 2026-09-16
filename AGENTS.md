# Project notes

Preserve the approved Hebrew content, RTL, and blue/white style. Use editable markup, not a screenshot of a complete page.

The hero illustration is public/phone-hero.svg — vector, drawn for this page. It replaced public/phone-hero.webp on 16 September 2026; that file was a stock 3D render carrying Facebook's own trade dress (the "facebook" wordmark, the blue "f" app tile, the Like thumb, a Groups glyph and a mock feed) on a page whose footer denies any affiliation with Meta, and it was publicly fetchable from the deployed site. It is recoverable at `git show 19cb1e6:public/phone-hero.webp` but must not be restored.

The replacement must never carry a Facebook, Meta, Google, Instagram, WhatsApp or X mark, wordmark or app-icon lockup, and must contain no lettering of any script — every word on this page belongs in the markup. Avatars stay abstract silhouettes. A heart, a speech bubble and a share arrow are generic; a thumbs-up is not. Three geometry contracts the stylesheet depends on: viewBox "0 0 517 495"; a #dbeeff top edge across the full width (the stacked copy block's gradient ends there); and a bare, uniform #c4e6fc strip at x >= 439 with nothing drawn in it (the desktop copy column's gradient is #c4e6fc at the 49.02% join, and the 72px mask above 861px fades into it). Breaking any of the three produces a visible seam. Also keep the alt text free of product names — it is read aloud, and the old string said "ממשק פייסבוק".

Native details elements provide the FAQ. The native dialog is rendered on the server; PopupBehavior is a small client-side progressive enhancement. All WhatsApp buttons must use the single destination in lib/site.ts. Never add automatic navigation or sending.

Meta Pixel 2308388850011506 is configured in lib/site.ts next to the popup switches. `pixelEnabled: false` removes the snippet, the noscript beacon and the click listener in one edit. The ID is public — it ships inside the page every visitor downloads — so it belongs in lib/site.ts, not in an env var. A Conversions API access token is not public and must never be added there.

components/MetaPixel.tsx server-renders the snippet, so PageView fires from the HTML before hydration and reactStrictMode cannot double-fire it. Click reporting is lib/analytics.ts: a delegated capture-phase listener returning a cleanup, the same shape as lib/popup.ts, with components/ContactTracking.tsx as its thin client enhancement. The WhatsApp buttons stay server components and plain `<a href>` links — data-wa-placement is a hook, not behaviour. Never call preventDefault on them and never assume window.fbq exists. A Content-Security-Policy added to next.config.ts would need script-src for the inline snippet and https://connect.facebook.net, plus img-src and connect-src for https://www.facebook.com.

Keep the visible explanation of account usage/access transfer and independent-project notice. Do not add fabricated safety, confidentiality, affiliation or approval claims. Do not add credentials collection.

Before shipping: npm install, npm run typecheck, npm run build; inspect mobile and desktop, dialog close/Escape/backdrop, repeat-session behavior and all links. npm and Google Fonts are reachable again, and a full Next.js build plus a production `next start` have now been verified. Read CHECKS.md for what is and is not covered.

Typography is Rubik (headings) and Heebo (body), loaded with next/font and self-hosted. Keep both the hebrew and latin subsets on both families: Google's hebrew range excludes U+0020, so the spaces in Hebrew headings come from the latin face.

Do not claim deployment success without a Ready deployment and a reachable production URL. Do not change billing, other repositories, or access controls without authorization.
