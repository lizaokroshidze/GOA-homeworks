// DOM - documnent object model

// let paragraph = document.getElementsByTagName("p");

// paragraph[0].innerHTML = "Hello Liza"

// paragraph[0].style.color = "red"

// paragraph[1].style.backgroundColor = "hotpink"

// paragraph[2].innerHTML = "Hello, Liza!"
// paragraph[2].style.color = "blue"

// function changeContent() {
//     document.getElementById("p1").innerHTML = "Liza"
// }

let h1 = document.getElementsByTagName("h1")

let counter = 0

function increase() {
    counter++
    h1[0].innerHTML = counter
}

function decrease() {
    counter--
    h1[0].innerHTML = counter
}

function reset() { 
    counter = 0
    h1[0].innerHTML = counter
}

