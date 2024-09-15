const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordValidation = document.querySelector("#password-validation");
const form = document.forms[0];

form.addEventListener("submit", (event) => {
  const passwordValid = comparePasswords();
  if (!passwordValid) {
    event.preventDefault();
    password.setCustomValidity("");
    passwordConfirm.setCustomValidity("");
  }

  passwordValidation.hidden = passwordValid;
});

const comparePasswords = function () {
  if (!password.validity.valid || !passwordConfirm.validity.valid) {
    return false;
  }

  const passwordsMatch = password.value === passwordConfirm.value;
  return passwordsMatch;
};
