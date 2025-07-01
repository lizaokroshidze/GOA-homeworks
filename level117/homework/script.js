
class Car {
  constructor(brand, model, year, image, sound) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.image = image;
    this.sound = sound;
  }

  getInfo() {
    return `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`;
  }
}

class BMW extends Car {
  constructor(model, year) {
    super("BMW", model, year, "images/m5bmw.jpg", "sounds/bmw.mp3");
    this.specialFeature =
      "Dynamic sport mode and advanced M-performance tuning.";
    this.engine = "4.4L V8 TwinPower Turbo";
    this.horsepower = 600;
  }

  getInfo() {
    return `${super.getInfo()}
Engine: ${this.engine}
Horsepower: ${this.horsepower} HP
Feature: ${this.specialFeature}`;
  }
}

class Mercedes extends Car {
  constructor(model, year) {
    super(
      "Mercedes-Benz",
      model,
      year,
      "images/sclass.jpg",
      "sounds/mercedes.mp3"
    );
    this.specialFeature = "Luxurious interior with intelligent drive assist.";
    this.engine = "4.0L V8 Biturbo";
    this.horsepower = 577;
  }

  getInfo() {
    return `${super.getInfo()}
Engine: ${this.engine}
Horsepower: ${this.horsepower} HP
Feature: ${this.specialFeature}`;
  }
}

class Audi extends Car {
  constructor(model, year) {
    super("Audi", model, year, "images/audia6.jpg", "sounds/audi.mp3");
    this.specialFeature = "Quattro all-wheel-drive system and digital cockpit.";
    this.engine = "3.0L V6 Turbocharged";
    this.horsepower = 335;
  }

  getInfo() {
    return `${super.getInfo()}
Engine: ${this.engine}
Horsepower: ${this.horsepower} HP
Feature: ${this.specialFeature}`;
  }
}

const cars = {
  bmw: new BMW("M5 Competition", 2022),
  mercedes: new Mercedes("AMG GT 63", 2021),
  audi: new Audi("A6 Quattro", 2023),
};

let currentCar = null;

function showCar(key) {
  currentCar = cars[key];
  document.getElementById("carImage").src = currentCar.image;
  document.getElementById(
    "carName"
  ).innerText = `${currentCar.brand} ${currentCar.model}`;
  document.getElementById("carInfo").innerText =
    "Click 'getInfo' for more details.";
  document.getElementById("carDisplay").classList.remove("hidden");
}

function showInfo() {
  if (currentCar) {
    document.getElementById("carInfo").innerText = currentCar.getInfo();
  }
}

function playEngineSound() {
  if (currentCar) {
    const audio = new Audio(currentCar.sound);
    audio.play();
  }
}
