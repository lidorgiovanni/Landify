export const WHATSAPP_PHONE = "972543495645";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string) => {
  const url = buildWhatsAppUrl(message);
  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.assign(url);
  }
};

