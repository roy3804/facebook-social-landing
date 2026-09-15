import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/** Decorative Gmail mark. The page labels itself as an independent project. */
export function GmailIcon(props: Props) {
  return <svg viewBox="0 0 48 36" fill="none" aria-hidden="true" {...props}>
    <path fill="#4285F4" d="M3.27 36h7.64V17.45L0 9.27v23.46C0 34.54 1.46 36 3.27 36Z" />
    <path fill="#34A853" d="M37.09 36h7.64c1.81 0 3.27-1.46 3.27-3.27V9.27l-10.91 8.18V36Z" />
    <path fill="#FBBC04" d="M37.09 3.27v14.18L48 9.27V4.91C48 .86 43.38-1.45 40.15.98l-3.06 2.29Z" />
    <path fill="#EA4335" d="M10.91 17.45V3.27L24 13.09l13.09-9.82v14.18L24 27.27l-13.09-9.82Z" />
    <path fill="#C5221F" d="M0 4.91v4.36l10.91 8.18V3.27L7.85.98C4.62-1.44 0 .87 0 4.91Z" />
  </svg>;
}

export function WhatsAppIcon(props: Props) {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <path d="M26.5 15.5a11 11 0 0 1-16.3 9.7L4 27l1.7-6a11 11 0 1 1 20.8-5.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M11 9.5c-.8 0-1.6 1.2-1.6 2.3 0 4.4 5.9 9.5 9.7 9 .9-.2 2-1.3 2-2 0-.4-2.7-1.9-3.1-1.7l-1.2 1.1c-1.7-.5-3.7-2.5-4.4-4.1l.9-1.2c.2-.4-1.2-3.4-1.7-3.4Z" fill="currentColor" />
  </svg>;
}

export function ArrowIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CloseIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

type IconName = "mail" | "clock" | "chat" | "info" | "search" | "menu" | "sliders" | "star" | "send" | "file" | "pencil" | "inbox" | "refresh" | "dots" | "chevron" | "check" | "shield" | "tag" | "users" | "sparkle";

export function UiIcon({ name, ...props }: Props & { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {name === "mail" && <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>}
    {name === "clock" && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
    {name === "chat" && <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2 1-7a8.5 8.5 0 1 1 18-3.5Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>}
    {name === "info" && <><circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10h.01" /></>}
    {name === "search" && <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></>}
    {name === "menu" && <path d="M4 6h16M4 12h16M4 18h16" />}
    {name === "sliders" && <><path d="M4 7h9m4 0h3M4 17h3m4 0h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" /></>}
    {name === "star" && <path d="m12 3 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9L12 3Z" />}
    {name === "send" && <path d="m3 3 18 9L3 21l3-9-3-9Zm3 9h15" />}
    {name === "file" && <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" /><path d="M14 3v6h6" /></>}
    {name === "pencil" && <><path d="m15 4 5 5M4 20l5-1L21 7a2.1 2.1 0 0 0-4-4L5 15l-1 5Z" /></>}
    {name === "inbox" && <><path d="m4 4-2 10v6h20v-6L20 4H4Z" /><path d="M2 14h6l2 3h4l2-3h6" /></>}
    {name === "refresh" && <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.5 7a8 8 0 0 1 13.7 1.5M18.5 17A8 8 0 0 1 4.8 15.5" /></>}
    {name === "dots" && <><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></>}
    {name === "chevron" && <path d="m9 5 7 7-7 7" />}
    {name === "check" && <path d="m5 12 4 4L19 6" />}
    {name === "shield" && <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>}
    {name === "tag" && <><path d="M3 3h8l10 10-8 8L3 11V3Z" /><circle cx="7" cy="7" r="1" /></>}
    {name === "users" && <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-2-4" /></>}
    {name === "sparkle" && <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />}
  </svg>;
}

export function FeatureIcon({ name }: { name: "mail" | "clock" | "chat" | "info" }) {
  return <UiIcon name={name} />;
}

export function ColorDots({ className = "" }: { className?: string }) {
  return <span className={`color-dots ${className}`} aria-hidden="true"><i /><i /><i /><i /></span>;
}
