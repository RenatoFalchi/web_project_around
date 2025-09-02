/* openPopup;
closePopup;

eventListeners; */

const formSubmitEditProfile = document.querySelector("#editForm");

function handleProfileSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const aboutInput = document.querySelector("#about").value;

  const userName = document.querySelector(".profile__info-name");
  const userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup();

  editForm.reset();
}

formSubmitEditProfile.addEventListener("submit", handleProfileSubmit);

function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    const openedPhotoFrame = document.querySelector(".photoFrame__opened");
    if (openedPopup || openedPhotoFrame) {
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      //////////////////////LEMBRAR DE ALTERAR ISSO CONFORME FUNÇÕES DE CLOSE
      closePopup(openedPopup);
      closeAddPopup(openedPopup);
      closePhotoFrame(openedPopup);
    }
  }
}

export { handleProfileSubmit, handleEscClose };
