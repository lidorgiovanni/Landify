import { Star } from "lucide-react";

const testimonials = [
  { name: "Or Heiblum", text: "דוד היה מאוד קשוב לדרישות העסקיות שלנו בדנאל וידע לקחת בריף שקשה לפיצוח ולייצר אתר בצורה המדויקת ביותר לצרכים שלנו. ממליצה מאוד, עבד בצורה מסודרת, מהירה ונקייה.", role: "מנהלת שיווק" },
  { name: "Costanza Film", text: "בראש ובראשונה אמין ומקצועי. היה זמין לכל אורך הדרך לכל שאלה שעלתה ונתן מענה כמעט מיידי. מבחינת עיצוב עשה עבודה נהדרת. ממליץ בחום.", role: "הפצת סרטים" },
  { name: "Avigail Levy", text: "הרגשתי שיש על מי לסמוך – אדם ישר, אמין, עם גישה שירותית אמיתית ויחס אישי ונעים. מומלץ בחום לכל מי שמחפש איש מקצוע אמין, אדיב ומקצועי באמת.", role: "בעלת עסק" },
  { name: "Frank Meisler", text: "אני עובדת עם קליקי כבר מספר שנים, בניהול כל האי-קומרס שלנו בחברה. מקצועיות מרשימה, הוגנות במחירים וזמינות מדהימה. תודה על הכל.", role: "גלריה לאמנות" },
  { name: "Danya Maravich", text: "דוד סיפק חוויית שירות יוצאת דופן ובלתי נשכחת. התוצאה הסופית הייתה אתר אינטרנט מרשים, עם תכנון עיצובי מרהיב ופונקציונליות ללא דופי.", role: "יזמית" },
  { name: "שרון טייץ", text: "האיש הזה אלוף! כל בקשה נענית מיד בשמחה במקצועיות בהסבר בייעוץ. הוא פשוט יודע מה הוא עושה! המחירים שלו הוגנים מאד מאד.", role: "עורכת דין" },
  { name: "Shai Cohen", text: "ממליץ על חברת קליקי. עבודה מקצועית, שירות טוב ומחירים הוגנים.", role: "בעל עסק" },
  { name: "Nimrod Hanegbi", text: "מומלץ מאוד מטפל באתר הבית של חברתנו מעל 10 שנים עם שרות אדיב ומקצועי ללא פשרות.", role: "מנכ\"ל" },
];

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div
    className="glass-card-dark p-5 rounded-2xl flex flex-col justify-between shrink-0"
    style={{ width: "280px" }}
    dir="rtl"
  >
    <div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-primary-foreground/75 leading-relaxed line-clamp-4">"{t.text}"</p>
    </div>
    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
      <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-xs shrink-0">
        {initials(t.name)}
      </div>
      <div>
        <p className="font-semibold text-sm text-primary-foreground leading-none">{t.name}</p>
        <p className="text-xs text-primary-foreground/40 mt-0.5">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider text-center">מה אומרים עלינו</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">לקוחות ממליצים</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-primary-foreground/60 text-center max-w-xl mx-auto text-sm">
          מעל 200 לקוחות מרוצים. הנה מה שהם אומרים עלינו.
        </p>
      </div>

      {/* marquee-wrapper forces LTR so RTL html doesn't reverse the scroll direction */}
      <div className="relative">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[hsl(194_100%_10%)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[hsl(194_100%_10%)] to-transparent" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
