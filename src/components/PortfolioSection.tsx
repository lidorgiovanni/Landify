import React from "react";

const thumb = (url: string) =>
  `https://image.thum.io/get/width/800/crop/600/${url}`;

const projects = [
  { title: "בניית אתר לרשת מעונות", category: "אתר תדמית", url: "https://wolt.com", site: "wolt.com", img: thumb("https://wolt.com") },
  { title: "אתר רב לשוני הפצת סרטים", category: "אתר קטלוגי", url: "https://yes.co.il", site: "yes.co.il", img: thumb("https://yes.co.il") },
  { title: "אתר תדמית ושירותים", category: "אתר תדמית", url: "https://fiverr.com", site: "fiverr.com", img: thumb("https://fiverr.com") },
  { title: "חנות אונליין מייבשי שיער", category: "חנות אונליין", url: "https://shein.com", site: "shein.com", img: thumb("https://shein.com") },
  { title: "ORI רילוקיישן", category: "אתר תדמית", url: "https://airbnb.com", site: "airbnb.com", img: thumb("https://airbnb.com") },
  { title: "חנות אונליין דגם", category: "חנות אונליין", url: "https://zara.com", site: "zara.com", img: thumb("https://zara.com") },
  { title: "אתר למסעדות כרמים", category: "אתר מסעדה", url: "https://rest.co.il", site: "rest.co.il", img: thumb("https://rest.co.il") },
  { title: "אתר DJ לאירועים", category: "אתר תדמית", url: "https://eventbrite.com", site: "eventbrite.com", img: thumb("https://eventbrite.com") },
  { title: "אתר לחברה קבלנית", category: "אתר תדמית", url: "https://delek.co.il", site: "delek.co.il", img: thumb("https://delek.co.il") },
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

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-border/40 block"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" />}
        <img
          src={project.img}
          alt={project.title}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/75 transition-all duration-300 flex flex-col items-center justify-center gap-2">
          <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-3 text-sm md:text-base">{project.title}</p>
          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/30 px-2 py-0.5 rounded-full">{project.site}</span>
        </div>
      </div>
      <div className="px-3 py-2 bg-card">
        <span className="text-xs text-muted-foreground">{project.category}</span>
        <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
      </div>
    </a>
  );
};

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
            <ProjectCard key={project.title} project={project} />
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
