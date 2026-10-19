import { BarChart3, MessageCircleMore, MousePointer2, Smartphone } from "lucide-react";

const features = [
  { icon: MousePointer2, title: "פעולה אחת ברורה", text: "הגולש מבין מיד מה הצעד הבא — להשאיר פרטים, לקבוע שיחה או לפתוח וואטסאפ." },
  { icon: Smartphone, title: "קודם כל מובייל", text: "המסר, הכפתורים והטופס נבנים כך שיהיו פשוטים ונוחים גם מהטלפון." },
  { icon: MessageCircleMore, title: "שיחה במקום מבוי סתום", text: "מסלול פנייה אמיתי שמכין הודעה בוואטסאפ — בלי הבטחות על פנייה שנשלחה." },
  { icon: BarChart3, title: "מוכנים למדוד", text: "אפשר לחבר Google Analytics ואירועי לידים כדי לדעת מה עובד לפני שמגדילים תקציב." },
];

const LandingPageSection = () => (
  <section id="landing" className="section-padding border-y border-border/60 bg-background">
    <div className="container mx-auto grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="reveal-right">
        <p className="mb-3 text-xs font-bold tracking-[0.14em] text-primary">FOR PAID CAMPAIGNS</p>
        <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground md:text-5xl">
          פרסום טוב מתחיל בעמוד שלא מבזבז את הקליק.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
          קמפיין בגוגל יכול להביא אנשים רלוונטיים, אבל האתר צריך להמשיך את אותה הבטחה: מסר עקבי, מהירות, הוכחה אמינה ודרך קצרה ליצור קשר.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full border border-foreground px-5 py-3 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          להכין דף לקמפיין
        </a>
      </div>

      <div className="reveal-left grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border/70 bg-secondary/55 p-5">
            <feature.icon className="mb-7 text-primary" size={21} strokeWidth={1.75} aria-hidden="true" />
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default LandingPageSection;

