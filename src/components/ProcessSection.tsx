const steps = [
  { num: "01", title: "אפיון ממוקד", desc: "ראיון עומק, זיהוי מסרים, קהל יעד, מתחרים ויעדים עסקיים." },
  { num: "02", title: "עיצוב UI מותאם", desc: "מערכת צבעים, טיפוגרפיה, התאמות ללוגו/מותג וסקיצות מעוצבות." },
  { num: "03", title: "פיתוח וורדפרס", desc: "בנייה מודולרית, ביצועים, אבטחה, SEO, נגישות וחיבורי כלים." },
  { num: "04", title: "הזנת תכנים", desc: "שילוב תכנים עם היררכיית כותרות נכונה, תמונות וקישורים פנימיים." },
  { num: "05", title: "בדיקות והשקה", desc: "בדיקות רספונסיביות, טפסים, מהירות ופתיחת האתר למנועי חיפוש." },
  { num: "06", title: "תמיכה והדרכה", desc: "הדרכה פרטנית כדי שתוכלו לתפעל את האתר ללא תלות." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          תהליך בניית אתרים <span className="text-gradient">שמביא תוצאות</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          עבודה מסודרת שמביאה תוצאה איכותית, מקצועית ויציבה לטווח ארוך.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 group">
              <div className="shrink-0 w-14 h-14 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {step.num}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
