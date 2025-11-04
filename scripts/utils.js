export {
  handleProfileSubmit,
  /*  handleEscClose, */
  setEditFormListener,
  /* openPopup,
  closePopup,
  addPopup, */
};

const formSubmitEditProfile = document.querySelector("#editForm");

function handleProfileSubmit(event, validator) {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const aboutInput = document.querySelector("#about").value;

  const userName = document.querySelector(".profile__info-name");
  const userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup(editPopup);

  formSubmitEditProfile.reset();
  validator.resetValidation();
}

function setEditFormListener(validator) {
  formSubmitEditProfile.addEventListener("submit", (event) => {
    handleProfileSubmit(event, validator);
  });
}

/* const editButton = document.querySelector(".profile__editButton");
const addButton = document.querySelector(".profile__addButton"); */
/* const editPopup = document.querySelector(".popupedit");
const addPopup = document.querySelector(".popupPlace"); */
const closeButtons = document.querySelectorAll(".popup__close-button");

/* function openPopup(popup) {
  popup.classList.add("popup__opened");

  const form = popup.querySelector(".popup__form");
  document.addEventListener("keydown", handleEscClose);
} */

/* function closePopup(popup) {
  popup.classList.remove("popup__opened");

  document.removeEventListener("keydown", handleEscClose);
} */

/* editButton.addEventListener("click", () => {
  openPopup(editPopup);
});
addButton.addEventListener("click", () => {
  openPopup(addPopup);
}); */

/* closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const popup = event.currentTarget.closest(".popup");
    closePopup(popup);
  });
}); */
//
/* function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
} */

/* const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
}); */

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* export {
  handleProfileSubmit,
  handleEscClose,
  setEditFormListener,
  openPopup,
  closePopup,
  addPopup,
};

const formSubmitEditProfile = document.querySelector("#editForm");

function handleProfileSubmit(event, validator) {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const aboutInput = document.querySelector("#about").value;

  const userName = document.querySelector(".profile__info-name");
  const userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup(editPopup);

  formSubmitEditProfile.reset();
  validator.resetValidation();
}

function setEditFormListener(validator) {
  formSubmitEditProfile.addEventListener("submit", (event) => {
    handleProfileSubmit(event, validator);
  });
}

const editButton = document.querySelector(".profile__editButton");
const addButton = document.querySelector(".profile__addButton");
const editPopup = document.querySelector(".popupedit");
const addPopup = document.querySelector(".popupPlace");
const closeButtons = document.querySelectorAll(".popup__close-button");

function openPopup(popup) {
  popup.classList.add("popup__opened");

  const form = popup.querySelector(".popup__form");
  document.addEventListener("keydown", handleEscClose);
}

function closePopup(popup) {
  popup.classList.remove("popup__opened");

  document.removeEventListener("keydown", handleEscClose);
}

editButton.addEventListener("click", () => {
  openPopup(editPopup);
});
addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const popup = event.currentTarget.closest(".popup");
    closePopup(popup);
  });
});
//
function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});
 */
