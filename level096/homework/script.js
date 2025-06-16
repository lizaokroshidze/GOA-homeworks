// 4) Displaying Input Data
const registerFormDisplay = document.getElementById('registerForm');
const displayedFullname = document.getElementById('displayed-fullname');
const displayedEmail = document.getElementById('displayed-email');
const displayedPassword = document.getElementById('displayed-password');

registerFormDisplay.addEventListener('submit', function (event) {
    event.preventDefault();
    const fullname = document.getElementById('reg-fullname').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    displayedFullname.textContent = fullname;
    displayedEmail.textContent = email;
    displayedPassword.textContent = password;
});

// 5) Registration and Login
let users = [];

function User(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
}

const registerForm = document.getElementById('registerForm');
const registrationMessage = document.getElementById('registration-message');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const fullname = document.getElementById('reg-fullname').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    if (users.some(user => user.email === email)) {
        registrationMessage.textContent = 'Email already exists!';
        registrationMessage.className = 'message error';
        return;
    }

    const newUser = new User(fullname, email, password);
    users.push(newUser);
    registrationMessage.textContent = 'Registration successful!';
    registrationMessage.className = 'message success';
    registerForm.reset();
    console.log('Registered Users:', users); // For debugging
});

const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert('Login successful!');
        loginMessage.textContent = 'Login successful!';
        loginMessage.className = 'message success';
        loginForm.reset();
    } else {
        alert('Login failed. Invalid email or password.');
        loginMessage.textContent = 'Login failed. Invalid email or password.';
        loginMessage.className = 'message error';
    }
});