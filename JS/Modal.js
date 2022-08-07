var firstModal = document.getElementById("firstModal");

var firstModalOpenButton = document.getElementById("firstProjectModal");
var closeModalButton = document.getElementsByClassName("modal__closeBtn")[0];

firstModalOpenButton.addEventListener("click", openFirstModal);

closeModalButton.addEventListener("click", closeModal);
firstModal.addEventListener("click", closeModal);


function closeModal() {
  firstModal.style.display = "none";
}

function openFirstModal() {
  firstModal.style.display = "flex";
}
