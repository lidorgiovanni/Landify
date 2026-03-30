import { Globe, ShoppingCart, Server, Wrench, Search, Headphones, Palette, Bot, Sparkles, PenTool } from "lucide-react";

const mainServices = [
  {
    icon: Globe,
    title: "בניית אתרים מותאמת אישית",
    description: "אתרים מקצועיים בהתאמה מלאה לעסק שלך – עיצוב רספונסיבי, מהירות גבוהה, חוויית משתמש מנצחת וניהול תוכן פשוט ועצמאי.",
  },
  {
    icon: ShoppingCart,
    title: "בניית חנות אונליין",
    description: "פתרון מסחר אלקטרוני מלא – ניהול מוצרים, תשלומים מאובטחים, חוויית קנייה חלקה ועיצוב שממיר גולשים ללקוחות.",
  },
  {
    icon: Server,
    title: "אחסון ותשתית מקצועית",
    description: "שרתי LiteSpeed מהירים ומאובטחים, פנל ניהול נוח, גיבויים אוטומטיים, SSL ותיבות דוא\"ל עסקיות.",
  },
  {
    icon: Wrench,
    title: "תחזוקה ותמיכה שוטפת",
    description: "עדכונים שוטפים, ניטור ביצועים, תמיכה טכנית זמינה ושמירה על האתר שלך בריא, מהיר ומאובטח לאורך זמן.",
  },
];

const additionalServices = [
  { icon: Search, title: "קידום אורגני SEO" },
  { icon: Headphones, title: "הדרכה ותמיכה אישית" },
  { icon: Palette, title: "עיצוב UI/UX מותאם" },
  { icon: Bot, title: "אוטומציה ואינטגרציות" },
  { icon: Sparkles, title: "סטודיו AI תמונות וסרטונים" },
  { icon: PenTool, title: "יצירת תוכן AI לאתרים" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          בניית אתרים מותאמים לעסק שלך
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4">
          בניית אתרים לעסקים, עיצוב ממיר, מהירות גבוהה, SEO מקצועי, ליווי אישי וסביבה תומכת.
        </p>
        <p className="text-center mb-14">
          מעל 20 שנה ניסיון מוכח בעולם הדיגיטל, <span className="text-primary font-bold">Landify – הפתרון הדיגיטלי לעסק שלך!</span>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:glow-border transition-all duration-300 group cursor-pointer">
              <service.icon className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">שירותים נוספים</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {additionalServices.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-5 text-center shadow-sm hover:shadow-lg hover:glow-border transition-all duration-300 cursor-pointer group">
              <service.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <p className="text-sm font-semibold text-foreground">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
