import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right - big text */}
          <div className="reveal-right">
            <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">צרו קשר</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              מוכנים להתחיל?<br />
              <span className="text-primary">דברו איתנו.</span>
            </h2>
            <p className="text-primary-foreground/60 mb-10 leading-relaxed">
              השאירו פרטים ונחזור אליכם תוך שעות ספורות עם ייעוץ אישי חינם.
            </p>
            <div className="space-y-5">
              <a href="https://wa.me/972543495645" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40">טלפון / וואטסאפ</p>
                  <p className="font-semibold text-primary-foreground" dir="ltr">054-349-5645</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40">אימייל</p>
                  <p className="font-semibold text-primary-foreground">info@clicky.co.il</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left - form */}
          <div className="reveal-left bg-white/5 border border-white/10 rounded-3xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">הפרטים נשלחו בהצלחה!</h3>
                <p className="text-primary-foreground/60 text-sm">נחזור אליכם תוך שעות ספורות 🙌</p>
                <button onClick={() => setSent(false)} className="text-primary text-sm hover:underline mt-2">שלח פנייה נוספת</button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <Input required placeholder="שם מלא" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                  <Input required type="tel" placeholder="טלפון" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                </div>
                <Input type="email" placeholder="אימייל" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                <select className="w-full rounded-md bg-white/10 border border-white/20 text-white/70 px-3 py-2 text-sm focus:outline-none focus:border-primary">
                  <option value="" className="bg-[hsl(194_100%_10%)]">איזה שירות מעניין אתכם?</option>
                  <option value="landing" className="bg-[hsl(194_100%_10%)]">דף נחיתה — ₪790</option>
                  <option value="site" className="bg-[hsl(194_100%_10%)]">אתר תדמית — ₪2,490</option>
                  <option value="shop" className="bg-[hsl(194_100%_10%)]">חנות אונליין — ₪4,490</option>
                  <option value="other" className="bg-[hsl(194_100%_10%)]">אחר</option>
                </select>
                <Textarea
                  placeholder="ספרו לנו על הפרויקט שלכם..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary min-h-[100px]"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-base py-6 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold transition-all hover:scale-[1.02] disabled:opacity-70"
                >
                  {loading ? "שולח..." : "שלחו פרטים — ונחזור אליכם ✓"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
