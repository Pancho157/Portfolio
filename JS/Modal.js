var firstModal = document.getElementById("firstModal");
var secondModal = document.getElementById("secondModal");
var thirdModal = document.getElementById("thirdModal");
var fourthModal = document.getElementById("fourthModal");

var firstModalOpenButton = document.getElementById("firstProjectModal");
var secondModalOpenButton = document.getElementById("seconsProjectModal");
var thirdModalOpenButton = document.getElementById("thirdProjectModal");
var fourthModalOpenButton = document.getElementById("fourthProjectModal");

var closeModalButton = document.getElementsByClassName("modal__closeBtn")[0];

firstModalOpenButton.addEventListener("click", openFirstModal);
secondModalOpenButton.addEventListener("click", openSecondModal);
thirdModalOpenButton.addEventListener("click", openThirdModal);
fourthModalOpenButton.addEventListener("click", openFourthModal);

closeModalButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function closeModal() {
  firstModal.style.display = "none";
  secondModal.style.display = "none";
  thirdModal.style.display = "none";
  fourthModal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == firstModal) {
    firstModal.style.display = "none";
  } else if (e.target == secondModal) {
    secondModal.style.display = "none";
  } else if (e.target == thirdModal) {
    thirdModal.style.display = "none";
  } else if (e.target == fourthModal) {
    fourthModal.style.display = "none";
  }
}

function openFirstModal() {
  firstModal.style.display = "flex";
}

function openSecondModal() {
  secondModal.style.display = "flex";
}

function openThirdModal() {
  thirdModal.style.display = "flex";
}

function openFourthModal() {
  fourthModal.style.display = "flex";
}
