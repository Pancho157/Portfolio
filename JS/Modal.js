var modal = document.getElementById("modal");
var modalOpenButton = document.getElementsByClassName("projectModal")[0];
var closeModalButton = document.getElementById("modal__closeBtn");

modalOpenButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function openModal() {
  modal.style.display = "flex";
}
