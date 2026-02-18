const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

// Utility functions
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  error.textContent = "";
  input.classList.add("valid");
  input.classList.remove("invalid");
}

// Name Validation
nameInput.addEventListener("blur", () => {
  if (nameInput.value.trim().length < 3) {
    showError(nameInput, "Name must be at least 3 characters");
  } else {
    showSuccess(nameInput);
  }
});

// Email Validation
emailInput.addEventListener("blur", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email address");
  } else {
    showSuccess(emailInput);
  }
});

// Phone Validation
phoneInput.addEventListener("blur", () => {
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    showError(phoneInput, "Phone must be 10 digits");
  } else {
    showSuccess(phoneInput);
  }
});

// Password Validation + Strength
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const strengthText = document.getElementById("strength");

  if (password.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    strengthText.textContent = "";
  } else {
    showSuccess(passwordInput);

    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      strengthText.textContent = "Strong password 💪";
      strengthText.style.color = "green";
    } else {
      strengthText.textContent = "Medium strength password";
      strengthText.style.color = "orange";
    }
  }
});

// Prevent form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameInput.classList.contains("valid") &&
    emailInput.classList.contains("valid") &&
    phoneInput.classList.contains("valid") &&
    passwordInput.classList.contains("valid")
  ) {
    successMessage.textContent = "Registration Successful! 🎉";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
