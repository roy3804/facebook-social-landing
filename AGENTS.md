# Project notes — current design

The latest owner request explicitly asks for a Gmail inbox illustration, Gmail icons and a blue/yellow/green/red palette. This supersedes the former blue-only illustration rules.

- This is a Next.js App Router / TypeScript project. Do not replace the application with a screenshot or static HTML mockup.
- `components/GmailInbox.tsx` is a server-rendered decorative mock inbox. All mail content is fictitious. It must not become a login, credential collection or live Gmail connection without an explicitly scoped legitimate product request.
- Preserve the visible independent-project notices and the explanation of account usage/access transfer. Do not add fabricated approval, affiliation, safety, testimonials or results.
- Use the single contact destination in `lib/site.ts`. No automatic WhatsApp navigation or sending.
- Main content and icons are server components. Only the popup behavior is a client-side enhancement. FAQ uses native details; popup uses native dialog.
- Respect RTL and mixed Hebrew/Latin text. Rubik is the display font and Heebo is the text font, both loaded through next/font with Hebrew and Latin subsets.
- Hero artwork uses natural document flow so its caption stays below the rotated mock inbox at every breakpoint. Check 320, 390, 768, 861 and 1440 px widths when changing its geometry.
- Test modal X, Escape, backdrop, continue-reading, focus restoration, Tab/Shift+Tab, short-screen scrolling and reduced motion.
- Read CHECKS.md. The latest local preview checks are not a successful Next.js build or hydration test. Run npm ci, npm run typecheck and npm run build in a network-enabled environment before production deployment.
- Do not change package versions, WhatsApp destination, billing, other repositories or permissions without authorization.
- Do not claim deployment success without a completed deployment and verified public URL.
