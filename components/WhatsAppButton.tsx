import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./Icons";

type Props = { label?: string; className?: string };

export default function WhatsAppButton({ label = "שלחו הודעה בוואטסאפ", className = "" }: Props) {
  return <a className={`cta ${className}`} href={whatsappUrl} aria-label={`${label}, למספר ${site.displayPhone}`}>
    <WhatsAppIcon /><span>{label}</span><ArrowIcon className="arrow" />
  </a>;
}
