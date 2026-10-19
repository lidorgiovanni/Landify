import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "למה דף נחיתה", href: "#landing" },
  { label: "עבודות", href: "#portfolio" },
  { label: "תהליך", href: "#process" },
  { label: "שאלות", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // find active section
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white" aria-label="LANDIFY — לדף הבית">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-black text-white">L</span>
          Landify
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.07] px-2 py-1 backdrop-blur-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                active === item.href
                  ? "bg-primary text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/15"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button size="sm" className="hidden rounded-full bg-primary px-5 text-white shadow-md shadow-primary/30 hover:bg-primary/90 lg:flex" asChild>
          <a href="#contact">שיחת היכרות</a>
        </Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-navy/98 px-4 pb-5 pt-2 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2.5 transition-colors border-b border-white/5 text-sm ${
                active === item.href ? "text-primary font-semibold" : "text-white/80 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-4 w-full rounded-full bg-primary text-white" asChild>
            <a href="#contact" onClick={() => setIsOpen(false)}>שיחת היכרות</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

