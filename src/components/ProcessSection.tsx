const steps = [
  { num: "01", title: "אפיון ממוקד", desc: "ראיון עומק, זיהוי מסרים, קהל יעד, מתחרים ויעדים עסקיים. מפת אתר, היררכיית תכנים ומבנה עמודים." },
  { num: "02", title: "עיצוב UI מותאם אישית", desc: "מערכת צבעים, טיפוגרפיה, התאמות ללוגו/מותג, סקיצות למסכים מעוצבים." },
  { num: "03", title: "פיתוח וורדפרס + אלמנטור", desc: "בנייה מודולרית, ביצועים, אבטחה, SEO, נגישות, חיבורי טפסים וכלים." },
  { num: "04", title: "הזנת תכנים", desc: "איסוף ומיפוי תכנים, שילוב בעמודים עם היררכיית כותרות נכונה, הטמעת תמונות וקישורים פנימיים." },
  { num: "05", title: "בדיקות והשקה", desc: "בדיקות רספונסיביות, טפסים, מהירות, אינדוקס, פתיחת האתר למנועי החיפוש." },
  { num: "06", title: "תמיכה והדרכה", desc: "הדרכה פרטנית מסודרת כדי שתוכלו לתפעל את האתר והמערכת ללא תלות." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          תהליך בניית אתרים שמביא תוצאות
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          בקליקי מקפידים על עבודה מסודרת שמביאה תוצאה איכותית, מקצועית ויציבה לטווח ארוך.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 group">
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {step.num}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-foreground">{step.title}</h4>
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
