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
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  aboutSelector: ".profile__info-about",
  avatarSelector: ".profile__avatar",
});

const avatarPopup = new PopupWithForm(".popupProfilePicture", (formValues) => {
  avatarPopup.renderLoading(true);
  api
    .updateAvatar({ link: formValues.avatarLink })
    .then((updatedAvatar) => {
      userInfo.setAvatar(updatedAvatar.avatar);
      avatarPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => avatarPopup.renderLoading(false));
});

avatarPopup.setEventListeners();

const editPopupForm = new PopupWithForm(".popupedit", (formValues) => {
  editPopupForm.renderLoading(true);
  api
    .updateUserInfo({ name: formValues.name, about: formValues.about })
    .then((updatedUser) => {
      userInfo.setUserInfo({
        name: updatedUser.name,
        about: updatedUser.about,
      });
      editPopupForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => editPopupForm.renderLoading(false));
});

editPopupForm.setEventListeners();

const addCardPopup = new PopupWithForm(".popupPlace", (formValues) => {
  addCardPopup.renderLoading(true);

  api
    .addCard({ name: formValues.placeTitle, link: formValues.placeImage })
    .then((newCardData) => {
      const newCard = new Card(
        newCardData,
        ".card-template",
        handleCardClick,
        handleDeleteClick,
        handleLikeClick,
      );
      const cardElement = newCard.generateCard();
      cardSection.addItem(cardElement);
      addCardPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => addCardPopup.renderLoading(false));
});

addCardPopup.setEventListeners();

const confirmPopup = new PopupWithConfirmation(".popupDeleteConfirmation");

confirmPopup.setEventListeners();

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
  editPopupForm.open();
});
const addButton = document.querySelector(".profile__addButton");
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const avatarButton = document.querySelector(".profile__avatar-button");
avatarButton.addEventListener("click", () => {
  avatarPopup.open();
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
const avatarForm = document.querySelector("#avatarForm");

const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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
