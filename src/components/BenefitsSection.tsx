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
    <section id="benefits" className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          בניית אתרים שהופכים <span className="text-primary">מבקרים</span> ללקוחות
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-primary-foreground/70 text-center max-w-3xl mx-auto mb-6">
          <strong>בקליקי מעצבים ובונים אתרי וורדפרס בהתאמה אישית – מאתרי תדמית ועד חנויות אונליין</strong> – עם שילוב מנצח של עיצוב מודרני, חוויית משתמש ופתרונות ניהול פשוטים ללא תלות.
        </p>
        <p className="text-primary-foreground/60 text-center max-w-3xl mx-auto mb-14 text-sm">
          בקליקי אין אותיות קטנות, אין מילים גבוהות ומפוצצות, יש תכלס! יש שירות אמין, אישי ומקצועי, עלויות הוגנות ובעיקר יש תוצאות!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/25 transition-colors">
                <b.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold mb-2 text-primary-foreground">{b.title}</h4>
              <p className="text-sm text-primary-foreground/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
