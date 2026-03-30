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
  { num: "200+", label: "אתרים שנבנו" },
  { num: "20+", label: "שנות ניסיון" },
  { num: "98%", label: "לקוחות מרוצים" },
  { num: "24/7", label: "תמיכה זמינה" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right - text */}
          <div>
            <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">למה לבחור בנו</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              בונים אתרים שהופכים{" "}
              <span className="text-primary">מבקרים</span> ללקוחות
            </h2>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">
              ב-Landify אין אותיות קטנות ואין הפתעות. יש שירות אמין, אישי ומקצועי, עלויות הוגנות ובעיקר — תוצאות.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-primary-foreground/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Left - stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center hover:bg-primary/20 transition-colors">
                <p className="text-4xl font-bold text-primary mb-1">{s.num}</p>
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
