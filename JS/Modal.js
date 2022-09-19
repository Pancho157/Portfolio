function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(index) {
  var modal = document.getElementById("modal");
  modal.innerHTML = "";

  const modalHTML = `
    <div class="projects__modalContent">
      <span class="modal__closeBtn" id="modal__closeBtn">&times;</span>

        <img src="${projects[index].imgURL}" alt="Imagen del proyecto" class="projects__modalImg"/>

        <div class  ="projects__modalRight">

          <h3 class="projects__projectTitle">API REST</h3>

          <div class="projects__projectRedirections">
            <a href="${projects[index].webPage}" class="projectLink__left projects__projectLink">Web Page</a>

            <a href="${projects[index].github}" class="projectLink__right projects__projectLink">GitHub</a>
          </div>

          <hr />

          <p class="projects__projectText projects__centerText">This project uses: </p>

          <p class="projects__projectText projects__centerText">
            ${projects[index].technologies}
          </p>

          <hr />

          <p class="projects__projectText">
            ${projects[index].description}
          </p>
        </div>
      </div>
  `;

  modal.innerHTML = modalHTML;

  // Renderiza el modal
  modal.style.display = "flex";
}
