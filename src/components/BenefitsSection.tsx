import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "עיצוב מותאם אישית לכל עסק",
  "אחסון ותחזוקה מקצועיים",
  "שירות אישי ומחויבות מלאה",
  "הדרכה ותמיכה ללא תלות",
  "קידום אורגני כבר מהבסיס",
  "מחירים הוגנים ושקיפות מלאה",
  "ניסיון ומוניטין מוכחים",
  "זמינות גבוהה לאורך כל הדרך",
];

const stats = [
  { num: 200, suffix: "+", label: "אתרים שנבנו" },
  { num: 20, suffix: "+", label: "שנות ניסיון" },
  { num: 98, suffix: "%", label: "לקוחות מרוצים" },
  { num: 24, suffix: "/7", label: "תמיכה זמינה" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="text-4xl font-bold text-primary mb-1">
      {count}{suffix}
    </p>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="pt-20 md:pt-28 pb-10 md:pb-14 bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-right">
            <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">למה לבחור בנו</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              בונים אתרים שהופכים <span className="text-primary">מבקרים</span> ללקוחות
            </h2>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">
              ב-Landify אין אותיות קטנות ואין הפתעות. יש שירות אמין, אישי ומקצועי, עלויות הוגנות ובעיקר — תוצאות.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {benefits.map((b, i) => (
                <div key={b} className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center gap-3`}>
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-left grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default">
                <Counter target={s.num} suffix={s.suffix} />
                <p className="text-primary-foreground/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
