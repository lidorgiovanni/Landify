import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          מחפשים בניית אתר <span className="text-gradient">תפור על העסק?</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          השאירו פרטים וקבלו ייעוץ אישי חינם.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="שם מלא" className="bg-card border-border" />
            <Input type="tel" placeholder="טלפון" className="bg-card border-border" />
            <Input type="email" placeholder="אימייל" className="bg-card border-border" />
            <Textarea placeholder="ספרו לנו על הפרויקט שלכם..." className="bg-card border-border min-h-[120px]" />
            <Button className="w-full text-lg py-6">שלחו פנייה</Button>
          </form>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">טלפון</p>
                <p className="font-semibold" dir="ltr">050-123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">אימייל</p>
                <p className="font-semibold">info@clicky.co.il</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">מיקום</p>
                <p className="font-semibold">ישראל</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
