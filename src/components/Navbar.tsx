import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "השירותים שלנו", href: "#services" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "למה אנחנו?", href: "#benefits" },
  { label: "תהליך עבודה", href: "#process" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צרו קשר", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-2xl font-bold text-primary">
          ∞ clicky
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          className="hidden md:inline-flex"
          asChild
        >
          <a href="#contact">בניית אתרים לעסקים</a>
        </Button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-2" asChild>
            <a href="#contact">בניית אתרים לעסקים</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
