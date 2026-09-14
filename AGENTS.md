# Project notes

Preserve the approved Hebrew content, RTL, original phone illustration, and blue/white style. Use editable markup, not a screenshot of a complete page.

Native details elements provide the FAQ. The native dialog is rendered on the server; PopupBehavior is a small client-side progressive enhancement. All WhatsApp buttons must use the single destination in lib/site.ts. Never add automatic navigation or sending.

Keep the visible explanation of account usage/access transfer and independent-project notice. Do not add fabricated safety, confidentiality, affiliation or approval claims. Do not add credentials collection.

Before shipping: npm install, npm run typecheck, npm run build; inspect mobile and desktop, dialog close/Escape/backdrop, repeat-session behavior and all links. npm and Google Fonts are reachable again, and a full Next.js build plus a production `next start` have now been verified. Read CHECKS.md for what is and is not covered.

Typography is Rubik (headings) and Heebo (body), loaded with next/font and self-hosted. Keep both the hebrew and latin subsets on both families: Google's hebrew range excludes U+0020, so the spaces in Hebrew headings come from the latin face.

Do not claim deployment success without a Ready deployment and a reachable production URL. Do not change billing, other repositories, or access controls without authorization.
