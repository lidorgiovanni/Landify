const projects = [
  { title: "בניית אתר לרשת מעונות", category: "אתר תדמית" },
  { title: "אתר רב לשוני הפצת סרטים", category: "אתר קטלוגי" },
  { title: "אתר תדמית ושירותים", category: "אתר תדמית" },
  { title: "חנות אונליין מייבשי שיער", category: "חנות אונליין" },
  { title: "ORI רילוקיישן", category: "אתר תדמית" },
  { title: "חנות אונליין דגם", category: "חנות אונליין" },
  { title: "אתר למסעדות כרמים", category: "אתר מסעדה" },
  { title: "אתר DJ לאירועים", category: "אתר תדמית" },
  { title: "אתר לחברה קבלנית", category: "אתר תדמית" },
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
            <div
              key={project.title}
              className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border border-border/40"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center relative`}>
                <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">🌐</span>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all flex items-center justify-center">
                  <p className="text-primary-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity">{project.title}</p>
                </div>
              </div>
            </div>
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
