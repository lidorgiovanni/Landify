import { Globe, ShoppingCart, Server, Wrench, Search, Headphones, Palette, Bot, Sparkles, PenTool } from "lucide-react";

const mainServices = [
  {
    icon: Globe,
    title: "בניית אתרים בוורדפרס",
    description: "בניית אתרי וורדפרס בהתאמה אישית מאפשרת לעסקים ליהנות מכל העולמות; ניהול דינמי ללא תלות, עיצוב רספונסיבי באלמנטור, כלים לקידום אורגני, תוספים ופיצ'רים ייחודיים.",
  },
  {
    icon: ShoppingCart,
    title: "בניית חנות וירטואלית",
    description: "ווקומרס היא חנות וירטואלית המושתתת על מערכת וורדפרס שמספקת פתרון דיגיטלי מתקדם לכל עסק שרוצה להשתתף במסחר האלקטרוני.",
  },
  {
    icon: Server,
    title: "אחסון אתרי וורדפרס",
    description: "שירותי אחסון אתרים בשרתי לינוקס LiteSpeed מאובטחים ומקומיים. פנל ניהול, גיבוי ושחזור, תעודת SSL ותיבות דוא\"ל.",
  },
  {
    icon: Wrench,
    title: "תחזוקת אתרי וורדפרס",
    description: "עדכוני תוספים ומערכת, ניהול וובמסטר ותמיכה טכנית מעשית להבטיח שהאתר שלך יישאר בריא, מעודכן ויתפקד במיטבו.",
  },
];

const additionalServices = [
  { icon: Search, title: "קידום אתרי וורדפרס" },
  { icon: Headphones, title: "הדרכה ותמיכה בוורדפרס" },
  { icon: Palette, title: "עיצוב ובניית אתרי תדמית" },
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
          מעל 20 שנה ניסיון מוכח בעולם הדיגיטל, <span className="text-primary font-bold">קליקי זה המקום הנכון עבור וורדפרס!</span>
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
