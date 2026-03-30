const projects = [
  {
    title: "בניית אתר לרשת מעונות",
    category: "אתר תדמית",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    title: "אתר רב לשוני הפצת סרטים",
    category: "אתר קטלוגי",
    img: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80",
  },
  {
    title: "אתר תדמית ושירותים",
    category: "אתר תדמית",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "חנות אונליין מייבשי שיער",
    category: "חנות אונליין",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "ORI רילוקיישן",
    category: "אתר תדמית",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "חנות אונליין אופנה",
    category: "חנות אונליין",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    title: "אתר למסעדות כרמים",
    category: "אתר מסעדה",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    title: "אתר DJ לאירועים",
    category: "אתר תדמית",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  },
  {
    title: "אתר לחברה קבלנית",
    category: "אתר תדמית",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-border/40"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/75 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-3 text-sm md:text-base">{project.title}</p>
                </div>
              </div>
              <div className="px-3 py-2 bg-card">
                <span className="text-xs text-muted-foreground">{project.category}</span>
                <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="text-primary hover:underline font-semibold">רוצים אתר כזה? דברו איתנו ←</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
