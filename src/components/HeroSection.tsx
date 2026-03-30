import { Star, ArrowLeft, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const perks = ["עיצוב מותאם אישית", "SEO מובנה", "תמיכה שוטפת"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="בניית אתרים מקצועית"
        className="absolute inset-0 w-full h-full object-cover"
      />
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
            <p className="animate-fade-up-delay-2 text-white/70 text-lg mb-8 leading-relaxed">
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
            <div className="animate-fade-up-delay-3 flex gap-3 flex-wrap">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/30"
                asChild
              >
                <a href="#contact">בואו נדבר — חינם</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:text-primary rounded-full px-6 py-6 text-base border border-white/20 hover:border-primary/50"
                asChild
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  לתיק העבודות <ArrowLeft size={16} />
                </a>
              </Button>
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

      {/* Scroll indicator */}
      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-primary transition-colors animate-bounce-y">
        <span className="text-xs">גלול למטה</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
