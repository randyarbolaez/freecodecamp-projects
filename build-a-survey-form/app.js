var email = document.querySelector('#email');

email.addEventListener('input', function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Input an e-mail!');
  } else {
    email.setCustomValidity('');
  }
});
