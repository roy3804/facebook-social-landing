# Project notes

Preserve the approved Hebrew content, RTL, original phone illustration, and blue/white style. Use editable markup, not a screenshot of a complete page.

Native details elements provide the FAQ. The native dialog is rendered on the server; PopupBehavior is a small client-side progressive enhancement. All WhatsApp buttons must use the single destination in lib/site.ts. Never add automatic navigation or sending.

Keep the visible explanation of account usage/access transfer and independent-project notice. Do not add fabricated safety, confidentiality, affiliation or approval claims. Do not add credentials collection.

Before shipping: npm install, npm run typecheck, npm run build; inspect mobile and desktop, dialog close/Escape/backdrop, repeat-session behavior and all links. A full Next.js build has NOT yet been verified in the creation environment because npm network access was unavailable. Read CHECKS.md.

Do not claim deployment success without a Ready deployment and a reachable production URL. Do not change billing, other repositories, or access controls without authorization.
