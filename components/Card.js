export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__grid-card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._handleLikeClick(this._id, this._isLiked, (newIsLiked) => {
      this._isLiked = newIsLiked;
      this._updateLikeIcon();
    });
  }

  _updateLikeIcon() {
    const likeIcon = this._element.querySelector(
      ".gallery__grid-cardLikeButtonIcon",
    );
    if (this._isLiked) {
      likeIcon.src = "./images/Content-Card-LikeButtonActive.svg";
    } else {
      likeIcon.src = "./images/Content-Card-LikeButton.svg";
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".gallery__grid-cardDeleteButton")
      .addEventListener("click", () => this._handleDeleteClick(this._id, this));
    this._element
      .querySelector(".gallery__grid-cardLikeButton")
      .addEventListener("click", () => this._handleLikeButton());
    this._element
      .querySelector(".gallery__grid-cardImage")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link),
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

  removeCard() {
    this._element.remove();
  }
}
