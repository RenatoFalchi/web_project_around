function checkInputValidity(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if (!inputElement.validity.valid) {
    inputElement.classList.add("popup__form-fieldsetInput_error");
    errorElement.textContent = inputElement.validationMessage;
  } else {
    inputElement.classList.remove("popup__form-fieldsetInput_error");
    errorElement.textContent = "";
  }
}

function toggleButtonState(formElement) {
  const button = formElement.querySelector(".popup__save-button");

  const inputs = Array.from(
    formElement.querySelectorAll(".popup__form-fieldsetInput")
  );

  const isFormValid = inputs.every((input) => input.validity.valid);

  button.disabled = !isFormValid;
  button.classList.toggle("popup__save-button_disabled", !isFormValid);
}

const forms = document.querySelectorAll(".popup__form");

forms.forEach((form) => {
  const inputs = form.querySelectorAll(".popup__form-fieldsetInput");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input);
      toggleButtonState(form);
    });
  });

  toggleButtonState(form);
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closePopup(popup);
      closeAddPopup(popup);
      closePhotoFrame(popup);
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup__opened");
    const openedPhotoFrame = document.querySelector(".photoFrame__opened");
    if (openedPopup || openedPhotoFrame) {
      console.log("mais outro teste");
      closePopup(openedPopup);
      closeAddPopup(openedPopup);
      closePhotoFrame(openedPopup);
    }
  }
});
