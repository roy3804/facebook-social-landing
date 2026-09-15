import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./Icons";

/** Where this button sits. Reported as a Meta Pixel parameter, never displayed. */
export type WhatsAppPlacement = "hero" | "closing" | "dialog";

export default function WhatsAppButton({ label = "שלחו הודעה בוואטסאפ", placement }: { label?: string; placement: WhatsAppPlacement }) {
  // Plain, user-initiated link. No automatic navigation or sending.
  // The number is never spelled out — on the page or to a screen reader. The
  // only place it exists is inside the wa.me destination, where WhatsApp needs
  // it, so the reader meets it in the chat rather than on the page.
  // data-wa-placement is read by the delegated click listener in lib/analytics.
  return <a className="cta" href={whatsappUrl} data-wa-placement={placement} aria-label={`${label} — פתיחת שיחה בוואטסאפ`}>
    <WhatsAppIcon /><span>{label}</span><ArrowIcon className="arrow" />
  </a>;
}
