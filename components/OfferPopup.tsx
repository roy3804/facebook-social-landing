import WhatsAppButton from "./WhatsAppButton";
import { CloseIcon, WhatsAppIcon } from "./Icons";
import PopupBehavior from "./PopupBehavior";

export default function OfferPopup() {
  return <>
    {/* The close button sits outside .modal-body on purpose: .modal-body is the
        scroller, so on a short viewport the content scrolls under a close
        button that stays put, instead of the button scrolling out of reach. */}
    <dialog id="offer-popup" aria-labelledby="popup-title" aria-describedby="popup-description">
      <button className="close-popup" data-close-offer type="button" aria-label="סגירת חלון ההצעה"><CloseIcon /></button>
      <div className="modal-body">
        <div className="modal-icon"><WhatsAppIcon /></div>
        <h2 id="popup-title"><span>להצעה משתלמת</span><span className="blue">היכנסו לוואטסאפ</span></h2>
        <p id="popup-description">שלחו הודעה לקבלת פרטי ההצעה.</p>
        <WhatsAppButton label="כניסה לוואטסאפ" />
        <p className="modal-note">אפשר לסגור את החלון ולהמשיך לקרוא. פתיחת השיחה אינה שולחת הודעה אוטומטית.</p>
      </div>
    </dialog>
    <PopupBehavior />
  </>;
}
