# Facebook Social — דף נחיתה ב־Next.js

עמוד בעברית (RTL) המבוסס על העיצוב שאושר בשיחה, עם תמונת הטלפון המקורית, כפתורי WhatsApp, ארבע שאלות נפתחות וחלון הצעה נגיש.

## מצב הפרויקט

הקוד נכתב והוכנה תצוגת דפדפן מקומית מתוך רכיבי העמוד. **הפרויקט טרם פורסם ב־GitHub או ב־Vercel.**

סביבת היצירה לא יכלה להתחבר למאגר npm, לכן לא בוצעה בה התקנת חבילות או בניית Next.js מלאה. הבנייה הראשונה צריכה להתבצע אצלכם או ב־Vercel. ראו `CHECKS.md` לפירוט הבדיקות שבוצעו והבדיקות שנותרו.

## פרטי הפרויקט

- Next.js 16.3.4, App Router, TypeScript, React 19.
- Node.js 22.x.
- לא נדרשים מסד נתונים, מפתחות API או משתני סביבה.
- `public/phone-hero.webp` הוא איור הטלפון מהגרסה שאושרה — לא צילום של כל העמוד.
- כל הטקסטים, הכפתורים והשאלות הם HTML אמיתי וניתנים לעריכה.
- אין איסוף סיסמאות ואין טופס התחברות.
- מותקן Meta Pixel למדידת הקמפיין בלבד: צפייה בעמוד, ולחיצה על כפתור וואטסאפ. לא נאסף מידע שהמבקר מקליד, ואין כלי אנליטיקה נוסף.
- המעבר לוואטסאפ מתבצע רק בעקבות לחיצה, ולא באופן אוטומטי.

## ההגדרות שכבר הוזנו

ב־`lib/site.ts` נמצאים מספר הטלפון והודעת הפתיחה:

```text
050-467-4859
היי יש לי חשבון פייסבוק אשמח לפרטים נוספים
```

הפופ־אפ מוגדר להיפתח אחרי 6 שניות, פעם אחת בכל סשן של הלשונית כאשר sessionStorage זמין. ניתן לסגור אותו באיקס, בלחיצה על הרקע או ב־Escape, ולפתוח שוב מהכפתור בתחתית העמוד. כאשר האחסון חסום, שאר הפעולות ממשיכות לעבוד, אך הזיכרון בין טעינות אינו נשמר.

לשינוי העיכוב ערכו `popupDelayMs`. לכיבוי ההופעה האוטומטית הגדירו `popupEnabled: false`. הכפתור הידני ימשיך לעבוד.

מזהה ה־Pixel נמצא באותו קובץ תחת `pixelId`. לכיבוי המדידה הגדירו `pixelEnabled: false` — הסניפט, תמונת ה־noscript והמאזין ללחיצות יוסרו מהעמוד לגמרי, והכפתורים ימשיכו לעבוד כרגיל. `pixelClickEvent` קובע את שם האירוע הנשלח בלחיצה על כפתור וואטסאפ. המזהה הוא ציבורי ונשלח לכל מבקר, ולכן אין צורך במשתנה סביבה. אין להכניס לקובץ הזה סיסמה, מפתח API או אסימון Conversions API.

## GitHub — העלאה דרך הדפדפן

1. חלצו את ה־ZIP. היכנסו לתיקייה שבה נמצא `package.json`.
2. בחשבון GitHub שלכם צרו מאגר חדש בשם `facebook-social-landing`, רצוי Private.
3. השאירו את אפשרויות יצירת README, gitignore ורישיון כבויות — הקבצים הדרושים כבר כלולים.
4. במסך המאגר הריק לחצו **uploading an existing file**. במאגר עם קבצים: **Add file → Upload files**.
5. גררו את **תוכן תיקיית הפרויקט** — `app`, `components`, `lib`, `public` וכל קובצי השורש. אל תעלו את ה־ZIP, תיקיית־אב שעוטפת את הפרויקט, `node_modules` או `.next`.
6. כתבו הודעת Commit, למשל `Add Next.js landing page`, ושמרו לענף `main` של המאגר החדש.
7. ודאו שהקובץ `package.json` נמצא בשורש המאגר, לצד ארבע התיקיות.

## Vercel — ייבוא מ־GitHub

