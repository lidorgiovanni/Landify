import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "כמה זמן לוקח לבנות אתר?", a: "הזמן תלוי בהיקף, בתכנים ובמספר המסכים. אחרי שיחת ההיכרות אפשר לתת הערכת זמן מדויקת ולא הבטחה כללית." },
  { q: "האם אפשר לפרסם את האתר בגוגל?", a: "כן — כשיש התאמה בין המודעה, מילת החיפוש והעמוד שאליו מגיעים. לפני שעולים לאוויר כדאי לוודא שהמסר, מסלול הפנייה והמדידה מוכנים." },
  { q: "איך מודדים פניות מהקמפיין?", a: "אפשר לחבר מזהה Google Analytics ולהגדיר אירוע כאשר מבקר פותח פנייה בוואטסאפ או משלים פעולה אחרת. כך אפשר לקבל החלטות לפי נתונים." },
  { q: "האם אפשר לעבוד על אתר קיים?", a: "כן. אפשר להתחיל מבדיקה של האתר, להבין מה חוסם את הפניות, ואז להחליט אם נכון לשפר עמוד קיים או לבנות עמוד ממוקד לקמפיין." },
  { q: "מה צריך להכין לפני שמתחילים?", a: "מספיק להתחיל במטרה עסקית, שירותים עיקריים ודוגמאות שאוהבים. את המבנה, המסר והחומרים הנוספים אפשר לחדד יחד." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-10 md:pt-14 pb-16 md:pb-20 px-4 md:px-8">
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
                aria-expanded={open === i}
                aria-controls={"faq-answer-" + i}
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {/* smooth height via max-height trick */}
              <div
                id={"faq-answer-" + i}
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

