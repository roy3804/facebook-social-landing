import WhatsAppButton from "./WhatsAppButton";
import { CloseIcon, WhatsAppIcon } from "./Icons";
import PopupBehavior from "./PopupBehavior";

export default function OfferPopup() {
  return <>
    <dialog id="offer-popup" aria-labelledby="popup-title" aria-describedby="popup-description">
      <button className="close-popup" data-close-offer type="button" aria-label="סגירת חלון ההצעה"><CloseIcon /></button>
      <div className="modal-icon"><WhatsAppIcon /></div>
      <h2 id="popup-title"><span>להצעה משתלמת</span><span className="blue">היכנסו לוואטסאפ</span></h2>
      <p id="popup-description">שלחו הודעה לקבלת פרטי ההצעה.</p>
      <WhatsAppButton label="כניסה לוואטסאפ" />
      <p className="modal-note">אפשר לסגור את החלון ולהמשיך לקרוא. פתיחת השיחה אינה שולחת הודעה אוטומטית.</p>
    </dialog>
    <PopupBehavior />
  </>;
}
