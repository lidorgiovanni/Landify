import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Or Heiblum",
    text: "דוד היה מאוד קשוב לדרישות העסקיות שלנו וידע לקחת בריף שקשה לפיצוח ולייצר אתר בצורה המדויקת ביותר לצרכים שלנו. ממליצה מאוד.",
  },
  {
    name: "Costanza Film Distribution",
    text: "אמין ומקצועי. היה זמין לכל אורך הדרך לכל שאלה שעלתה ונתן מענה כמעט מיידי. מבחינת עיצוב עשה עבודה נהדרת. ממליץ בחום.",
  },
  {
    name: "Avigail Levy",
    text: "הרגשתי שיש על מי לסמוך – אדם ישר, אמין, עם גישה שירותית אמיתית ויחס אישי ונעים. מומלץ בחום לכל מי שמחפש איש מקצוע אמין.",
  },
  {
    name: "Frank Meisler Gallery",
    text: "אני עובדת עם קליקי כבר מספר שנים. מקצועיות מרשימה, הוגנות במחירים וזמינות מדהימה. תודה על הכל.",
  },
  {
    name: "Danya Maravich",
    text: "דוד סיפק חוויית שירות יוצאת דופן. התוצאה הסופית הייתה אתר מרשים, עם תכנון עיצובי מרהיב ופונקציונליות ללא דופי.",
  },
  {
    name: "שרון טייץ ושות׳",
    text: "האיש הזה אלוף! כל בקשה נענית מיד בשמחה במקצועיות בהסבר בייעוץ. הוא פשוט יודע מה הוא עושה! המחירים הוגנים מאוד.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          לקוחות <span className="text-gradient">ממליצים</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          הלקוחות שלנו מספרים את הסיפור האמיתי של העבודה איתנו.
        </p>
      </div>

      <div className="flex animate-scroll-left gap-6 w-max">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="glass-card p-6 w-80 shrink-0">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">{t.text}</p>
            <p className="font-semibold text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