1. פתחו את Vercel ובחרו **Add New → Project** / **New Project**.
2. חברו את GitHub אם הוא אינו מחובר, ובחרו **Import** ליד `facebook-social-landing`.
3. אם המאגר הפרטי אינו מופיע, הגדירו באפליקציית Vercel ב־GitHub גישה למאגר הזה. אין צורך לתת גישה לכל המאגרים.
4. השתמשו בהגדרות הבאות:

| שדה | ערך |
|---|---|
| Project Name | facebook-social-landing |
| Framework Preset | Next.js |
| Root Directory | השורש `./` — המקום שבו נמצא package.json |
| Install Command | ברירת המחדל או `npm install` |
| Build Command | `npm run build` |
| Output Directory | ברירת המחדל של Next.js, ללא Override |
| Node.js Version | 22.x |
| Environment Variables | אין צורך להוסיף |

5. בדקו את חשבון האחסון והתוכנית. לפי תנאי Vercel שנבדקו בעת ההכנה, Hobby מיועדת לשימוש אישי ולא מסחרי. אין לבצע שדרוג בתשלום ללא אישור בעל החשבון.
6. לחצו **Deploy** והמתינו לתוצאת הבנייה. רק מצב **Ready** ופתיחת כתובת האתר מאמתים שהפרסום הצליח.
7. במקרה של שגיאה, שמרו את הודעת השגיאה הראשונה מתוך Build Logs. אין לשנות את Output Directory ל־public כדי להסתיר שגיאת Build.

לא מצורף package-lock.json משום שלא הייתה גישה למאגר npm בסביבת היצירה. בהרצה מקומית `npm install` ייצור אותו; מומלץ להוסיף אותו לאחר מכן למאגר. אין לבחור `npm ci` לפני שיש lockfile תקין.

## הרצה מקומית — חלופה למי שמעדיף לבדוק לפני הפרסום

לאחר התקנת Node.js 22 פתחו Terminal בתיקיית הפרויקט והריצו:

```bash
npm install
npm run typecheck
npm run build
npm run start
```

פתחו `http://localhost:3000` במחשב. למצב פיתוח עם עדכון אוטומטי השתמשו ב־`npm run dev` במקום שתי הפקודות האחרונות.

## בדיקה אחרי הפרסום

פתחו את **כתובת האתר**, לא את כתובת Dashboard, מהטלפון ובחלון גלישה פרטית. ודאו שהעמוד נגיש בלי התחברות, שהאיור נטען ושכל ארבע השאלות נפתחות. בדקו פתיחה וסגירה של הפופ־אפ. לחצו על כפתור WhatsApp, בדקו שהמספר והטקסט נכונים — אין צורך לשלוח הודעה לצורך הבדיקה.

אם עמוד Production דורש התחברות, בדקו את **Project Settings → Deployment Protection** של הפרויקט הזה. אל תסירו הגנות מפרויקטים אחרים. קישור שיתוף זמני אינו תחליף לכתובת Production קבועה.

לאחר בדיקת כתובת Production וההצעה, זו הכתובת שמיועדת לשדה Website URL בקמפיין — לא קישור wa.me הישיר.

## תחזוקה והגדרות תוכן

- `app/page.tsx`: הכותרות, כרטיסי המידע, הגילוי על השימוש והעברת הגישה, שאלות ותשובות.
- `components/OfferPopup.tsx`: תוכן הפופ־אפ.
- `lib/popup.ts`: לוגיקת החלון, סגירה, פוקוס וזיכרון סשן.
- `lib/site.ts`: המספר, הודעת הפתיחה וזמן הפופ־אפ.
- `app/globals.css`: העיצוב וההתאמה לרוחבי מסך.
- `app/layout.tsx`: מטא־דאטה והגדרת noindex. noindex מוגדר לכל הגולשים, לא לפי מקור תנועה או בודק. לפני שינויו בדקו האם יש רצון לאינדוקס.

הפרויקט אינו קשור רשמית לפייסבוק או ל־Meta. פרסום טכני של העמוד אינו אישור למודעה או להעברת חשבונות. אין להציג תוכן שונה לבודקים, להסוות את מהות ההצעה, להוסיף איסוף סיסמאות או להבטיח בטיחות/פרטיות/אישור פלטפורמה ללא בסיס.

## תיעוד רשמי

- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- GitHub repository creation: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- GitHub file uploads: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Vercel deployments: https://vercel.com/docs/deployments
- Vercel build settings: https://vercel.com/docs/builds/configure-a-build
- Vercel Hobby terms: https://vercel.com/docs/plans/hobby
