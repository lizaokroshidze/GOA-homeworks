

document.addEventListener("DOMContentLoaded", function () {
    let liz = document.getElementById("liz");
    
    liz.addEventListener("click", function () {
        this.textContent = "ტექსტი შეიცვალა!";
    });
});