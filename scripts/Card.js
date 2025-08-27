const galleryGrid = document.querySelector(".gallery__grid");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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

initialCards.forEach((data) => {
  const card = new Card(data, ".card-template");
  const cardElement = card.generateCard();
  galleryGrid.appendChild(cardElement);
});
