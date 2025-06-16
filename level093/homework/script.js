const countdown = document.getElementById("Countdown");
const timeElements = countdown.querySelectorAll(".time h3");
const newYearMessage = document.getElementById("newYearMessage");
const canvas = document.getElementById("confetti-canvas");

const newYearDate = new Date("January 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  if (timeLeft <= 0) {
    countdown.style.display = "none";
    newYearMessage.style.display = "block";
    startConfetti();
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const formatted = [days, hours, minutes, seconds].map(num =>
    String(num).padStart(2, "0")
  );

  timeElements.forEach((el, index) => {
    el.textContent = formatted[index];
  });
}

function startConfetti() {
  const confettiSettings = { target: "confetti-canvas", max: 250 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

setInterval(updateCountdown, 1000);
updateCountdown();