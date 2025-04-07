function getDayPeriod(){
    let hour = parseInt(prompt("Enter the hour (0-24)"));

    if (isNaN(hour) || hour < 0 || hour > 24) {
        console.log("invalid input! please enter a number betwwen 0 - 24 .")
        getDayPeriod();
        return;
    }

    switch (true) {
        case (hour === 24 || hour === 0 || (hour >= 1 &&  hour < 6 )):
            console.log("Midnight");
             break;
    
        case (hour >= 6 && hour < 12):
            console.log("Morning");
            break;
        
        case (hour >= 12 && hour < 18):
            console.log("Afternoon");
            break;

        case (hour >= 18 && hour <= 23):
            console.log("Evening")
            break;
    }
}

getDayPeriod()
