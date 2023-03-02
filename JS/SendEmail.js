const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const author = document.getElementById("author").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mf.franciscomuniz@gmail.com",
    Password: "kjzcungqeaqrbbuq",
    To: "mf.franciscomuniz@gmail.com",
    From: author,
    Subject: subject,
    Body: `Enviado por: ${author} <br><br>Asunto: ${subject} <br><br>Mensaje: ${message}`,
  }).then(() =>
    alert("Thanks for contacting, i'll be sending a message as soon as posible")
  );
});
