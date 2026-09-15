// Edit this file to change the contact destination and popup timing.
// The WhatsApp number is public by design. Never place a password or API key here.
export const site = {
  phone: "972504674859",
  displayPhone: "050-467-4859",
  message: "היי יש לי חשבון Gmail אשמח לפרטים נוספים",
  popupDelayMs: 6000,
  popupEnabled: true,
  title: "יש לכם חשבונות גוגל ישנים או לא בשימוש?",
  description: "מידע על הצעה לשימוש בחשבון Gmail ולהעברת הגישה אליו, ויצירת קשר בוואטסאפ. עמוד עצמאי, ללא קשר לגוגל.",
} as const;

export function createWhatsAppUrl(phone: string, message: string): string {
  if (!/^[1-9]\d{6,14}$/.test(phone)) {
    throw new Error("Use an international phone number with digits only, e.g. 972504674859.");
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsAppUrl(site.phone, site.message);
