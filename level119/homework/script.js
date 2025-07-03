// 1. კლასის შექმნა
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