# LANDIFY

אתר תדמית ודפי נחיתה לעסקי LANDIFY, בנוי ב־React + Vite + Tailwind.

## הרצה מקומית

הריצו npm ci ואחריו npm run dev.

## מדידת לידים מגוגל

האתר שולח אירוע generate_lead כשמבקר לוחץ על CTA של WhatsApp או מכין הודעה דרך הטופס. כדי שהאירועים יופיעו ב־Google Analytics, יש להגדיר בפריסת הייצור את משתנה הסביבה:

VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

לאחר הפריסה יש לוודא ב־Google Analytics DebugView שהאירוע מתקבל, ואז לסמן generate_lead כהמרה ולייבא אותו ל־Google Ads.

## התנהגות טופס הפנייה

הטופס אינו מציג אישור מדומה. הוא מכין הודעת WhatsApp עם פרטי הלקוח, והלקוח עצמו מאשר ושולח אותה ב־WhatsApp.

