
x = 3

switch(x){
    case 3:
        console.log("it's 3")
}

let name = "Liza";
let userName = prompt("Enter your name: ");

switch (userName) {
    case name:
        console.log("Your name is: " + userName);
        break;
    default:
        console.log("It's not your name!");
}


let monthh = parseInt(prompt("შეუყვანეთ თვის რიცხვი (1-12): "));

switch (monthh) {
    case 1:
        console.log("იანვარი");
        break;
    case 2:
        console.log("თებერვალი");
        break;
    case 3:
        console.log("მარტი");
        break;
    case 4:
        console.log("აპრილი");
        break;
    case 5:
        console.log("მაისი");
        break;
    case 6:
        console.log("ივნისი");
        break;
    case 7:
        console.log("ივლისი");
        break;
    case 8:
        console.log("აგვისტო");
        break;
    case 9:
        console.log("სექტემბერი");
        break;
    case 10:
        console.log("ოქტომბერი");
        break;
    case 11:
        console.log("ნოემბერი");
        break;
    case 12:
        console.log("დეკემბერი");
        break;
    default:
        console.log("ასეთი თვე არ არსებობს");
}


function season(month) {
    switch (month) {
        case "მარტი":
        case "აპრილი":
        case "მაისი":
            return "გაზაფხულის";

        case "ივნისი":
        case "ივლისი":
        case "აგვისტო":
            return "ზაფხულის";

        case "სექტემბერი":
        case "ოქტომბერი":
        case "ნოემბერი":
            return "შემოდგომის";

        case "იანვარი":
        case "თებერვალი":
        case "დეკემბერი":
            return "ზამთრის";
        default:
            return "არასწორი თვე";
    }
}

let month = prompt("შეიყვანეთ თვე: ");

console.log(`თქვენი თვე ${month} არის ${season(month)} სეზონი.`);
