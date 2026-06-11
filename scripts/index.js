import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "c658acda-adc7-49b7-9ee9-cbbb31f96c40",
    "Content-Type": "application/json",
  } /* ////////////////////////    PONTO DE ATENÇÃO PARA AS VIRGULAS //////////////////////////////////////////////////////////////////// */,
});

const editPopup = new Popup(".popupedit");
editPopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-about",
  avatarSelector: ".profile__avatar",
});

const editPopupForm = new PopupWithForm(".popupedit", (formValues) => {
  api
    .updateUserInfo({ name: formValues.name, about: formValues.about })
    .then((updatedUser) => {
      userInfo.setUserInfo({
        name: updatedUser.name,
        about: updatedUser.about,
      });
      editPopupForm.close();
    })
    .catch((err) => console.log(err));
});

editPopupForm.setEventListeners();

const avatarPopup = new PopupWithForm(".popupProfilePicture", (formValues) => {
  api
    .updateAvatar({ link: formValues.avatarLink })
    .then((updatedAvatar) => {
      userInfo.setAvatar(updatedAvatar.avatar);
      avatarPopup.close();
    })
    .catch((err) => console.log(err));
});

avatarPopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popupPlace", (formValues) => {
  api
    .addCard({ name: formValues.placeTitle, link: formValues.placeImage })
    .then((newCardData) => {
      const newCard = new Card(
        {
          name: newCardData.name,
          link: newCardData.link,
        },
        ".card-template",
        handleCardClick,
        handleDeleteClick,
        handleLikeClick,
      );
      const cardElement = newCard.generateCard();
      cardSection.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => console.log(err));
});

/* const addCardPopup = new PopupWithForm(".popupPlace", (formValues) => {
  const newCard = new Card(
    {
      name: formValues.placeTitle,
      link: formValues.placeImage,
    },
    ".card-template",
    handleCardClick,
  );
  const cardElement = newCard.generateCard();
  cardSection.addItem(cardElement);
  addCardPopup.close();
}); */

const confirmPopup = new PopupWithConfirmation(".popupDeleteConfirmation");

confirmPopup.setEventListeners();

addCardPopup.setEventListeners();

const addPopup = new Popup(".popupPlace");
addPopup.setEventListeners();

const placePopup = new PopupWithImage(".photoFrame");
placePopup.setEventListeners();

const handleCardClick = (name, link) => placePopup.open(name, link);

const handleDeleteClick = (cardId, cardInstance) => {
  confirmPopup.setConfirmAction(() => {
    api
      .deleteCard(cardId)
      .then(() => {
        cardInstance.removeCard();
        confirmPopup.close();
      })
      .catch((err) => console.log(err));
  });
  confirmPopup.open();
};

const handleLikeClick = (cardId, isLiked, updateLikeState) => {
  if (isLiked === true) {
    api
      .unlikeCard(cardId)
      .then((updatedCard) => {
        updateLikeState(updatedCard.isLiked);
      })
      .catch((err) => console.log(err));
  } else {
    api
      .likeCard(cardId)
      .then((updatedCard) => {
        updateLikeState(updatedCard.isLiked);
      })
      .catch((err) => console.log(err));
  }
};

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

const galleryGrid = document.querySelector(".gallery__grid");

/* const initialCards = [
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
]; */

/* const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card-template", handleCardClick);
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".gallery__grid",
); */

/* cardSection.renderItems(); */

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

const formSubmitAddForm = document.querySelector("#addForm");

let cardSection;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData.avatar);
    cardSection = new Section(
      {
        items: cardsData,
        renderer: (item) => {
          const card = new Card(
            item,
            ".card-template",
            handleCardClick,
            handleDeleteClick,
            handleLikeClick,
          );
          const cardElement = card.generateCard();
          cardSection.addItem(cardElement);
        },
      },
      ".gallery__grid",
    );
    cardSection.renderItems();
  })

  .catch((err) => console.log(err));
