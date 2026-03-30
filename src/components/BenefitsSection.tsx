import { Monitor, Paintbrush, Cloud, Heart, GraduationCap, Search, Coins, Award } from "lucide-react";

const benefits = [
  { icon: Monitor, title: "מומחיות בוורדפרס ואלמנטור", desc: "אתרים מותאמים אישית, רספונסיביים ומקצועיים." },
  { icon: Paintbrush, title: "עיצוב שמותאם לכם אישית", desc: "אתר שמדבר את השפה של העסק שלכם." },
  { icon: Cloud, title: "אחסון ותחזוקה מקצועיים", desc: "שירות יציב ומהיר עם זמינות גבוהה." },
  { icon: Heart, title: "שירות אישי ומחויבות מלאה", desc: "יחס חם, זמינות גבוהה ותמיכה לאורך זמן." },
  { icon: GraduationCap, title: "הדרכה ותמיכה ללא תלות", desc: "ליווי אישי ונגישות מלאה גם אחרי ההשקה." },
  { icon: Search, title: "קידום אורגני כבר מהבסיס", desc: "בנייה חכמה שמכינה את האתר ל-SEO מהיום הראשון." },
  { icon: Coins, title: "מחירים הוגנים ואמינות", desc: "עלויות הוגנות ושקיפות מלאה, בלי הפתעות." },
  { icon: Award, title: "ניסיון ומוניטין מוכחים", desc: "מעל 20 שנה בתחום עם עשרות לקוחות מרוצים." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          בניית אתרים שהופכים <span className="text-gradient">מבקרים ללקוחות</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
          בקליקי מעצבים ובונים אתרי וורדפרס בהתאמה אישית – מאתרי תדמית ועד חנויות אונליין – עם שילוב מנצח של עיצוב מודרני, חוויית משתמש ופתרונות ניהול פשוטים.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
