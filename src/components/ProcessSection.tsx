const steps = [
  { num: "01", title: "מחדדים את המטרה", desc: "מזהים למי האתר מדבר, מה חשוב לומר ומהו הצעד שאנחנו רוצים שיקרה." },
  { num: "02", title: "מעצבים ובונים", desc: "מתרגמים את המותג למסכים נקיים, עם היררכיה נכונה וחוויית מובייל מדויקת." },
  { num: "03", title: "בודקים ומשיקים", desc: "עוברים יחד על התוצאה, בודקים פניות ומחברים מדידה לפני שמתחילים להזרים תנועה." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="reveal mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-primary">HOW WE WORK</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl">תהליך קצר. החלטות נכונות.</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">שקיפות לאורך הדרך, בלי להעמיס שלבים שלא מקדמים את האתר.</p>
      </div>

      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.num} className={"reveal reveal-delay-" + (index + 1) + " rounded-[1.5rem] border border-border/70 bg-card p-7"}>
            <span className="text-sm font-bold tracking-[0.16em] text-primary">{step.num}</span>
            <h3 className="mt-12 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;

