// getter - get - იღებს
// setter - set - აყენებს

class animals {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  walk(){
    console.log("Animals can walk")
  }

  get myMethod(){
    return `dog: ${this.name}`
  }
}

const dog = new animals('miki','labrador');

console.log(dog)

console.log(dog.myMethod)

dog.name = 'super gela'

console.log(dog.name)