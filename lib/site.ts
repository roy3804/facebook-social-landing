// Edit this file to change the contact destination, popup timing and campaign measurement.
// The WhatsApp number and the Meta Pixel ID are public by design: both ship inside the page
// every visitor downloads, so neither is a secret and neither belongs in an env var. Never
// place a password, an API key or a Conversions API access token here.
export const site = {
  phone: "972504674859",
  displayPhone: "050-467-4859",
  message: "היי יש לי חשבון פייסבוק אשמח לפרטים נוספים",
  popupDelayMs: 6000,
  popupEnabled: true,
  // Meta Pixel. pixelEnabled: false removes the snippet, the noscript beacon and the click
  // listener from the page entirely, with no other code change. pixelClickEvent is the
  // standard event sent when a WhatsApp button is clicked. "Contact" is Meta's standard
  // event for opening a chat with a business, which is exactly what the button does;
  // "Lead" means a form was submitted, and this page has no form. Both are selectable as
  // an optimisation goal in Ads Manager, so nothing is lost by being accurate. Which
  // button was clicked is reported as content_name, not as a separate event.
  // Changing this once a campaign is live resets its optimisation — decide before launch.
  pixelId: "2308388850011506",
  pixelEnabled: true,
  pixelClickEvent: "Contact",
  title: "יש לכם חשבונות פייסבוק ישנים או לא בשימוש?",
  // The <title> and the og:title. Deliberately NOT site.title: that sentence is
  // already drawn inside public/og.jpg, and Meta prints og:title as live text
  // directly under the card — reusing it there makes the preview say the same
  // thing twice. Both strings are the page's own.
  metaTitle: "חשבונות פייסבוק ישנים | פרטים ויצירת קשר",
  description: "מידע על הצעה לשימוש בחשבון פייסבוק ולהעברת הגישה אליו, ויצירת קשר בוואטסאפ.",
  // Absolute origin of the public production alias, with no trailing slash. Meta's
  // crawler resolves nothing relative: og:image and og:url have to arrive absolute.
  // This must be the alias, never a per-deployment *-hash.vercel.app URL — those sit
  // behind Vercel Authentication and the crawler gets the login page instead.
  url: "https://facebook-social-landing.vercel.app",
  // Business Settings > Brand safety and suitability > Domains > Meta-tag verification.
  // Paste ONLY the content value, not the whole tag. Empty string emits no tag at all.
  domainVerification: "",
} as const;

export function createWhatsAppUrl(phone: string, message: string): string {
  if (!/^[1-9]\d{6,14}$/.test(phone)) {
    throw new Error("Use an international phone number with digits only, e.g. 972504674859.");
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsAppUrl(site.phone, site.message);
