import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./Icons";

export default function WhatsAppButton({ label = "שלחו הודעה בוואטסאפ" }: { label?: string }) {
  // Plain, user-initiated link. No automatic navigation or sending.
  // The number is never spelled out — on the page or to a screen reader. The
  // only place it exists is inside the wa.me destination, where WhatsApp needs
  // it, so the reader meets it in the chat rather than on the page.
  return <a className="cta" href={whatsappUrl} aria-label={`${label} — פתיחת שיחה בוואטסאפ`}>
    <WhatsAppIcon /><span>{label}</span><ArrowIcon className="arrow" />
  </a>;
}
