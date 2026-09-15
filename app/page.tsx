import type { ReactNode } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";
import GmailInbox from "@/components/GmailInbox";
import { ColorDots, FeatureIcon, GmailIcon, UiIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const features = [
  { icon: "mail", tone: "blue", title: "חשבון Gmail ישן", text: <>יש לכם כתובת <bdi dir="ltr">@gmail.com</bdi> ישנה? פנו לקבלת פרטים.</> },
  { icon: "clock", tone: "yellow", title: "כבר לא בשימוש", text: "חשבון Gmail שלא נכנסים אליו יותר? נשמח להסביר." },
  { icon: "chat", tone: "green", title: "פשוט, בוואטסאפ", text: "פותחים שיחה בוואטסאפ ומבקשים פרטים נוספים." },
  { icon: "info", tone: "red", title: "קודם כל, פרטים", text: "מבררים את ההצעה, התנאים ומשמעות העברת הגישה." },
] as const;

const questions: { question: string; answer: ReactNode; open?: boolean }[] = [
  { question: "אילו חשבונות Gmail רלוונטיים לפנייה?", answer: <>חשבונות Gmail ישנים או שכבר לא בשימוש — כלומר חשבונות גוגל שכתובת הדואר שלהם מסתיימת <span className="nowrap">ב־<bdi dir="ltr">@gmail.com</bdi></span>. אין הכוונה לחשבונות ברשתות חברתיות או בשירותים אחרים. את פרטי החשבון ואת התנאים מבררים בשיחה.</> },
  { question: "מה כוללת ההצעה?", answer: <>ההצעה נוגעת לשימוש בחשבון <span className="nowrap">ה־Gmail</span> שלכם ולהעברת הגישה אליו. בקשו את מלוא הפרטים והתנאים לפני קבלת החלטה.</> },
  { question: "איך מקבלים פרטים נוספים?", answer: <>לוחצים על כפתור הוואטסאפ בעמוד ושולחים הודעה. המספר לפנייה הוא <bdi dir="ltr">{site.displayPhone}</bdi>.</> },
  { question: "האם צריך להזין כאן סיסמה או קוד אימות?", answer: "לא. בעמוד אין טופס התחברות או איסוף סיסמאות. אין להזין או למסור כאן קודי אימות.", open: true },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">דילוג לתוכן העמוד</a>
    <div className="top-color-line" aria-hidden="true" />
    <header className="site-header">
      <div className="container header-inner">
        <a className="site-brand" href="#main-content" aria-label="חשבונות Gmail — חזרה לראש העמוד">
          <span className="brand-icon"><GmailIcon /></span>
          <span><strong>חשבונות <bdi>Gmail</bdi></strong><small>עמוד פנייה עצמאי</small></span>
        </a>
        <nav className="main-nav" aria-label="ניווט ראשי"><a href="#about">למי זה מתאים?</a><a href="#how-it-works">איך זה עובד?</a><a href="#faq">שאלות נפוצות</a></nav>
        <WhatsAppButton label="בואו נדבר" className="cta-header" />
      </div>
    </header>
    <main id="main-content" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-ambient" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow"><span className="status-dot" />ישן, אבל עדיין אצלכם.</div>
            <h1 id="hero-heading" aria-label={site.title}><span>יש לכם חשבונות</span><span className="headline-accent">גוגל ישנים</span><span>או לא בשימוש?</span></h1>
            <p className="lead">יש לנו הצעה בשבילכם.</p>
            <p className="hero-sub">שלחו הודעה לפרטים נוספים.<br />בלי טפסים ארוכים. מתחילים בשיחה.</p>
            <WhatsAppButton />
            <p className="micro hero-micro"><UiIcon name="chat" />ההודעה תישלח רק לאחר שתאשרו את שליחתה</p>
            <div className="hero-footnote"><ColorDots /><span>עמוד עצמאי, ללא קשר לגוגל או ל־Gmail</span></div>
          </div>
          <div className="hero-art"><GmailInbox /></div>
        </div>
        <div className="container hero-bottom"><span>תיבת הדואר נשארה מאחור?</span><span className="hero-bottom-rule" /><a href="#about">בואו נבדוק למי זה מתאים <UiIcon name="chevron" /></a></div>
      </section>

      <section className="about-section section-space" id="about" aria-labelledby="intro-heading">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow"><span className="eyebrow-line" />למי זה מתאים?</p><h2 id="intro-heading">תיבת דואר ישנה.<br /><span className="text-blue">שיחה חדשה.</span></h2></div><p className="section-description">אנחנו פונים לבעלי חשבונות Gmail ישנים<br className="desktop-break" /> או שכבר אינם בשימוש. יש לכם חשבון כזה?<br className="desktop-break" /> שלחו הודעה בוואטסאפ לקבלת פרטים.</p></div>
          <div className="features">
            {features.map((feature, index) => <article className={`feature feature-${feature.tone}`} key={feature.icon}>
              <div className="feature-top"><span className="feature-icon"><FeatureIcon name={feature.icon} /></span><span className="feature-number">0{index + 1}</span></div>
              <h3>{feature.title}</h3><p>{feature.text}</p>
            </article>)}
          </div>
          <aside className="disclosure"><span className="disclosure-icon"><UiIcon name="info" /></span><p><strong>חשוב לדעת לפני שמתחילים</strong>הפנייה נוגעת לשימוש בחשבון ה־Gmail שלכם ולהעברת הגישה אליו. חשוב לברר מראש מה יידרש מכם ומהם תנאי ההצעה, ולזכור שחשבון כזה משמש פעמים רבות גם לשחזור סיסמאות בשירותים אחרים.</p></aside>
        </div>
      </section>

      <section className="process-section" id="how-it-works" aria-labelledby="process-heading"><div className="container process-inner">
        <div className="process-heading"><p className="eyebrow">איך זה עובד?</p><h2 id="process-heading">שלושה צעדים. <br />בלי להסתבך.</h2></div>
        <ol className="steps"><li><span className="step-number step-blue">01</span><h3>פותחים שיחה</h3><p>לוחצים על כפתור הוואטסאפ.</p></li><li><span className="step-number step-yellow">02</span><h3>מקבלים פרטים</h3><p>מבררים את ההצעה ואת התנאים.</p></li><li><span className="step-number step-green">03</span><h3>מחליטים בנחת</h3><p>רק אחרי שמבינים את כל המשמעויות.</p></li></ol>
      </div></section>

      <section className="faq-section section-space" id="faq" aria-labelledby="faq-heading"><div className="container faq-layout">
        <div className="faq-intro"><p className="eyebrow"><span className="eyebrow-line" />שאלות נפוצות</p><h2 id="faq-heading">לפני ששולחים, <br /><span className="text-blue">כדאי לדעת.</span></h2><p>כל מה שחשוב להבין<br />לפני שמתחילים את השיחה.</p><ColorDots /></div>
        <div className="faq-list">{questions.map(item => <details key={item.question} open={item.open}><summary>{item.question}<span className="faq-plus" aria-hidden="true" /></summary><div className="answer"><p>{item.answer}</p></div></details>)}</div>
      </div></section>

      <section className="closing-section" aria-labelledby="closing-heading"><div className="container"><div className="closing-card">
        <div className="closing-decoration" aria-hidden="true"><GmailIcon /></div>
        <div className="closing-copy"><p className="eyebrow">הצעד הבא מתחיל אצלכם</p><h2 id="closing-heading">יש לכם חשבון ישן?<br />בואו נדבר על זה.</h2><p>שלחו הודעה לפרטים נוספים.</p></div>
        <div className="closing-action"><WhatsAppButton label="לפרטים בוואטסאפ" /><p>פתיחת השיחה אינה שולחת הודעה אוטומטית.<br />עמוד עצמאי, ללא קשר לגוגל או ל־Gmail.</p></div>
      </div></div></section>

      <footer className="site-footer"><div className="container">
        <div className="footer-top"><span className="footer-title"><ColorDots />חשבונות Gmail ישנים</span><button className="show-popup" type="button" data-open-offer aria-haspopup="dialog" aria-controls="offer-popup">פתיחת חלון ההצעה <UiIcon name="chevron" /></button></div>
        <p>עמוד עצמאי. איננו גוגל ואיננו קשורים אליה או ל־Gmail בשום דרך, ואיננו פועלים מטעמה, בחסותה או באישורה. השמות והסמלים משמשים לזיהוי השירות בלבד.</p>
        <p>לפני קבלת החלטה יש לברר את מלוא התנאים ואת ההשלכות של העברת גישה לחשבון. חשוב לדעת שתנאי השימוש של גוגל אינם מתירים העברת חשבון לאדם אחר.</p>
      </div></footer>
    </main>
    <OfferPopup />
  </>;
}
