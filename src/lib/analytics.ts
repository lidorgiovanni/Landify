declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initialiseAnalytics = () => {
  if (!measurementId || document.getElementById("landify-ga")) return;

  const script = document.createElement("script");
  script.id = "landify-ga";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
};

export const trackLeadIntent = (channel: "whatsapp" | "form", service?: string) => {
  const event = {
    event: "generate_lead",
    lead_channel: channel,
    service: service || "not_selected",
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  window.gtag?.("event", "generate_lead", { lead_channel: channel, service: service || "not_selected" });
};

