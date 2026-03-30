import { Star, ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const PHONE = "972543493564";
const WA_MSG = encodeURIComponent("היי! ראיתי את האתר שלכם ואשמח לשמוע עוד על בניית אתר לעסק שלי 😊");

const perks = ["עיצוב מותאם אישית", "SEO מובנה", "תמיכה שוטפת"];

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="בניית אתרים מקצועית" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />

      <div className="relative z-10 w-full px-4 pt-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Right - main text */}
          <div>
            <span className="animate-fade-up inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              מעל 20 שנה בעולם הדיגיטל
            </span>
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              האתר שלכם צריך{" "}
              <span className="text-primary">לעבוד בשבילכם</span>{" "}
              — לא להפך
            </h1>
            <p className="animate-fade-up-delay-2 text-white/70 text-lg mb-6 leading-relaxed">
              בונים אתרים ודפי נחיתה שמביאים לקוחות. עיצוב חכם, מהירות גבוהה, SEO מובנה.
            </p>
            <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-8">
              {perks.map((p) => (
                <span key={p} className="flex items-center gap-1.5 text-white/80 text-sm">
                  <CheckCircle size={15} className="text-primary shrink-0" />
                  {p}
                </span>
              ))}
            </div>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3">
              {/* Primary CTA — WhatsApp */}
              <a
                href={`https://wa.me/${PHONE}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-105 hover:shadow-green-500/50"
              >
                <WaIcon />
                בואו נדבר בוואטסאפ
              </a>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:text-primary rounded-full px-6 py-4 text-base border border-white/20 hover:border-primary/50 hover:bg-white/5"
                asChild
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  לתיק העבודות <ArrowLeft size={16} />
                </a>
              </Button>
            </div>

            {/* Social proof under buttons */}
            <div className="animate-fade-up-delay-3 flex items-center gap-2 mt-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white/60 text-sm">4.9 · מעל 200 לקוחות מרוצים</span>
            </div>
          </div>

          {/* Left - stats card */}
          <div className="hidden md:flex justify-center animate-fade-up-delay-2">
            <div className="animate-float bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-72 text-center space-y-6">
              <div>
                <p className="text-5xl font-bold text-primary">200+</p>
                <p className="text-white/70 text-sm mt-1">אתרים ודפי נחיתה</p>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-white">4.9</p>
                <p className="text-white/50 text-xs mt-1">דירוג Google</p>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <p className="text-5xl font-bold text-primary">20+</p>
                <p className="text-white/70 text-sm mt-1">שנות ניסיון</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors animate-bounce-y">
        <span className="text-xs">גלול למטה</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
