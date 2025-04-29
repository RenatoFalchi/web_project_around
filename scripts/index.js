// POPUP PARA EDIÇÃO DO NOME

const editButton = document.querySelector(".profile__editButton");
const closeButton = document.querySelector("#closeEditButton");

function openPopup() {
  let popup = document.querySelector(".popupedit");

  popup.classList.add("popup__opened");
}

function closePopup() {
  let popup = document.querySelector(".popupedit");

  popup.classList.remove("popup__opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

let formElement = document.querySelector("#editForm");

function handleProfileSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name").value;
  let aboutInput = document.querySelector("#about").value;

  let userName = document.querySelector(".profile__info-name");
  let userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup();
}

formElement.addEventListener("submit", handleProfileSubmit);

// POPUP PARA ADICIONAR CARTÃO

const addButton = document.querySelector(".profile__addButton");
const closeAddButton = document.querySelector("#closeAddButton");

function openAddPopup() {
  let popup = document.querySelector(".popupPlace");
  popup.classList.add("popup__opened");
}

function closeAddPopup() {
  let popup = document.querySelector(".popupPlace");

  popup.classList.remove("popup__opened");
}

addButton.addEventListener("click", openAddPopup);
closeAddButton.addEventListener("click", closeAddPopup);
/////////////

// INICIO DO CÓDIGO DOS CARTÕES INICIAIS

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

// Seleciona o container da galeria e o template
const galleryGrid = document.querySelector(".gallery__grid");
const cardTemplate = document.querySelector("#card-template").content;

///////////////     CRIA CARTÕES INICIAIS     //////////////////
// Função que cria um card a partir do template
function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true); // Clona o template

  // Atualiza os dados do card
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

  // Adiciona o evento de clique para deletar o cartão
  deleteButton.addEventListener("click", deleteCard);

  likeButton.addEventListener("click", likeButtonAction);

  cardPhotoFrame.addEventListener("click", openPhotoFrame);

  return cardElement;
}

// Renderiza os cards na galeria
function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    galleryGrid.appendChild(cardElement);
  });
}

// Chama a função para exibir os cards ao carregar a página
renderCards();

///////////////     LIKE     //////////////////
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

///////////// PHOTOFRAME    ////////////////////////

const photoFrameCloseButton = document.querySelector("#closePhotoButton");

photoFrameCloseButton.addEventListener("click", closePhotoFrame);

function openPhotoFrame() {
  let photoFrame = document.querySelector(".photoFrame");

  photoFrame.classList.add("photoFrame__opened");
}

function closePhotoFrame() {
  let photoFrame = document.querySelector(".photoFrame");

  photoFrame.classList.remove("photoFrame__opened");
}

/////////CÓDIGO PARA ADICIONAR UM NOVO CARTÃO///////////

// Função que será chamada quando o formulário for enviado
function addNewCard(event) {
  event.preventDefault(); // Impede que a página seja recarregada

  // Captura os valores dos campos do formulário
  const placeTitle = document.querySelector("#placeTitle").value;
  const placeImage = document.querySelector("#placeImage").value;

  // Cria um novo objeto com os dados do novo lugar
  const newCard = {
    name: placeTitle,
    link: placeImage,
  };

  // Adiciona o novo cartão no começo do array
  initialCards.unshift(newCard);

  // Cria o novo cartão e o adiciona diretamente à galeria
  const newCardElement = createCard(newCard);
  galleryGrid.prepend(newCardElement); // Adiciona o novo cartão no começo

  // Fecha o popup
  closeAddPopup();

  // Limpa os campos do formulário
  addForm.reset();
}

// Adiciona o evento de envio do formulário
addForm.addEventListener("submit", addNewCard);

////////////////////////// REMOVER CARTÕES /////////////////////

function deleteCard(event) {
  const cardElement = event.currentTarget.closest(".gallery__grid-card"); // Pega o cartão (pai do botão de delete)
  cardElement.remove(); // Remove o cartão da galeria
}
