import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "דף נחיתה", href: "#landing" },
  { label: "עבודות", href: "#portfolio" },
  { label: "תהליך", href: "#process" },
  { label: "מחירים", href: "#pricing" },
  { label: "המלצות", href: "#testimonials" },
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
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-black animate-pulse-ring">L</span>
          Landify
        </a>

        <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm px-4 py-1.5 rounded-full transition-all ${
                active === item.href
                  ? "bg-primary text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/15"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button size="sm" className="hidden lg:flex bg-primary text-white hover:bg-primary/90 rounded-full px-5 shadow-md shadow-primary/30" asChild>
          <a href="#contact">התחילו עכשיו</a>
        </Button>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-1">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md px-4 pb-5 pt-2 border-t border-white/10">
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
          <Button className="w-full mt-4 bg-primary text-white rounded-full" asChild>
            <a href="#contact">התחילו עכשיו</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
