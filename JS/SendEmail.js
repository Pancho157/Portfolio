(function () {
  emailjs.init("tkDrfnhgir9OuL802");
})();

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const params = {
    author: document.getElementById("author").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_wf72wi6";
  const templateID = "template_qbtuk6a";

  emailjs
    .send(serviceId, templateID, params)
    .then(() => {
      document.getElementById("author").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => console.log(err));
});
