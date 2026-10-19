import { Globe2, LayoutTemplate, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "אתר תדמית",
    description: "אתר מדויק שמציג את העסק, בונה אמון ומוביל את המבקר לצעד הבא.",
    detail: "לעסקים שרוצים נוכחות דיגיטלית ברורה ומקצועית.",
  },
  {
    icon: LayoutTemplate,
    title: "דף נחיתה",
    description: "עמוד ממוקד לקמפיין, שירות או מוצר — עם מסר חד וקריאה אחת לפעולה.",
    detail: "מתאים לקידום ממומן, השקות ואיסוף פניות.",
  },
  {
    icon: ShoppingBag,
    title: "חנות אונליין",
    description: "חוויית קנייה נעימה שמקלה על הלקוחות להבין, לבחור ולבצע רכישה.",
    detail: "למותגים שרוצים למכור בצורה מסודרת וברורה.",
  },
];

const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="reveal mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-bold tracking-[0.14em] text-primary">WHAT WE BUILD</p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl">
          פחות רעש. יותר כוונה.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
          כל פרויקט מתחיל בשאלה פשוטה: מה אנחנו רוצים שהאדם הנכון יבין ויעשה כשהוא מגיע לכאן?
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={"reveal " + delayClasses[index] + " group rounded-[1.5rem] border border-border/70 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-foreground/[0.06]"}
          >
            <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
              <service.icon size={21} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
            <p className="mt-7 border-t border-border/70 pt-4 text-xs font-medium leading-6 text-foreground/70">{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

