
const numbers = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));

function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}


console.log("სრული სია:", numbers);
console.log("ლუწი:", getEvenNumbers(numbers));
console.log("კენტი:", getOddNumbers(numbers));