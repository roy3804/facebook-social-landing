/** Native dialog enhancement. The page, FAQ and WhatsApp links also work without JavaScript. */
export type PopupOptions = { enabled?: boolean; delayMs?: number; storageKey?: string };

export function initializeOfferPopup({ enabled = true, delayMs = 6000, storageKey = "facebook-social-offer-shown-v1" }: PopupOptions = {}): () => void {
  if (typeof document === "undefined") return () => {};
  const element = document.getElementById("offer-popup");
  if (!(element instanceof HTMLDialogElement) || typeof element.showModal !== "function") return () => {};
  const dialog: HTMLDialogElement = element;
  const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-open-offer]"));
  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-close-offer]");
  let previousFocus: HTMLElement | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  function rememberShown(): void {
    try { sessionStorage.setItem(storageKey, "1"); } catch { /* Storage can be blocked; the dialog still works. */ }
  }
  function wasShown(): boolean {
    try { return sessionStorage.getItem(storageKey) === "1"; } catch { return false; }
  }
  function open(): void {
    if (dialog.open || !dialog.isConnected) return;
    if (timer) clearTimeout(timer);
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();
    document.body.classList.add("modal-open");
    rememberShown();
    closeButton?.focus({ preventScroll: true });
  }
  function close(): void { if (dialog.open) dialog.close(); }
  function afterClose(): void {
    document.body.classList.remove("modal-open");
    if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
  }
  function onBackdrop(event: MouseEvent): void {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
  }

  triggers.forEach(trigger => trigger.addEventListener("click", open));
  closeButton?.addEventListener("click", close);
  dialog.addEventListener("close", afterClose); // Includes the browser's native Escape behavior.
  dialog.addEventListener("click", onBackdrop);
  if (enabled && !wasShown()) {
    timer = setTimeout(() => { if (document.visibilityState !== "hidden") open(); }, Math.max(0, delayMs));
  }
  return () => {
    if (timer) clearTimeout(timer);
    triggers.forEach(trigger => trigger.removeEventListener("click", open));
    closeButton?.removeEventListener("click", close);
    dialog.removeEventListener("close", afterClose);
    dialog.removeEventListener("click", onBackdrop);
    if (dialog.open) dialog.close();
    document.body.classList.remove("modal-open");
  };
}
