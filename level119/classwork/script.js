class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
}

const FoxAnimal = new Animal("Mr.fox", "ყვირის");
const LionAnimal = new Animal("Mr.Lion", "Roar");

let map = new Map([
  ["name", "liza"],
  ["surname", "Okroshidze"],
]);

console.log(map.get("name"));
console.log(map.get("surname"));
console.log(map.has("surname")); 

for (let [key, value] of map.entries()) {
  console.log(key, value);
}

map.set("hasLion", "mkavs!");

for (let [key, value] of map.entries()) {
  console.log(key, value);
}


  