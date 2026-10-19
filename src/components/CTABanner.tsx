import { ArrowUpLeft } from "lucide-react";
import { trackLeadIntent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/leads";

const message = "היי, הגעתי מאתר LANDIFY. אשמח לדבר על אתר או דף נחיתה לעסק שלי.";

const CTABanner = () => (
  <section className="bg-primary px-4 py-16 md:py-20">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold tracking-[0.14em] text-white/75">LET'S START WITH A CONVERSATION</p>
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white md:text-5xl">האתר הבא שלכם מתחיל בכיוון ברור.</h2>
      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/80">
        ספרו לנו בקצרה מה אתם רוצים להשיג. נכין יחד את הצעד הנכון לפני שמתחילים לבנות.
      </p>
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackLeadIntent("whatsapp", "cta_banner")}
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        לפתוח שיחה בוואטסאפ
        <ArrowUpLeft size={17} aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default CTABanner;

