class car {
  constructor(color, engine, year, horsepower, interiorColor) {
    this.color = color;
    this.engine = engine;
    this.year = year;
    this.horsepower = horsepower;
    this.interiorColor = interiorColor;
  }

  getCarInfo() {
    console.log(`
        Color: ${this.color},
        Interior color: ${this.interiorColor},
        Engine: ${this.engine}`);
  }
}

class Model extends car {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  fullInfo() {
    console.log(`${this.color} ${this.engine} ${this.year} ${this.horsepower}`);
  }
}

const BMW = new Model("bmw", 2000, "m5");

BMW.fullInfo();
