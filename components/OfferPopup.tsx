import WhatsAppButton from "./WhatsAppButton";
import { CloseIcon, ColorDots, GmailIcon } from "./Icons";
import PopupBehavior from "./PopupBehavior";

export default function OfferPopup() {
  return <>
    <dialog id="offer-popup" aria-labelledby="popup-title" aria-describedby="popup-description">
      <button className="close-popup" data-close-offer type="button" aria-label="סגירת חלון ההצעה"><CloseIcon /></button>
      <div className="modal-body">
        <div className="modal-icon"><GmailIcon /></div>
        <p className="eyebrow">חשבון Gmail ישן? שלחו הודעה לפרטים</p>
        <h2 id="popup-title">יש לנו הצעה.<br /><span className="text-blue">בואו נדבר עליה.</span></h2>
        <p id="popup-description">שלחו הודעה לקבלת פרטי ההצעה לבעלי חשבונות Gmail ישנים. ההצעה נוגעת לשימוש בחשבון ולהעברת הגישה אליו.</p>
        <WhatsAppButton label="כניסה לוואטסאפ" />
        <button className="modal-continue" type="button" data-close-offer>אמשיך לקרוא בינתיים</button>
        <div className="modal-independence"><ColorDots /><p className="modal-note">עמוד עצמאי, ללא קשר לגוגל או ל־Gmail.<br />פתיחת השיחה אינה שולחת הודעה אוטומטית.</p></div>
      </div>
    </dialog>
    <PopupBehavior />
  </>;
}
