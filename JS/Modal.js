var modal = document.getElementById("modal");
window.addEventListener("click", outsideClick);

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function openModal(index) {
  modal.innerHTML = `
    <div class="projects__modalContent">
      <span class="modal__closeBtn" onClick="closeModal()">&times;</span>
    
      <img src="${projects[index].imgURL}" alt="Imagen del proyecto" class="projects__modalImg"/>
    
      <div class="projects__modalRight">
      <h3 class="projects__projectTitle">${projects[index].title}</h3>
    
        <div class="projects__projectRedirections">
          <a href="${projects[index].webPage}" class="projectLink__left projects__projectLink" target="_blank">Web Page</a>

          <a href="${projects[index].github}" class="projectLink__right projects__projectLink" target="_blank">GitHub</a>
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

  // Renderiza el modal
  modal.style.display = "flex";
}

function openModalSpanish(index) {
  modal.innerHTML = `
    <div class="projects__modalContent">
      <span class="modal__closeBtn" onClick="closeModal()">&times;</span>
    
      <img src="${projectsSpanish[index].imgURL}" alt="Imagen del proyecto" class="projects__modalImg"/>
    
      <div class="projects__modalRight">
      <h3 class="projects__projectTitle">${projectsSpanish[index].title}</h3>
    
        <div class="projects__projectRedirections">
          <a href="${projectsSpanish[index].webPage}" class="projectLink__left projects__projectLink" target="_blank">Página Web</a>

          <a href="${projectsSpanish[index].github}" class="projectLink__right projects__projectLink" target="_blank">GitHub</a>
        </div>

        <hr />
            
        <p class="projects__projectText projects__centerText">Este proyecto utiliza: </p>
            
        <p class="projects__projectText projects__centerText">
          ${projectsSpanish[index].technologies}
        </p>
            
        <hr />
            
        <p class="projects__projectText">
          ${projectsSpanish[index].description}
        </p>
      </div>
    </div>
  `;

  // Renderiza el modal
  modal.style.display = "flex";
}
