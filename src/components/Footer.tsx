const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <a href="#" className="text-2xl font-bold text-primary">∞ clicky</a>
        <p className="text-muted-foreground text-sm mt-3">
          מעל 20 שנה ניסיון מוכח בעולם הדיגיטל. בניית אתרים מקצועית בוורדפרס.
        </p>
        <p className="text-muted-foreground text-xs mt-6">
          © {new Date().getFullYear()} קליקי בניית אתרים. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
