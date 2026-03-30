import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Or Heiblum",
    text: "דוד היה מאוד קשוב לדרישות העסקיות שלנו בדנאל וידע לקחת בריף שקשה לפיצוח ולייצר אתר בצורה המדויקת ביותר לצרכים שלנו. ממליצה מאוד, עבד בצורה מסודרת, מהירה ונקייה.",
  },
  {
    name: "Costanza Film Distribution",
    text: "בראש ובראשונה אמין ומקצועי. היה זמין לכל אורך הדרך לכל שאלה שעלתה ונתן מענה כמעט מיידי. מבחינת עיצוב עשה עבודה נהדרת. ממליץ בחום.",
  },
  {
    name: "Avigail Levy",
    text: "הרגשתי שיש על מי לסמוך – אדם ישר, אמין, עם גישה שירותית אמיתית ויחס אישי ונעים. מומלץ בחום לכל מי שמחפש איש מקצוע אמין, אדיב ומקצועי באמת.",
  },
  {
    name: "Frank Meisler Gallery",
    text: "אני עובדת עם קליקי כבר מספר שנים, בניהול כל האי-קומרס שלנו בחברה. מקצועיות מרשימה, הוגנות במחירים וזמינות מדהימה. תודה על הכל.",
  },
  {
    name: "Danya Maravich",
    text: "דוד סיפק חוויית שירות יוצאת דופן ובלתי נשכחת. התוצאה הסופית הייתה אתר אינטרנט מרשים, עם תכנון עיצובי מרהיב ופונקציונליות ללא דופי.",
  },
  {
    name: "שרון טייץ ושות׳",
    text: "האיש הזה אלוף! כל בקשה נענית מיד בשמחה במקצועיות בהסבר בייעוץ. הוא פשוט יודע מה הוא עושה! המחירים שלו הוגנים מאד מאד.",
  },
  {
    name: "Shai Cohen",
    text: "ממליץ על חברת קליקי. עבודה מקצועית, שירות טוב ומחירים הוגנים.",
  },
  {
    name: "nimrod hanegbi",
    text: "מומלץ מאוד מטפל באתר הבית של חברתנו מעל 10 שנים עם שרות אדיב ומקצועי ללא פשרות.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-navy text-primary-foreground overflow-hidden">
      <div className="container mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          לקוחות ממליצים
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-primary-foreground/60 text-center max-w-2xl mx-auto">
          הלקוחות שלנו מספרים את הסיפור האמיתי של העבודה איתנו.<br />
          אתרים מדויקים, חכמים, שנבנו מתוך הקשבה אמיתית לצרכים שלהם.
        </p>
      </div>

      <div className="flex animate-scroll-left gap-6 w-max">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="glass-card-dark p-6 w-80 shrink-0">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4 line-clamp-4">{t.text}</p>
            <p className="font-semibold text-sm text-primary-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
