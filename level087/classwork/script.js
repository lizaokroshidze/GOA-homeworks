let button = document.querySelector("button");

let player1 = document.querySelectorid("player1");

let player2 = document.querySelectorid("player1");

let score1 = document.getElementById("score1");

let score2 = document.getElementById("score2");


button.addEventListener("click", function () {
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1
    player1.src = `disc_${counter1}.png`
});