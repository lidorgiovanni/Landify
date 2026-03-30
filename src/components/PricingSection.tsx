import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "דף נחיתה",
    price: "₪790",
    desc: "מושלם לקמפיין ממוקד",
    highlight: false,
    features: [
      { text: "עיצוב מותאם אישית", included: true },
      { text: "טופס לידים + וואטסאפ", included: true },
      { text: "גרסת מובייל מלאה", included: true },
      { text: "SSL + אחסון שנה", included: true },
      { text: "חיבור Analytics & Pixel", included: true },
      { text: "מסירה תוך 5 ימים", included: true },
      { text: "SEO מלא", included: false },
      { text: "הדרכה אישית", included: false },
    ],
  },
  {
    name: "אתר תדמית",
    price: "₪2,490",
    desc: "הכי פופולרי לעסקים",
    highlight: true,
    features: [
      { text: "עד 8 עמודים", included: true },
      { text: "עיצוב UI מלא", included: true },
      { text: "SEO בסיסי מובנה", included: true },
      { text: "טפסים ואינטגרציות", included: true },
      { text: "גרסת מובייל מלאה", included: true },
      { text: "SSL + אחסון שנה", included: true },
      { text: "הדרכה אישית", included: true },
      { text: "תמיכה 3 חודשים", included: true },
    ],
  },
  {
    name: "חנות אונליין",
    price: "₪4,490",
    desc: "פתרון מסחר מלא",
    highlight: false,
    features: [
      { text: "עד 500 מוצרים", included: true },
      { text: "ניהול הזמנות", included: true },
      { text: "תשלומים מאובטחים", included: true },
      { text: "קופונים ומבצעים", included: true },
      { text: "SEO מלא", included: true },
      { text: "SSL + אחסון שנה", included: true },
      { text: "הדרכה אישית", included: true },
      { text: "תמיכה 6 חודשים", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">מחירים</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            שקיפות מלאה — בלי הפתעות
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            מחירים הוגנים וברורים. כל החבילות כוללות עיצוב מותאם אישית ותמיכה.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} rounded-3xl flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-white border-primary shadow-2xl shadow-primary/30 md:-mt-4 md:mb-4"
                  : "bg-card border-border/40 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Popular badge — sits ABOVE card content, never overlaps */}
              {plan.highlight && (
                <div className="flex justify-center pt-5 pb-0 px-7">
                  <span className="text-xs bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold">
                    ⭐ הכי פופולרי
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <p className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm mb-1 ${plan.highlight ? "text-white/50" : "text-muted-foreground"}`}>חד פעמי</p>
                </div>
                <p className={`text-xs mb-6 ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included
                        ? <CheckCircle size={14} className={`shrink-0 ${plan.highlight ? "text-white/80" : "text-primary"}`} />
                        : <X size={14} className={`shrink-0 ${plan.highlight ? "text-white/30" : "text-muted-foreground/40"}`} />
                      }
                      <span className={f.included
                        ? (plan.highlight ? "text-white/90" : "text-foreground")
                        : (plan.highlight ? "text-white/30" : "text-muted-foreground/40 line-through")
                      }>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-xl font-bold py-5 transition-transform hover:scale-105 ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                  asChild
                >
                  <a href="#contact">התחילו עכשיו</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-8">
          * המחירים אינם כוללים מע"מ. כל הפרויקטים מותאמים אישית — ייתכנו שינויים בהתאם לדרישות.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
