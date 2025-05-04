
const randomNumbers = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100 - 50));

console.log("Original list:", randomNumbers);

const negativeNumbers = randomNumbers.filter(num => num < 0);
console.log("Negative numbers:", negativeNumbers);

const positiveNumbers = negativeNumbers.map(num => Math.abs(num));
console.log("Converted to positive:", positiveNumbers);