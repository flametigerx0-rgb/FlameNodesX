
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  message.textContent =
    "Signup interface ready. Secure authentication backend is not connected yet.";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  message.textContent =
    "Login interface ready. Please connect an authentication provider.";
});
