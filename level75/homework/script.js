

let porsche = {
    company: "Porsche",
    model: "911 Turbo S",
    mileage: 25000,
    year: 2022,
    condition: "excellent",
    checkCondition: function(condition) {
        if (condition === "good" || condition === "bad" || condition === "excellent") {
            console.log(`Car is in ${condition} condition`)
        }
    }
}

porsche.checkCondition(porsche.condition)

porsche.color = "black"
porsche.price = 200000
delete porsche.mileage

console.log(porsche)
