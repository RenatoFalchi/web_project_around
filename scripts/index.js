const editButton = document.querySelector(".profile__editButton");
const closeButton = document.querySelector(".popup__close-button");

const editForm = document.querySelector("#editForm");
const addForm = document.querySelector("#addForm");

function openPopup() {
  const popup = document.querySelector(".popupedit");

  popup.classList.add("popup__opened");

  const form = popup.querySelector(".popup__form");
  toggleButtonState(form);
  document.addEventListener("keydown", handleEscClose);
}

function closePopup() {
  const popup = document.querySelector(".popupedit");

  popup.classList.remove("popup__opened");

  document.removeEventListener("keydown", handleEscClose);
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

const formElement = document.querySelector("#editForm");

function handleProfileSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const aboutInput = document.querySelector("#about").value;

  const userName = document.querySelector(".profile__info-name");
  const userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup();

  editForm.reset();
}

formElement.addEventListener("submit", handleProfileSubmit);

const addButton = document.querySelector(".profile__addButton");
const closeAddButton = document.querySelector("#closeAddButton");

function openAddPopup() {
  const popup = document.querySelector(".popupPlace");
  popup.classList.add("popup__opened");

  const form = popup.querySelector(".popup__form");
  toggleButtonState(form);
  document.addEventListener("keydown", handleEscClose);
}

function closeAddPopup() {
  const popup = document.querySelector(".popupPlace");

  popup.classList.remove("popup__opened");
  document.removeEventListener("keydown", handleEscClose);
}

addButton.addEventListener("click", openAddPopup);
closeAddButton.addEventListener("click", closeAddPopup);

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

const galleryGrid = document.querySelector(".gallery__grid");
const cardTemplate = document.querySelector("#card-template").content;

function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".gallery__grid-cardImage");
  const cardText = cardElement.querySelector(".gallery__grid-cardText");
  const deleteButton = cardElement.querySelector(
    ".gallery__grid-cardDeleteButton"
  );
  const likeButton = cardElement.querySelector(".gallery__grid-cardLikeButton");
  const cardPhotoFrame = cardElement.querySelector(".gallery__grid-cardImage");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardText.textContent = cardData.name;

  deleteButton.addEventListener("click", deleteCard);

  likeButton.addEventListener("click", likeButtonAction);

  cardPhotoFrame.addEventListener("click", () => {
    openPhotoFrame(cardData.link, cardData.name, cardData.name);
  });

  return cardElement;
}

function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    galleryGrid.appendChild(cardElement);
  });
}

renderCards();

function likeButtonAction(event) {
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

const photoFrameCloseButton = document.querySelector("#closePhotoButton");

photoFrameCloseButton.addEventListener("click", closePhotoFrame);

function openPhotoFrame(imageSrc, imageAlt, titleText) {
  const photoFrame = document.querySelector(".photoFrame");
  const photoImage = photoFrame.querySelector(".photoFrame__image");
  const photoText = photoFrame.querySelector(".photoFrame__text");

  photoImage.src = imageSrc;
  photoImage.alt = imageAlt;
  photoText.textContent = titleText;

  photoFrame.classList.add("photoFrame__opened");
  document.addEventListener("keydown", handleEscClose);
}

function closePhotoFrame() {
  const photoFrame = document.querySelector(".photoFrame");

  photoFrame.classList.remove("photoFrame__opened");
  document.addEventListener("keydown", handleEscClose);
}

function addNewCard(event) {
  event.preventDefault();

  const placeTitle = document.querySelector("#placeTitle").value;
  const placeImage = document.querySelector("#placeImage").value;

  const newCard = {
    name: placeTitle,
    link: placeImage,
  };

  initialCards.unshift(newCard);

  const newCardElement = createCard(newCard);
  galleryGrid.prepend(newCardElement);

  closeAddPopup();

  addForm.reset();
}

addForm.addEventListener("submit", addNewCard);

function deleteCard(event) {
  const cardElement = event.currentTarget.closest(".gallery__grid-card");
  cardElement.remove();
}
