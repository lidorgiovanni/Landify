const items = [
  "✓ מעל 200 אתרים שנבנו",
  "✓ דירוג 4.9 בגוגל",
  "✓ מסירה תוך 5 ימים",
  "✓ תמיכה 24/7",
  "✓ ללא עלויות נסתרות",
  "✓ 20+ שנות ניסיון",
];

const TrustBar = () => (
  <div className="bg-primary/10 border-y border-primary/20 py-3">
    <div className="marquee-wrapper">
      <div className="marquee-track text-sm font-medium text-primary whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="shrink-0 px-6">{item}</span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
