function sendMessage() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "mf.franciscomuniz@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New message from Portfolio",
    Body:
      "Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("messageTitle").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) =>
    alert("Message sent successfully/ Mensaje enviado exitosamente")
  );
}
