import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "כמה זמן לוקח לבנות אתר?", a: "דף נחיתה מוכן תוך 5 ימי עסקים. אתר תדמית — 2-3 שבועות. חנות אונליין — 3-5 שבועות. הכל תלוי בהיקף הפרויקט ובמהירות אספקת התכנים מצדכם." },
  { q: "האם אני יכול לנהל את האתר לבד אחרי ההשקה?", a: "בהחלט. כל אתר מגיע עם הדרכה אישית מסודרת. תוכלו לעדכן תכנים, תמונות וטקסטים בקלות — ללא ידע טכני." },
  { q: "מה כלול במחיר?", a: "עיצוב מותאם אישית, פיתוח, SSL, אחסון לשנה, חיבור Analytics, גרסת מובייל מלאה והדרכה. ראו את טבלת החבילות לפירוט מלא." },
  { q: "האם יש עלויות חודשיות?", a: "לא. המחיר הוא חד פעמי. לאחר שנה תוכלו לחדש את האחסון בעלות נמוכה (כ-₪300-500 לשנה בהתאם לחבילה)." },
  { q: "האם אתם עושים גם קידום ממומן (PPC)?", a: "אנחנו מתמחים בבניית האתר ודפי הנחיתה. לקידום ממומן אנחנו עובדים עם שותפים מומלצים ויכולים לחבר אתכם." },
  { q: "מה קורה אם לא אהיה מרוצה?", a: "עובדים עם אישורים בשלבים — לא מתקדמים לשלב הבא בלי שאתם מרוצים. שקיפות מלאה לאורך כל הדרך." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="reveal text-center mb-12">
          <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">שאלות נפוצות</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">יש לכם שאלות?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-primary/50 shadow-md shadow-primary/10" : "border-border/40 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-right bg-card hover:bg-secondary/60 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {/* smooth height via max-height trick */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <div className="px-6 pb-5 pt-2 bg-card border-t border-border/30">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          לא מצאתם תשובה?{" "}
          <a href="#contact" className="text-primary font-semibold hover:underline">דברו איתנו ישירות</a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
