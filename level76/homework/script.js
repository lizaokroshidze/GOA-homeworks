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
