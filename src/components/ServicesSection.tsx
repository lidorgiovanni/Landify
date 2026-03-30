import { Globe, ShoppingCart, Server, Wrench, Search, Palette, Bot, PenTool, Sparkles, Headphones } from "lucide-react";

const mainServices = [
  {
    icon: Globe,
    title: "בניית אתרים מותאמת אישית",
    description: "אתרים מקצועיים בהתאמה מלאה לעסק שלך – עיצוב רספונסיבי, מהירות גבוהה, חוויית משתמש מנצחת וניהול תוכן פשוט ועצמאי.",
    tag: "הכי פופולרי",
  },
  {
    icon: ShoppingCart,
    title: "בניית חנות אונליין",
    description: "פתרון מסחר אלקטרוני מלא – ניהול מוצרים, תשלומים מאובטחים, חוויית קנייה חלקה ועיצוב שממיר גולשים ללקוחות.",
    tag: null,
  },
  {
    icon: Server,
    title: "אחסון ותשתית מקצועית",
    description: "שרתי LiteSpeed מהירים ומאובטחים, פנל ניהול נוח, גיבויים אוטומטיים, SSL ותיבות דוא\"ל עסקיות.",
    tag: null,
  },
  {
    icon: Wrench,
    title: "תחזוקה ותמיכה שוטפת",
    description: "עדכונים שוטפים, ניטור ביצועים, תמיכה טכנית זמינה ושמירה על האתר שלך בריא, מהיר ומאובטח לאורך זמן.",
    tag: null,
  },
];

const extras = [
  { icon: Search, title: "קידום SEO" },
  { icon: Palette, title: "עיצוב UI/UX" },
  { icon: Bot, title: "אוטומציות" },
  { icon: Sparkles, title: "סטודיו AI" },
  { icon: PenTool, title: "תוכן AI" },
  { icon: Headphones, title: "הדרכה אישית" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">מה אנחנו עושים</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              הכל תחת קורת גג אחת
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            מעל 20 שנה ניסיון מוכח. Landify – הפתרון הדיגיטלי המלא לעסק שלך.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {mainServices.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-6 flex gap-5 hover:shadow-lg hover:glow-border transition-all duration-300 group border border-border/40 relative overflow-hidden">
              {service.tag && (
                <span className="absolute top-4 left-4 text-xs bg-primary text-white px-2.5 py-1 rounded-full font-semibold">
                  {service.tag}
                </span>
              )}
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border/40 rounded-2xl p-6">
          <p className="text-sm font-semibold text-muted-foreground mb-4 text-center">שירותים נוספים</p>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((e) => (
              <div key={e.title} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
                <e.icon size={14} />
                {e.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
