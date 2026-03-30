import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "דף נחיתה",
    price: "₪1,490",
    desc: "מושלם לקמפיין ממוקד",
    highlight: false,
    features: [
      "עיצוב מותאם אישית",
      "טופס לידים + וואטסאפ",
      "גרסת מובייל מלאה",
      "SSL + אחסון שנה",
      "חיבור Analytics",
      "מסירה תוך 5 ימים",
    ],
  },
  {
    name: "אתר תדמית",
    price: "₪3,900",
    desc: "הכי פופולרי לעסקים",
    highlight: true,
    features: [
      "עד 8 עמודים",
      "עיצוב UI מלא",
      "SEO בסיסי מובנה",
      "טפסים ואינטגרציות",
      "גרסת מובייל מלאה",
      "SSL + אחסון שנה",
      "הדרכה אישית",
      "תמיכה 3 חודשים",
    ],
  },
  {
    name: "חנות אונליין",
    price: "₪6,900",
    desc: "פתרון מסחר מלא",
    highlight: false,
    features: [
      "עד 500 מוצרים",
      "ניהול הזמנות",
      "תשלומים מאובטחים",
      "קופונים ומבצעים",
      "SEO מלא",
      "SSL + אחסון שנה",
      "הדרכה אישית",
      "תמיכה 6 חודשים",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">מחירים</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            שקיפות מלאה — בלי הפתעות
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            מחירים הוגנים, ברורים ומותאמים לכל עסק. כל החבילות כוללות עיצוב מותאם אישית.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-white border-primary shadow-2xl shadow-primary/25 scale-105"
                  : "bg-card border-border/40 hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <span className="self-start text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold mb-4">
                  ⭐ הכי פופולרי
                </span>
              )}
              <p className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.name}
              </p>
              <p className={`text-4xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                {plan.price}
              </p>
              <p className={`text-xs mb-6 ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className={plan.highlight ? "text-white/80 shrink-0" : "text-primary shrink-0"} />
                    <span className={plan.highlight ? "text-white/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-xl font-bold ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
                asChild
              >
                <a href="#contact">התחילו עכשיו</a>
              </Button>
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
