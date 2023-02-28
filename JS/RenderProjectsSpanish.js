document.addEventListener("DOMContentLoaded", () => {
  let projectsContainer = document.getElementById("projects__container");

  projectsContainer.innerHTML = "";

  let projectsHTML = projectsSpanish
    .map((project, index) => {
      return `
          <article class="projects__project">
              <img src="${project.imgURL}" alt="Imagen del proyecto" />
              <div class="projects__projectRight">
              <h3 class="projects__projectTitle">${project.title}</h3>
  
              <button onClick="openModalSpanish(${index})" class="project__infoButton projectModal ">More info...</button>
  
              <div class="projects__projectRedirections">
                  <a href="${project.webPage}" class="projectLink__left projects__projectLink">Web Page</a>
  
                  <a href="${project.github}" class="projectLink__right projects__projectLink">GitHub</a>
              </div>
              </div>
          </article>
          `;
    })
    .join(" ");

  projectsContainer.innerHTML += projectsHTML;
});
