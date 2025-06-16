
const names = [
    "Liza Okroshidze",
    "Ana Kapanadze",
    "Nino Kvaratskhelia"
];

function getInitials(arr) {
    return arr.map(fullName => {
        const parts = fullName.trim().split(" ");
        if (parts.length >= 2) {
            return `${parts[0][0]}.${parts[1][0]}`;
        } else {
            return fullName;
        }
    });
}

console.log("სრული სახელები:", names);
console.log("ინიციალები:", getInitials(names));