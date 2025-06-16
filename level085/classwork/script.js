let audios = [
    "audio/crash.mp3",
    "audio/kick-bass.mp3",
    "audio/snare.mp3",
    "audio/tom-1.mp3",
    "audio/tom-2.mp3",
    "audio/tom-3.mp3",
    "audio/tom-4.mp3"
];

let instruments = document.querySelector(".img-cont")
document.addEventListener("keyup", function (e) {
    if (e.key == "w") {
        let idk = new Audio(audios[0])
        idk.play()
    }

    if (e.key == "a") {
        let idk = new Audio(audios[1])
        idk.play()
    }

    if (e.key == "s") {
        let idk = new Audio(audios[2])
        idk.play()
    }

    if (e.key == "d") {
        let idk = new Audio(audios[3])
        idk.play()
    }

    if (e.key == "j") {
        let idk = new Audio(audios[4])
        idk.play()
    }

    if (e.key == "k") {
        let idk = new Audio(audios[5])
        idk.play()
    }

    if (e.key == "l") {
        let idk = new Audio(audios[6])
        idk.play()
    }
}
)

document.addEventListener("keydown",function(e){
    if (e.key == "w") {
        let idk = new Audio(audios[0])
        idk.play()
    }

    if (e.key == "a") {
        let idk = new Audio(audios[1])
        idk.play()
    }

    if (e.key == "s") {
        let idk = new Audio(audios[2])
        idk.play()
    }

    if (e.key == "d") {
        let idk = new Audio(audios[3])
        idk.play()
    }

    if (e.key == "j") {
        let idk = new Audio(audios[4])
        idk.play()
    }

    if (e.key == "k") {
        let idk = new Audio(audios[5])
        idk.play()
    }

    if (e.key == "l") {
        let idk = new Audio(audios[6])
        idk.play()
    }
}
)