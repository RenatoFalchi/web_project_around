import Popup from "../components/Popup.js";
const editButton = document.querySelector(".profile__editButton");
editButton.addEventListener("click", () => {
  editPopup.open();
});

const editPopup = new Popup(".popupedit");
editPopup.setEventListeners();

const addButton = document.querySelector(".profile__addButton");
addButton.addEventListener("click", () => {
  addPopup.open();
});

const addPopup = new Popup(".popupPlace");
addPopup.setEventListeners();

/* import PopupWithImage from "../components/PopupWithImage.js";
const placePopup = new PopupWithImage(".photoFrame"); */

//
import Card from "../components/Card.js";
import {
  /* closePopup,
  openPopup,
  addPopup, */
  handleProfileSubmit,
  setEditFormListener,
} from "./utils.js";
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

initialCards.forEach((data) => {
  const card = new Card(data, ".card-template");
  const cardElement = card.generateCard();
  galleryGrid.appendChild(cardElement);
});

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
setEditFormListener(editFormValidator);

const formSubmitAddForm = document.querySelector("#addForm");

function addNewCard(event) {
  event.preventDefault();

  const placeTitle = document.querySelector("#placeTitle").value;
  const placeImage = document.querySelector("#placeImage").value;

  const card = new Card(
    {
      name: placeTitle,
      link: placeImage,
    },
    ".card-template"
  );

  initialCards.unshift(card);

  const cardElement = card.generateCard();
  galleryGrid.prepend(cardElement);

  closePopup(addPopup);

  formSubmitAddForm.reset();
  addFormValidator.resetValidation();
}

formSubmitAddForm.addEventListener("submit", addNewCard);
