document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");
  const message = document.getElementById("message");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      message.textContent = "User already exists!";
      return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    message.textContent = "Registration successful!";
    registerForm.reset();
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username] && users[username] === password) {
      message.textContent = "Login successful!";
      localStorage.setItem("loggedInUser", username);
      setTimeout(() => (window.location.href = "index.html"), 1000);
    } else {
      message.textContent = "Invalid username or password!";
    }

    loginForm.reset();
  });
});
