let time = document.getElementById("time-display");

let same = document.querySelectorAll(".same");

let adress = ["imgs/black.png","imgs/red.png","imgs/purple.png","imgs/pink.png"];

let clock = document.getElementById("clock")

for( let i = 0; i < same.length; i++) {
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