import { ArrowLeft, ArrowUpLeft, Check } from "lucide-react";
import heroImage from "@/assets/landify-hero-premium.jpg";
import { trackLeadIntent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/leads";

const heroMessage = "היי, הגעתי מאתר LANDIFY. אשמח לשיחת היכרות קצרה על אתר לעסק שלי.";

const HeroSection = () => (
  <section className="hero relative isolate min-h-[760px] overflow-hidden bg-navy text-white">
    <img
      src={heroImage}
      alt=""
      aria-hidden="true"
      className="hero-media absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(194_100%_7%/0.98)_0%,hsl(194_100%_7%/0.82)_42%,hsl(194_100%_7%/0.18)_75%,hsl(194_100%_7%/0.38)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-[linear-gradient(0deg,hsl(194_100%_7%/0.94),transparent)]" />

    <div className="container mx-auto flex min-h-[760px] items-center px-4 pb-24 pt-28 md:px-8">
      <div className="max-w-2xl">
        <p className="animate-fade-up mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-primary">
          <span className="h-px w-10 bg-primary" />
          LANDIFY / DIGITAL STUDIO
        </p>
        <h1 className="animate-fade-up-delay-1 max-w-xl text-5xl font-semibold leading-[1.06] tracking-[-0.04em] text-balance md:text-7xl">
          אתר שמרגיש
          <span className="block text-primary">כמו העסק שלכם.</span>
        </h1>
        <p className="animate-fade-up-delay-2 mt-7 max-w-lg text-base leading-8 text-white/72 md:text-lg">
          LANDIFY מעצבת ובונה חוויות דיגיטליות מדויקות — כאלה שעוזרות לאנשים להבין את הערך שלכם וליצור קשר בביטחון.
        </p>

        <div className="animate-fade-up-delay-3 mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <a
            href={buildWhatsAppUrl(heroMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLeadIntent("whatsapp", "hero")}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-white shadow-[0_12px_40px_hsl(184_97%_37%/0.26)] transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            בואו נדבר על האתר שלכם
            <ArrowUpLeft size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            לראות עבודות נבחרות <ArrowLeft size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm text-white/62">
          {["שיחת היכרות ללא עלות", "עיצוב שמותאם למותג", "תהליך ברור ופשוט"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check size={15} className="text-primary" aria-hidden="true" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

