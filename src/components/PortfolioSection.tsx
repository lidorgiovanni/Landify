const projects = [
  { title: "אתר לרשת מעונות", category: "אתר תדמית" },
  { title: "אתר רב לשוני הפצת סרטים", category: "אתר קטלוגי" },
  { title: "אתר תדמית ושירותים", category: "אתר תדמית" },
  { title: "חנות אונליין מייבשי שיער", category: "חנות אונליין" },
  { title: "אתר רילוקיישן", category: "אתר תדמית" },
  { title: "חנות אונליין דגם", category: "חנות אונליין" },
  { title: "אתר למסעדות כרמים", category: "אתר מסעדה" },
  { title: "אתר DJ לאירועים", category: "אתר תדמית" },
];

const colors = [
  "from-primary/20 to-primary/5",
  "from-blue-500/20 to-blue-500/5",
  "from-purple-500/20 to-purple-500/5",
  "from-emerald-500/20 to-emerald-500/5",
  "from-orange-500/20 to-orange-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-cyan-500/20 to-cyan-500/5",
  "from-amber-500/20 to-amber-500/5",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          פרויקטים <span className="text-gradient">נבחרים</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          עיצוב בהתאמה אישית שמספר את הסיפור שלכם + SEO שגורם לגוגל להתאהב.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden group cursor-pointer hover:glow-border transition-all duration-300`}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center p-4`}>
                <span className="text-4xl opacity-40 group-hover:opacity-70 transition-opacity">🌐</span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm">{project.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="text-primary hover:underline font-medium">לכל העבודות ←</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
