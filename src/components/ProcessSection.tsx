const steps = [
  { num: "01", title: "אפיון ממוקד", desc: "ראיון עומק, זיהוי מסרים, קהל יעד, מתחרים ויעדים עסקיים. מפת אתר ומבנה עמודים." },
  { num: "02", title: "עיצוב UI מותאם אישית", desc: "מערכת צבעים, טיפוגרפיה, התאמות למותג וסקיצות למסכים מעוצבים." },
  { num: "03", title: "פיתוח ובנייה מקצועית", desc: "בנייה מודולרית, ביצועים, אבטחה, SEO, נגישות וחיבורי טפסים." },
  { num: "04", title: "הזנת תכנים", desc: "איסוף ומיפוי תכנים, שילוב בעמודים עם היררכיית כותרות נכונה." },
  { num: "05", title: "בדיקות והשקה", desc: "בדיקות רספונסיביות, מהירות, אינדוקס ופתיחה למנועי חיפוש." },
  { num: "06", title: "תמיכה והדרכה", desc: "הדרכה פרטנית כדי שתוכלו לתפעל את האתר ללא תלות." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">איך זה עובד</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">תהליך שמביא תוצאות</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${Math.min(i % 4 + 1, 4)} flex gap-6 group`}>
                <div className="shrink-0 w-14 h-14 rounded-full bg-card border-2 border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white font-bold text-sm transition-all duration-300 relative z-10 animate-pulse-ring-on-hover">
                  {step.num}
                </div>
                <div className="bg-card border border-border/40 rounded-2xl p-5 flex-1 group-hover:border-primary/40 group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="font-bold text-base mb-1 text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
