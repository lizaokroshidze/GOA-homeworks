const colors = ["red", "green", "blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor); // "red"
console.log(secondColor); // "green"

//

const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia",
};

const { name, countryy } = user;

console.log(name); // "Giorgi"
console.log(countryy); // "Georgia"

//

const person = {
  name: "Nino",
  age: 28,
};

const { name: personName, age, country = "Unknown" } = person;

console.log(personName); // "Nino"
console.log(country); // "Unknown"

//

const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]

// 

const student = {
    name: "Luka",
    marks: {
      math: 90,
      physics: 85
    }
  };
  
  const { marks: { math, physics } } = student;
  
  console.log(math);    // 90
  console.log(physics); // 85