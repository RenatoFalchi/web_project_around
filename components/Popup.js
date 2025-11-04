export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleCloseButton = this._handleCloseButton.bind(this);
  }

  open() {
    this._popup.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") this.close();
  }

  _handleOverlayClose(evt) {
    if (evt.target === this._popup) {
      this.close();
    }
  }

  _handleOpenButton(evt) {
    if (evt.target.classList.contains("profile__editButton")) {
      this.open();
    }
  }

  _handleCloseButton(evt) {
    if (evt.target.classList.contains("popup__close-icon")) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", this._handleOverlayClose);
    this._popup.addEventListener("click", this._handleCloseButton);
    this._popup.addEventListener("click", this._handleOpenButton);
  }
}
