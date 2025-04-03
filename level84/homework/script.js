document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("movableBox");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const step = 10;
    
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "ArrowUp":
                y -= step;
                break;
            case "ArrowDown":
                y += step;
                break;
            case "ArrowLeft":
                x -= step;
                break;
            case "ArrowRight":
                x += step;
                break;
        }
        box.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
    });
});