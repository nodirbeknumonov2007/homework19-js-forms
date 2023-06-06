const USERNAME = "username";
const PASSWORD = "password";

const form = document.querySelector("form");
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector(".submitBtn");
submitBtn.style.cursor = "pointer"

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username === "nodirbek" && password === "7777777") {
    alert("Login successful!");
    localStorage.setItem("USERNAME", username);
    localStorage.setItem("PASSWORD", password);
    window.location.href = "form-page.html";
  } else {
    submitBtn.style.cursor = "not-allowed !important";
    alert("You entered the wrong password or username ☹.");
  }
});

// const loginForm = document.querySelector("#login-form");
// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");
// const submitButton = document.querySelector(".submitBtn");

// submitButton.addEventListener("click", function (event) {
//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   if (username === "your_username" && password === "your_password") {
//     submitButton.style.cursor = "pointer";
//     window.location.href = "example.html";
//   } else {
//     submitButton.style.cursor = "not-allowed";
//     event.preventDefault(); 
//   }
// });
