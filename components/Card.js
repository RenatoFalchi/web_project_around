export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__grid-card")
      .cloneNode(true);

    return cardElement;
  }

  _likeButtonAction(event) {
    const buttonElement = event.currentTarget;
    const likeButtonIcon = buttonElement.querySelector(
      ".gallery__grid-cardLikeButtonIcon"
    );

    if (likeButtonIcon.src.includes("Content-Card-LikeButtonActive.svg")) {
      likeButtonIcon.src = "./images/Content-Card-LikeButton.svg";
    } else {
      likeButtonIcon.src = "./images/Content-Card-LikeButtonActive.svg";
    }
  }

  _deleteCard(event) {
    const cardElement = event.currentTarget.closest(".gallery__grid-card");
    cardElement.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".gallery__grid-cardDeleteButton")
      .addEventListener("click", this._deleteCard);
    this._element
      .querySelector(".gallery__grid-cardLikeButton")
      .addEventListener("click", this._likeButtonAction);
    this._element
      .querySelector(".gallery__grid-cardImage")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".gallery__grid-cardText").textContent =
      this._name;
    this._element.querySelector(".gallery__grid-cardImage").alt = this._name;
    this._element.querySelector(".gallery__grid-cardImage").src = this._link;
    this._setEventListeners();
    return this._element;
  }
}
