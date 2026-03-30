import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PHONE = "972543495645";

const messages = [
  { label: "🌐 אני רוצה אתר חדש", text: "היי! אני מעוניין/ת בבניית אתר חדש לעסק שלי. אשמח לשמוע פרטים ומחירים 😊" },
  { label: "🛒 אני רוצה חנות אונליין", text: "היי! אני מחפש/ת לבנות חנות אונליין. אפשר לקבל פרטים?" },
  { label: "📄 אני רוצה דף נחיתה", text: "היי! אני מעוניין/ת בדף נחיתה לקמפיין. אפשר לשמוע פרטים ומחירים?" },
  { label: "🔧 יש לי אתר קיים לשיפור", text: "היי! יש לי אתר קיים ואני רוצה לשפר אותו. אשמח לייעוץ 🙏" },
];

const WaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? "w-7 h-7 fill-white"}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [hasNotif, setHasNotif] = useState(true);

  // auto-open after 6s if user hasn't interacted
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setOpen(!open);
    setHasNotif(false);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
        {open && (
          <div
            className="bg-card border border-border rounded-2xl shadow-2xl p-4 w-72 animate-fade-up"
            dir="rtl"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <WaIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Landify</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                    מחובר עכשיו
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 mb-3 text-sm text-foreground border border-green-100">
              היי! 👋 במה אפשר לעזור? בחר/י נושא ונדבר ישירות בוואטסאפ:
            </div>

            <div className="flex flex-col gap-2">
              {messages.map((m) => (
                <a
                  key={m.label}
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent(m.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right text-sm bg-secondary hover:bg-green-500 hover:text-white text-foreground font-medium px-3 py-2.5 rounded-xl transition-all duration-200 border border-border/40"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleOpen}
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110 animate-pulse-ring"
          aria-label="פתח וואטסאפ"
        >
          <WaIcon />
          {hasNotif && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">
              1
            </span>
          )}
        </button>
      </div>

      {/* Mobile sticky bottom CTA — removed */}
    </>
  );
};

export default WhatsAppButton;
