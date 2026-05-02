import { useState } from "react";

const FALLBACK = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80";

const projects = [
  { title: "Lian Rebekah Nails", category: "אתר קביעת תורים", img: "/lian-nails.png", url: "https://lianjovany6680-lgtm.github.io/lianrebekahnails/" },
  { title: "Airflow Matan", category: "דף נחיתה", img: "/airflow-matan.png", url: "https://airflowmatan.netlify.app/" },
];

const categories = ["הכל", "דף נחיתה", "אתר קביעת תורים"];

const PortfolioSection = () => {
  const [active, setActive] = useState("הכל");
  const filtered = active === "הכל" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="reveal text-center mb-10">
          <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">תיק עבודות</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">פרויקטים נבחרים</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            עיצוב בהתאמה אישית שמספר את הסיפור שלכם + SEO שגורם לגוגל להתאהב.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <a
              key={project.title}
              href={(project as any).url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-border/40 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4">
                  <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center text-sm md:text-base">{project.title}</p>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-primary text-white px-3 py-1 rounded-full">{project.category}</span>
                </div>
              </div>
              <div className="px-3 py-2.5 bg-card flex items-center justify-between">
                <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
                <span className="text-xs text-muted-foreground shrink-0 mr-2">{project.category}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
            רוצים אתר כזה? דברו איתנו ←
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
