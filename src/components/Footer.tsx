const Footer = () => {
  return (
    <footer className="py-10 bg-navy border-t border-primary/10">
      <div className="container mx-auto px-4 text-center">
        <a href="#" className="text-2xl font-bold text-primary">⬡ Landify</a>
        <p className="text-primary-foreground/50 text-sm mt-3">
          מעל 20 שנה ניסיון מוכח בעולם הדיגיטל. בניית אתרים מקצועית בוורדפרס.
        </p>
        <p className="text-primary-foreground/30 text-xs mt-6">
          © {new Date().getFullYear()} Landify בניית אתרים. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
