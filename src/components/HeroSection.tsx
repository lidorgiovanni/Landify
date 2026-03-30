import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="בניית אתרים מקצועית"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-primary-foreground">
          שתמשיכו לעשות את מה{" "}
          <br />
          שאתם אוהבים{" "}
          <span className="text-primary">גם בדיגיטל!</span>
        </h1>

        <Button
          size="lg"
          variant="outline"
          className="text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-full"
          asChild
        >
          <a href="#contact">בואו נבנה משהו ביחד 🚀</a>
        </Button>

        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-primary font-bold text-lg">4.9</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-primary-foreground/60 text-sm mr-2">powered by Google</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
