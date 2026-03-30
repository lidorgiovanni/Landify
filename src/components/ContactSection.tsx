import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          מחפשים בניית אתר ש"תפור" על העסק שלכם?
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          השאירו פרטים וקבלו ייעוץ אישי חינם.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="שם מלא" className="bg-card border-border" />
            <Input type="tel" placeholder="טלפון" className="bg-card border-border" />
            <Input type="email" placeholder="אימייל" className="bg-card border-border" />
            <Textarea placeholder="ספרו לנו על הפרויקט שלכם..." className="bg-card border-border min-h-[120px]" />
            <Button className="w-full text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90">קליקי!</Button>
          </form>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">טלפון</p>
                <a href="https://wa.me/972543493564" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline" dir="ltr">054-3493564</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">אימייל</p>
                <p className="font-semibold text-foreground">info@clicky.co.il</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">מיקום</p>
                <p className="font-semibold text-foreground">ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
