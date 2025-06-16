// EventListener მაგალითი — ღილაკზე click-ით ტექსტის შეცვლა
// document.getElementById("myBtn").addEventListener("click", function () {
//   document.getElementById("demo").innerText = "ღილაკზე დაწკაპუნდა!";
// });

// --- სლაიდერის კოდი ---
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function updateSlide() {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateSlide();
});

window.addEventListener('resize', updateSlide);
window.addEventListener('load', updateSlide);

// --- Hover / Click სურათები ---
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");

photo1.addEventListener("mouseover", () => {
  photo1.src = "img1-hover.jpg";
});
photo1.addEventListener("mouseleave", () => {
  photo1.src = "img1.jpg";
});

photo2.addEventListener("mouseover", () => {
  photo2.src = "img2-hover.jpg";
});
photo2.addEventListener("mouseleave", () => {
  photo2.src = "img2.jpg";
});

photo3.addEventListener("click", () => {
  photo3.src = "img3-click.jpg";
});
photo3.addEventListener("mouseleave", () => {
  photo3.src = "img3.jpg";
});

// --- სამჯერადი ცვლილება ---
const cyclePhoto = document.getElementById("cyclePhoto");
let state = "start";

cyclePhoto.addEventListener("click", () => {
  if (state === "start") {
    cyclePhoto.src = "middle.jpg";
    state = "middle";
  } else if (state === "third") {
    cyclePhoto.src = "start.jpg";
    state = "start";
  }
});

cyclePhoto.addEventListener("mouseover", () => {
  if (state === "middle") {
    cyclePhoto.src = "third.jpg";
    state = "third";
  }
});

// --- რეგისტრაციის ფორმის ვალიდაცია ---
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const repeat = document.getElementById("repeatPassword").value;

  if (pass === "" || repeat === "") {
    alert("Input fields cannot be empty.");
  } else if (pass !== repeat) {
    alert("Passwords do not match eachother. Try again.");
  } else {
    alert("Your login was successful");
  }
});