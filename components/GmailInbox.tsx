import { GmailIcon, UiIcon } from "./Icons";

const messages = [
  { initial: "N", from: "Noa Cohen", subject: "Some things are worth keeping", preview: "A little note from a while ago…", time: "10:42", tone: "blue", unread: true },
  { initial: "D", from: "Daniel", subject: "Remember this?", preview: "Found something you might like.", time: "09:18", tone: "green", unread: true },
  { initial: "S", from: "Studio", subject: "A fresh start, a new idea", preview: "Let’s make something happen.", time: "Sep 12", tone: "yellow", unread: false },
  { initial: "M", from: "Maya", subject: "It’s been a while", preview: "Just checking in. How are you?", time: "Sep 10", tone: "red", unread: false },
  { initial: "A", from: "Archive", subject: "Your favorite memories", preview: "Still here, right where you left them.", time: "Sep 08", tone: "blue", unread: false },
] as const;

/** Decorative, server-rendered illustration; no Gmail connection or login controls. */
export default function GmailInbox() {
  return <figure className="inbox-figure">
    <div className="inbox-scene" role="img" aria-label="המחשה מעוצבת של תיבת דואר נכנס ב-Gmail, עם הודעות לדוגמה ואייקון Gmail צבעוני">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="art-dot art-dot-blue" /><div className="art-dot art-dot-green" />
      <div className="art-spark"><UiIcon name="sparkle" /></div>
      <div className="inbox-backplate backplate-yellow" /><div className="inbox-backplate backplate-blue" />
      <div className="gmail-tile"><GmailIcon /></div>
      <div className="mail-window" dir="ltr" aria-hidden="true">
        <div className="mail-window-top">
          <div className="window-dots"><i /><i /><i /></div>
          <span>Gmail · Inbox</span>
          <span className="window-top-mark">✦</span>
        </div>
        <div className="mail-header">
          <div className="mail-brand"><UiIcon name="menu" /><GmailIcon /><span>Gmail</span></div>
          <div className="mail-search"><UiIcon name="search" /><span>Search mail</span><UiIcon name="sliders" /></div>
          <span className="mail-profile">Y</span>
        </div>
        <div className="mail-workspace">
          <div className="mail-sidebar">
            <div className="mail-compose"><UiIcon name="pencil" />Compose</div>
            <div className="mail-folder folder-active"><UiIcon name="inbox" /><span>Inbox</span><b>2</b></div>
            <div className="mail-folder"><UiIcon name="star" /><span>Starred</span></div>
            <div className="mail-folder"><UiIcon name="clock" /><span>Snoozed</span></div>
            <div className="mail-folder"><UiIcon name="send" /><span>Sent</span></div>
            <div className="mail-folder"><UiIcon name="file" /><span>Drafts</span><b>1</b></div>
            <div className="mail-sidebar-bottom"><span>Labels</span><span>+</span></div>
          </div>
          <div className="mail-content">
            <div className="mail-toolbar"><span className="mail-checkbox" /><UiIcon name="refresh" /><UiIcon name="dots" /><span className="mail-pagination">1–5 of 5</span><UiIcon name="chevron" /></div>
            <div className="mail-tabs"><span className="mail-tab-active"><UiIcon name="inbox" />Primary</span><span><UiIcon name="tag" />Promotions</span><span><UiIcon name="users" />Social</span></div>
            <div className="mail-messages">
              {messages.map(message => <div className={`mail-row ${message.unread ? "is-unread" : ""}`} key={message.from}>
                <span className="mail-checkbox" /><UiIcon className="mail-star" name="star" />
                <span className={`mail-avatar avatar-${message.tone}`}>{message.initial}</span>
                <span className="mail-message-copy"><span className="mail-sender">{message.from}</span><span className="mail-subject">{message.subject}</span><span className="mail-preview">{message.preview}</span></span>
                <span className="mail-time">{message.time}</span>
              </div>)}
            </div>
            <div className="mail-status"><span className="status-dot" />You’re all caught up.</div>
          </div>
        </div>
      </div>
      <div className="floating-note" aria-hidden="true"><span className="note-icon"><UiIcon name="mail" /></span><span><strong>חשבון Gmail ישן?</strong><small>שלחו הודעה לפרטים</small></span><span className="note-check"><UiIcon name="check" /></span></div>
    </div>
    <figcaption>תצוגה להמחשה בלבד · ללא חיבור לחשבון אמיתי</figcaption>
  </figure>;
}
