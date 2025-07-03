class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
}

const FoxAnimal = new Animal("Mr.fox", "ყვირის");
const LionAnimal = new Animal("Mr.Lion", "Roar");

// Map შექმნა
let map = new Map([
  ["name", "liza"],
  ["surname", "Okroshidze"],
]);

// Key-ების მნიშვნელობების ამოღება
console.log(map.get("name"));
console.log(map.get("surname"));
console.log(map.has("surname")); 

// ყველა key-value წყვილის გამოტანა
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// ახალ key-value წყვილის დამატება
map.set("hasLion", "mkavs!");

// განახლებული Map-ის წაკითხვა
for (let [key, value] of map.entries()) {
  console.log(key, value);
}


  