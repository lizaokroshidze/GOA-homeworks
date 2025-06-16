const word = "How are you?"; 

function translateWord() {
    let language = prompt("Enter language (Georgian, English, German, French, Russian):");
    
    switch (language.toLowerCase()) {
        case "georgian":
            console.log("Georgian: როგორ ხარ?");
            break;
        case "english":
            console.log(`English: ${word}`);
            break;
        case "german":
            console.log("German: Wie geht's?");
            break;
        case "french":
            console.log("French: Comment ça va?");
            break;
        case "russian":
            console.log("Russian: Как дела?");
            break;
        default:
            console.log("Such language does not exist, try again!");
            translateWord(); 
    }
}

translateWord();
