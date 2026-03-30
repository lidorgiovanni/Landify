const projects = [
  { title: "בניית אתר לרשת מעונות", category: "אתר תדמית", url: "https://example.com", site: "maonot.co.il", img: "https://picsum.photos/seed/maonot/800/600" },
  { title: "אתר רב לשוני הפצת סרטים", category: "אתר קטלוגי", url: "https://example.com", site: "films-dist.co.il", img: "https://picsum.photos/seed/films/800/600" },
  { title: "אתר תדמית ושירותים", category: "אתר תדמית", url: "https://example.com", site: "services-pro.co.il", img: "https://picsum.photos/seed/services/800/600" },
  { title: "חנות אונליין מייבשי שיער", category: "חנות אונליין", url: "https://example.com", site: "hairdryer-shop.co.il", img: "https://picsum.photos/seed/hairdryer/800/600" },
  { title: "ORI רילוקיישן", category: "אתר תדמית", url: "https://example.com", site: "ori-relocation.co.il", img: "https://picsum.photos/seed/ori/800/600" },
  { title: "חנות אונליין דגם", category: "חנות אונליין", url: "https://example.com", site: "online-store.co.il", img: "https://picsum.photos/seed/store/800/600" },
  { title: "אתר למסעדות כרמים", category: "אתר מסעדה", url: "https://example.com", site: "kramim-rest.co.il", img: "https://picsum.photos/seed/kramim/800/600" },
  { title: "אתר DJ לאירועים", category: "אתר תדמית", url: "https://example.com", site: "dj-events.co.il", img: "https://picsum.photos/seed/djevents/800/600" },
  { title: "אתר לחברה קבלנית", category: "אתר תדמית", url: "https://example.com", site: "contractor.co.il", img: "https://picsum.photos/seed/contractor/800/600" },
];

const gradients = [
  "from-primary/15 to-primary/5",
  "from-sky-400/15 to-sky-400/5",
  "from-teal-400/15 to-teal-400/5",
  "from-cyan-400/15 to-cyan-400/5",
  "from-emerald-400/15 to-emerald-400/5",
  "from-blue-400/15 to-blue-400/5",
  "from-indigo-400/15 to-indigo-400/5",
  "from-primary/10 to-sky-400/5",
  "from-teal-400/10 to-primary/5",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          פרויקטים נבחרים
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          עיצוב בהתאמה אישית שמספר את הסיפור שלכם + SEO שגורם לגוגל להתאהב.<br />
          גללו לראות אתרים שבנינו.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border border-border/40"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all flex flex-col items-center justify-center gap-1">
                  <p className="text-primary-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">{project.title}</p>
                  <p className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs">{project.site}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="text-primary hover:underline font-semibold">לכל העבודות ←</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
