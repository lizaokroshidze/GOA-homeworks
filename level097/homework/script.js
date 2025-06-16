let time = document.getElementById("time-display");

let same = document.querySelectorAll(".same");

let adress = ["imgs/black.png", "imgs/red.png", "imgs/purple.png", "imgs/pink.png"];

let clock = document.getElementById("clock");

let heartBeat = document.querySelector("#rate");

let timeBut = document.querySelector("#show-time");

let rateDiv = document.querySelector(".rate");

for (let i = 0; i < same.length; i++) {
  same[i].addEventListener("click", () => {
    clock.src = adress[i]
  })
}

setInterval(() => {
  let date = new Date();

  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  time.textContent = `${hour}:${minute}:${seconds}`;
}, 1000);


heartBeat.addEventListener("click", () => {
  time.style.display = "none";
  rateDiv.style.display = "flex";
});

timeBut.addEventListener("click", () => {
  rateDiv.style.display = "none";
  time.style.display = "flex";
});



// შესვლა / რეგისტრაცია


// localStorage.setItem('name','liza')

// console.log(localStorage.getItem('name'))

const loginSection = document.getElementById('login-bg');
const registerSection = document.getElementById('registration-form');

const goToRegister = document.getElementById('go-reg');
const goToLogin = document.getElementById('go-log');

const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-login-2');

const openLogin = document.getElementById('openLogin')


goToRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'none';
  registerSection.style.display = 'flex';
});


goToLogin?.addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.style.display = 'none';
  loginSection.style.display = 'flex';
});


closeLogin.addEventListener('click', () => {
  loginSection.style.display = 'none';
});


closeRegister.addEventListener('click', () => {
  registerSection.style.display = 'none';
});

openLogin.addEventListener('click', () => {
  loginSection.style.display = 'flex';
})


const regForm = document.getElementById('register-form')

let accs = []

const registerFunc = () => {

  regForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value
    let repPassword = e.target.RepeatPassword.value

    if (password == repPassword) {
      let acc = {
        name: name,
        email: email,
        password: password,
        repPassword: repPassword
      }
      accs.push(acc)
      console.log(accs)

      e.target.name.value = ''
      e.target.email.value = ''
      e.target.password.value = ''
      e.target.RepeatPassword.value = ''
    } else {
      alert("Passwords Dont match!try again")
    }

  })

}
registerFunc()


function Constructor(name, surname, email, password) {
  this.name = name
  this.surname = surname
  this.email = email
  this.password = password
}

