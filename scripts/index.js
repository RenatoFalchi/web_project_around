import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const editPopup = new Popup(".popupedit");
editPopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-about",
});

const editPopupForm = new PopupWithForm(".popupedit", (formValues) => {
  console.log("teste", formValues);
  userInfo.setUserInfo({
    name: formValues.name,
    about: formValues.about,
  });
  editPopupForm.close();
});
editPopupForm.setEventListeners();

const addCardPopup = new PopupWithForm(".popupPlace", (formValues) => {
  const newCard = new Card(
    {
      name: formValues.placeTitle,
      link: formValues.placeImage,
    },
    ".card-template",
    handleCardClick
  );
  const cardElement = newCard.generateCard();
  /* galleryGrid.prepend(cardElement); */
  cardSection.addItem(cardElement); //CÓDIGO NOVO
  addCardPopup.close();
});
addCardPopup.setEventListeners();

const addPopup = new Popup(".popupPlace");
addPopup.setEventListeners();

const placePopup = new PopupWithImage(".photoFrame");
placePopup.setEventListeners();

const handleCardClick = (name, link) => placePopup.open(name, link);

const editButton = document.querySelector(".profile__editButton");
editButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  document.querySelector("#name").value = currentUserInfo.name;
  document.querySelector("#about").value = currentUserInfo.about;
  editPopup.open();
});
const addButton = document.querySelector(".profile__addButton");
addButton.addEventListener("click", () => {
  addPopup.open();
});
/* const photoFrame = document.querySelector(".photoFrame");
photoFrame.addEventListener("click", () => {
  placePopup.open();
}); */

//
import Card from "../components/Card.js";
import /* closePopup,
  openPopup,
  addPopup, */
/* handleProfileSubmit,
  setEditFormListener, */
"./utils.js";
import FormValidator from "../components/FormValidator.js";
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

//

import Section from "../components/Section.js";

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card-template", handleCardClick);
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".gallery__grid"
);

cardSection.renderItems();

//

/* initialCards.forEach((data) => {
  const card = new Card(data, ".card-template", handleCardClick);
  const cardElement = card.generateCard();
  galleryGrid.appendChild(cardElement);
}); */

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-fieldsetInput",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__form-fieldsetInput_error",
  errorClass: "popup__error_visible",
};

const editForm = document.querySelector("#editForm");
const addForm = document.querySelector("#addForm");

const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
/* setEditFormListener(editFormValidator); */

const formSubmitAddForm = document.querySelector("#addForm");

/* function addNewCard(event) {
  event.preventDefault();

  const placeTitle = document.querySelector("#placeTitle").value;
  const placeImage = document.querySelector("#placeImage").value;

  const card = new Card(
    {
      name: placeTitle,
      link: placeImage,
    },
    ".card-template",
    handleCardClick
  );

  initialCards.unshift(card);

  const cardElement = card.generateCard();
  galleryGrid.prepend(cardElement);

  closePopup(addPopup);

  formSubmitAddForm.reset();
  addFormValidator.resetValidation();
}

formSubmitAddForm.addEventListener("submit", addNewCard); */
