


let h1 = document.querySelector(".clock h1"); // Correctly selects the <h1>

function updateClock() {
    let time = new Date();
    let hours = time.getHours().toString().padStart(2, "0"); // Ensure 2-digit format
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");

    h1.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Update immediately to prevent initial delay