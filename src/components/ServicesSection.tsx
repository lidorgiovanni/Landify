import { Globe, ShoppingCart, Server, Wrench, Search, Headphones, Palette, Bot, Sparkles, PenTool } from "lucide-react";

const mainServices = [
  {
    icon: Globe,
    title: "בניית אתרים בוורדפרס",
    description: "בניית אתרי וורדפרס בהתאמה אישית, עיצוב רספונסיבי, כלים לקידום אורגני, תוספים ופיצ'רים ייחודיים.",
  },
  {
    icon: ShoppingCart,
    title: "בניית חנות וירטואלית",
    description: "חנות אונליין מתקדמת עם פתרון דיגיטלי מלא לכל עסק שרוצה להשתתף במסחר האלקטרוני.",
  },
  {
    icon: Server,
    title: "אחסון אתרי וורדפרס",
    description: "שירותי אחסון בשרתים מאובטחים ומקומיים, פנל ניהול, גיבוי ושחזור, תעודת SSL ותיבות דוא\"ל.",
  },
  {
    icon: Wrench,
    title: "תחזוקת אתרי וורדפרס",
    description: "עדכוני תוספים ומערכת, ניהול וובמסטר ותמיכה טכנית מעשית להבטיח שהאתר יתפקד במיטבו.",
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
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          בניית אתרים מותאמים <span className="text-gradient">לעסק שלך</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          בניית אתרים לעסקים, עיצוב ממיר, מהירות גבוהה, SEO מקצועי, ליווי אישי וסביבה תומכת.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service) => (
            <div key={service.title} className="glass-card p-6 hover:glow-border transition-all duration-300 group cursor-pointer">
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">שירותים נוספים</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {additionalServices.map((service) => (
            <div key={service.title} className="glass-card p-4 text-center hover:glow-border transition-all duration-300 cursor-pointer group">
              <service.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
