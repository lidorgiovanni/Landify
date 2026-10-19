import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { trackLeadIntent } from "@/lib/analytics";
import { buildWhatsAppUrl, openWhatsApp } from "@/lib/leads";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  details: string;
};

const emptyForm: FormValues = { name: "", phone: "", email: "", service: "", details: "" };

const services = [
  { value: "אתר תדמית", label: "אתר תדמית" },
  { value: "דף נחיתה", label: "דף נחיתה" },
  { value: "חנות אונליין", label: "חנות אונליין" },
  { value: "שיפור אתר קיים", label: "שיפור אתר קיים" },
  { value: "אחר", label: "משהו אחר" },
];

const ContactSection = () => {
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "היי LANDIFY, הגעתי מהאתר ואשמח לדבר על פרויקט.",
      "",
      "שם: " + form.name,
      "טלפון: " + form.phone,
      "אימייל: " + (form.email || "לא נמסר"),
      "שירות: " + (form.service || "לא נבחר"),
      "פרטים: " + (form.details || "לא נמסרו"),
    ].join("\\n");

    trackLeadIntent("form", form.service);
    openWhatsApp(message);
    setSubmitted(true);
  };

  const phoneMessage = "היי, הגעתי מאתר LANDIFY. אשמח לשיחת היכרות על אתר לעסק שלי.";

  return (
    <section id="contact" className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal-right">
          <p className="mb-3 text-xs font-bold tracking-[0.14em] text-primary">CONTACT</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
            יש רעיון? בואו נהפוך אותו לעמוד שעובד.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/65">
            מלאו את הפרטים ואנחנו נפתח לכם הודעה מוכנה בוואטסאפ. השליחה הסופית נשארת בשליטה שלכם.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={buildWhatsAppUrl(phoneMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackLeadIntent("whatsapp", "contact_phone")}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-primary/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Phone size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-white/45">טלפון / וואטסאפ</span>
                <span className="mt-1 block font-semibold text-white" dir="ltr">054-349-5645</span>
              </span>
            </a>
            <a
              href="mailto:landify@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-primary/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Mail size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-white/45">אימייל</span>
                <span className="mt-1 block font-semibold text-white">landify@gmail.com</span>
              </span>
            </a>
          </div>
        </div>

        <div className="reveal-left rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/10 sm:p-8">
          {submitted ? (
            <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 size={30} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">הודעה מוכנה בוואטסאפ</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
                עברו לחלון שנפתח, בדקו את הפרטים ולחצו על שליחה כדי להשלים את הפנייה.
              </p>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm(emptyForm); }}
                className="mt-7 text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                לשלוח פנייה נוספת
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <p className="text-xl font-semibold text-white">ספרו לנו על הפרויקט</p>
                <p className="mt-2 text-sm leading-6 text-white/55">הפרטים יעברו רק להודעה שאתם שולחים ב־WhatsApp.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white">שם מלא</label>
                  <input id="contact-name" name="name" value={form.name} onChange={(event) => update("name", event.target.value)} required autoComplete="name" className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-2 focus:ring-primary/25" placeholder="איך נקרא לך?" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-white">טלפון</label>
                  <input id="contact-phone" name="phone" value={form.phone} onChange={(event) => update("phone", event.target.value)} required type="tel" autoComplete="tel" inputMode="tel" className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-2 focus:ring-primary/25" placeholder="050-000-0000" dir="ltr" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white">אימייל <span className="font-normal text-white/45">(אופציונלי)</span></label>
                  <input id="contact-email" name="email" value={form.email} onChange={(event) => update("email", event.target.value)} type="email" autoComplete="email" className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-2 focus:ring-primary/25" placeholder="you@business.co.il" dir="ltr" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-white">במה מתעניינים?</label>
                  <select id="contact-service" name="service" value={form.service} onChange={(event) => update("service", event.target.value)} className="w-full rounded-xl border border-white/15 bg-[hsl(194_100%_10%)] px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25">
                    <option value="">בחירת שירות</option>
                    {services.map((service) => <option key={service.value} value={service.value}>{service.label}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contact-details" className="mb-2 block text-sm font-medium text-white">כמה מילים על הפרויקט <span className="font-normal text-white/45">(אופציונלי)</span></label>
                <textarea id="contact-details" name="details" value={form.details} onChange={(event) => update("details", event.target.value)} rows={4} className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-2 focus:ring-primary/25" placeholder="מה האתר צריך לעשות בשבילכם?" />
              </div>
              <button type="submit" className="w-full rounded-xl bg-primary px-5 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                להכין הודעה בוואטסאפ
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

