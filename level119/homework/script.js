
class MyAnimals {
  constructor(Name, Species, Age) {
    this.Name = Name;
    this.Species = Species;
    this.Age = Age;
  }
}

const Animal1 = new MyAnimals("Miki", "Dog", 5);
const Animal2 = new MyAnimals("Fairy", "Cat", 3);
const Animal3 = new MyAnimals("Inna", "Cockroach", 16);

let AnimalMap = new Map([
  [Animal1.Name, Animal1],
  [Animal2.Name, Animal2],
  [Animal3.Name, Animal3]
]);

for (let [name, animal] of AnimalMap.entries()) {
  console.log(`${name} is ${animal.Species}, Age: ${animal.Age} Years`);
}

// SET

const names = ["liza", "ina", "liza", "nikko", "luka"];

const uniqueNames = new Set(names);

console.log(uniqueNames); 

console.log([...uniqueNames]); 

// settimeout

console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 1000); 

setTimeout(() => {
  console.log("End");
}, 2000);


// 

const guests = ["Liza", "Luka", "Ina", "Liza", "Niko", "Luka", "Melano", "Ina", "Niko"];

const uniqueGuests = new Set(guests);

uniqueGuests.forEach(guest => {
  console.log(`შემოწმებულია: ${guest}`);
});