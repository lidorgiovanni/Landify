import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "השירותים שלנו", href: "#services" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "התהליך שלנו", href: "#process" },
  { label: "למה Landify?", href: "#benefits" },
  { label: "לקוחות ממליצים", href: "#testimonials" },
  { label: "צרו קשר", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-navy/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-2xl font-bold text-primary">
          ⬡ Landify
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-primary-foreground/80 hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#contact">בניית אתר לעסק</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-2 bg-primary text-primary-foreground" asChild>
            <a href="#contact">בניית אתר לעסק</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
