const numbers = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));

const filtered = numbers.filter((num, index) => index % 2 !== 0 && num % 2 !== 0);

console.log("🔢 Original list:", numbers);
console.log("🟠 Filtered (odd index + odd value):", filtered);