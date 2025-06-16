let numberOfDrumButtons = document.querySelectorAll(".Drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".Drum")[i].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event) {
    console.log(event.key); 
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            const crashCymbal = new Audio("audios/crashcymbal.mp3");
            crashCymbal.play();
            break;

        case "e":
            const rideCymbal = new Audio("audios/ridecymbal.mp3");
            rideCymbal.play();
            break;

        case "a":
            const closedHiHat = new Audio("audios/closedhihat.wav");
            closedHiHat.play();
            break;

        case "s":
            const openHiHat = new Audio("audios/openhihat.wav");
            openHiHat.play();
            break;

        case "d":
            const footHiHat = new Audio("audios/foothihat.wav");
            footHiHat.play();
            break;

        case "f":
            const highTom = new Audio("audios/hightom.wav");
            highTom.play();
            break;

        case "g":
            const lowTom = new Audio("audios/lowtom.wav");
            lowTom.play();
            break;

        case "h":
            const floorTom = new Audio("audios/floortom.mp3");
            floorTom.play();
            break;

        case "j":
            const snareDrum = new Audio("audios/snaredrum.mp3");
            snareDrum.play();
            break;

        case "k":
            const snareDrumCross = new Audio("audios/snaredrumcross.mp3");
            snareDrumCross.play();
            break;

        case "l":
            const bassDrum = new Audio("audios/bassdrum.mp3");
            bassDrum.play();
            break;

        default:
            console.log("Invalid key pressed.");
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

let premiumSoundPlayed = false;  

function playPremiumSound() {
    if (!premiumSoundPlayed) {
        const premiumSound = new Audio("audios/premiumSound.mp3");
        

        premiumSound.play();
        premiumSoundPlayed = true; 

        premiumSound.onended = function() {
            alert("Premium sound has finished playing!");
        };
    } else {
        alert("Premium sound has already been used!");
    }
}