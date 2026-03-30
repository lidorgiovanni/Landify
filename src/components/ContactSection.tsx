import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right - big text */}
          <div>
            <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">צרו קשר</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              מוכנים להתחיל?<br />
              <span className="text-primary">דברו איתנו.</span>
            </h2>
            <p className="text-primary-foreground/60 mb-10 leading-relaxed">
              השאירו פרטים ונחזור אליכם תוך שעות ספורות עם ייעוץ אישי חינם.
            </p>
            <div className="space-y-5">
              <a href="https://wa.me/972543493564" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40">טלפון / וואטסאפ</p>
                  <p className="font-semibold text-primary-foreground" dir="ltr">054-3493564</p>
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
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="שם מלא" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
                <Input type="tel" placeholder="טלפון" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
              </div>
              <Input type="email" placeholder="אימייל" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary" />
              <Textarea
                placeholder="ספרו לנו על הפרויקט שלכם..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary min-h-[120px]"
              />
              <Button className="w-full text-base py-6 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold">
                שלחו פרטים — ונחזור אליכם ✓
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
