import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";
import { FeatureIcon } from "@/components/Icons";

const features = [
  { icon: "account", title: "חשבונות ישנים", text: "יש לכם חשבון פייסבוק ישן? פנו לקבלת פרטים נוספים." },
  { icon: "clock", title: "לא בשימוש", text: "חשבון שכבר אינו בשימוש? נשמח להסביר על ההצעה." },
  { icon: "chat", title: "פנייה בוואטסאפ", text: "פותחים שיחה בוואטסאפ ומבקשים פרטים נוספים." },
  { icon: "info", title: "קודם מקבלים פרטים", text: "מבררים את ההצעה והתנאים לפני שמחליטים." },
] as const;

const questions = [
  { question: "אילו חשבונות רלוונטיים לפנייה?", answer: "חשבונות פייסבוק ישנים או שכבר לא בשימוש. את פרטי החשבון ואת התנאים מבררים בשיחה." },
  { question: "מה כוללת ההצעה?", answer: "ההצעה נוגעת לשימוש בחשבון ולהעברת הגישה אליו. בקשו את מלוא הפרטים והתנאים לפני קבלת החלטה." },
  { question: "איך מקבלים פרטים נוספים?", answer: "לוחצים על כפתור הוואטסאפ בעמוד ושולחים הודעה. השיחה נפתחת בוואטסאפ ואפשר לכתוב משם." },
  { question: "האם צריך להזין כאן סיסמה או קוד אימות?", answer: "לא. בעמוד אין טופס התחברות או איסוף סיסמאות. אין להזין או למסור כאן קודי אימות." },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">דילוג לתוכן העמוד</a>
    {/* tabIndex={-1} so the skip link actually moves focus here; without it the
        fragment jump scrolls but leaves focus on <body>. */}
    <main id="main-content" tabIndex={-1}>
      {/* Copy first, illustration second. In an RTL grid the first column is the
          right-hand one, so this renders art-left / copy-right exactly as before,
          but a screen reader now reaches the headline before the illustration. */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <h1 id="hero-heading"><span>יש לכם חשבונות</span><span className="blue">פייסבוק ישנים</span><span>או לא בשימוש?</span></h1>
          <p className="lead">יש לנו הצעה מעניינת בשבילכם</p>
          <p className="sub">שלחו הודעה לפרטים נוספים</p>
          <WhatsAppButton placement="hero" />
          <p className="micro">ההודעה תישלח רק לאחר שתאשרו את שליחתה</p>
        </div>
        <div className="hero-art">
          {/* Vector, so it stays sharp past the old 517px raster. The alt text
              names no product: the previous string said "ממשק פייסבוק", which
              asserted in the accessibility tree the affiliation the footer denies. */}
          <Image src="/phone-hero.svg" alt="איור של טלפון עם פיד חברתי כללי, ולצידו שני אריחי אפליקציה מרחפים" width={517} height={495} preload unoptimized sizes="(max-width: 860px) 100vw, 560px" />
        </div>
      </section>

      <section className="features" aria-label="פרטי הפנייה">
        {features.map(feature => <article className="feature" key={feature.icon}>
          <FeatureIcon name={feature.icon} /><h2>{feature.title}</h2><p>{feature.text}</p>
        </article>)}
      </section>

      <section className="intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading">מה אנחנו מחפשים?</h2>
        <p>אנחנו פונים לבעלי חשבונות פייסבוק ישנים או שכבר אינם בשימוש.<br />יש לכם חשבון כזה? שלחו הודעה בוואטסאפ לקבלת פרטים.</p>
        <p className="disclosure">הפנייה נוגעת לשימוש בחשבון ולהעברת הגישה אליו. חשוב לברר מראש מה יידרש מכם ומהם תנאי ההצעה.</p>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="section-heading">שאלות נפוצות</h2>
        {questions.map(item => <details key={item.question}>
          <summary>{item.question}</summary><div className="answer"><p>{item.answer}</p></div>
        </details>)}
      </section>

      <section className="closing" aria-label="יצירת קשר">
        <WhatsAppButton placement="closing" />
        <p className="micro">פתיחת השיחה אינה שולחת הודעה אוטומטית</p>
      </section>

      <footer>
        <p>עמוד עצמאי, ללא זיקה רשמית לפייסבוק או ל־Meta.</p>
        <p className="footer-note">לפני קבלת החלטה יש לברר את מלוא התנאים ואת ההשלכות של העברת גישה לחשבון.</p>
        <button className="show-popup" type="button" data-open-offer aria-haspopup="dialog" aria-controls="offer-popup">פתיחת חלון ההצעה</button>
      </footer>
    </main>
    <OfferPopup />
  </>;
}
