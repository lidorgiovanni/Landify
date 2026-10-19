import { buildWhatsAppUrl } from "@/lib/leads";

const navItems = [
  { href: "#services", label: "שירותים" },
  { href: "#landing", label: "דפי נחיתה" },
  { href: "#portfolio", label: "עבודות" },
  { href: "#process", label: "תהליך" },
  { href: "#contact", label: "יצירת קשר" },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-navy">
    <div className="container mx-auto px-4 py-12 md:px-8">
      <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div>
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white" aria-label="LANDIFY — לדף הבית">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-black text-white">L</span>
            Landify
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
            עיצוב ובניית אתרים, דפי נחיתה וחנויות אונליין לעסקים שרוצים להיראות מדויק ולהיות פשוטים לפנייה.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-white/45">ניווט</p>
          <nav className="mt-4 space-y-2.5" aria-label="ניווט תחתון">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-white/60 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-white/45">יצירת קשר</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href={buildWhatsAppUrl("היי, הגעתי מאתר LANDIFY.")} target="_blank" rel="noreferrer" className="block text-white/70 transition hover:text-primary" dir="ltr">054-349-5645</a>
            <a href="mailto:landify@gmail.com" className="block text-white/70 transition hover:text-primary">landify@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/30">
        © {new Date().getFullYear()} LANDIFY. כל הזכויות שמורות.
      </div>
    </div>
  </footer>
);

export default Footer;

