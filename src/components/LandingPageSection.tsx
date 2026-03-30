import { Zap, Target, BarChart2, MousePointerClick, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Target, title: "מסר ממוקד", desc: "דף אחד, מסר אחד, פעולה אחת. ללא הסחות דעת — רק המרות." },
  { icon: Zap, title: "טעינה בשנייה", desc: "דפי נחיתה מהירים במיוחד — גוגל אוהב, הלקוח נשאר." },
  { icon: MousePointerClick, title: "CTA חזק", desc: "כפתורי קריאה לפעולה שמניעים את הגולש לפנות אליכם." },
  { icon: BarChart2, title: "מחובר לאנליטיקס", desc: "Google Analytics, Pixel ו-Conversion Tracking מובנים." },
  { icon: Clock, title: "מוכן תוך 5 ימים", desc: "תהליך מהיר ויעיל — מאפיון ועד השקה בפחות משבוע." },
  { icon: ShieldCheck, title: "A/B Testing מוכן", desc: "בנוי לבדיקות ואופטימיזציה מתמשכת לשיפור ההמרות." },
];

const LandingPageSection = () => {
  return (
    <section id="landing" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right - text */}
          <div>
            <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">דפי נחיתה</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              דף נחיתה שממיר —<br />
              <span className="text-primary">לא רק נראה יפה</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              דף נחיתה מקצועי הוא הכלי הכי חזק לקמפיין פרסומי. בונים אותו נכון מהיום הראשון — עם מסר חד, עיצוב ממיר ומדידה מלאה.
            </p>
            <div className="bg-card border border-border/40 rounded-2xl p-5 mb-6">
              <p className="text-sm font-bold text-foreground mb-3">מה כלול בדף נחיתה:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["עיצוב מותאם למותג ולקמפיין", "טופס לידים / כפתור וואטסאפ", "חיבור ל-Google Analytics & Pixel", "גרסה מובייל מושלמת", "SSL + אחסון מהיר", "מסירה תוך 5 ימי עסקים"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-bold text-primary">₪790</p>
                <p className="text-xs text-muted-foreground">מחיר התחלתי</p>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                מחיר קבוע, חד פעמי.<br />ללא דמי תחזוקה חובה.  
              </div>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 font-bold shadow-md shadow-primary/20" asChild>
              <a href="#contact">קבלו הצעת מחיר לדף נחיתה</a>
            </Button>
          </div>

          {/* Left - feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border/40 rounded-2xl p-4 hover:border-primary/40 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <f.icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="font-bold text-sm text-foreground mb-1">{f.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageSection;
