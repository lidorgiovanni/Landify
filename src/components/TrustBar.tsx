const items = [
  "אתרי תדמית",
  "דפי נחיתה",
  "חנויות אונליין",
  "חוויית משתמש",
  "מסלול פנייה ברור",
];

const TrustBar = () => (
  <div className="border-y border-primary/15 bg-primary/[0.06] py-4">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-xs font-semibold tracking-[0.08em] text-foreground/70 sm:text-sm">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TrustBar;

