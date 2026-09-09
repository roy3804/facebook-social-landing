import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./Icons";

export default function WhatsAppButton({ label = "שלחו הודעה בוואטסאפ" }: { label?: string }) {
  // Plain, user-initiated link. No automatic navigation or sending.
  return <a className="cta" href={whatsappUrl} aria-label={`${label}, למספר ${site.displayPhone}`}>
    <WhatsAppIcon /><span>{label}</span><ArrowIcon className="arrow" />
  </a>;
}
