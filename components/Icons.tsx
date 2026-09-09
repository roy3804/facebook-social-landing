import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;
export function WhatsAppIcon(props: Props) {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <path d="M26.5 15.5a11 11 0 0 1-16.3 9.7L4 27l1.7-6a11 11 0 1 1 20.8-5.5Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    <path d="M11 9.5c-.8 0-1.6 1.2-1.6 2.3 0 4.4 5.9 9.5 9.7 9 .9-.2 2-1.3 2-2 0-.4-2.7-1.9-3.1-1.7l-1.2 1.1c-1.7-.5-3.7-2.5-4.4-4.1l.9-1.2c.2-.4-1.2-3.4-1.7-3.4Z" fill="currentColor" />
  </svg>;
}
export function ArrowIcon(props: Props) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="m14 5-7 7 7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function CloseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
}
export function FeatureIcon({ name }: { name: "account" | "clock" | "chat" | "info" }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "account" && <><circle cx="24" cy="16" r="8"/><path d="M9 42v-5c0-9 30-9 30 0v5"/></>}
    {name === "clock" && <><circle cx="24" cy="24" r="17"/><path d="M24 13v12l8 5"/></>}
    {name === "chat" && <><path d="M40 22c0 9-8 16-18 16l-13 4 3-10c-4-3-6-6-6-10C6 13 14 6 23 6s17 7 17 16Z"/><path d="M15 22h.1m8 0h.1m8 0h.1"/></>}
    {name === "info" && <><circle cx="24" cy="24" r="17"/><path d="M24 23v12m0-21v.1"/></>}
  </svg>;
}
