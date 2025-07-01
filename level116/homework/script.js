// მშობელი კლასი
class Transport {
  constructor(maxSpeed, color, fuel, brand) {
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.fuel = fuel;
    this.brand = brand;
    this.distanceTraveled = 0;
  }

  refuel(liter) {
    if (typeof liter !== "number" || liter < 0) {
      throw new Error("Liter უნდა იყოს არაუარყოფითი რიცხვი!");
    }
    this.fuel += liter;
  }

  changeColor(color) {
    if (typeof color !== "string") {
      throw new Error("ფერი უნდა იყოს string ტიპის!");
    }
    this.color = color;
  }

  getInfo() {
    return `ეს არის ${this.brand} ბრენდის ტრანსპორტი, 
      რომლის მაქს. სიჩქარეა - ${this.maxSpeed};
      ფერი - ${this.color};
      საწვავის რაოდენობა - ${this.fuel}; 
      განვლილი მანძილი - ${this.distanceTraveled}`;
  }

  move(distance, fuelNeeded) {
    if (typeof distance !== "number" || typeof fuelNeeded !== "number") {
      throw new Error("ორივე არგუმენტი უნდა იყოს რიცხვი!");
    }

    if (this.fuel < fuelNeeded) {
      throw new Error("საწვავი არ არის საკმარისი გადაადგილებისთვის!");
    }

    this.distanceTraveled += distance;
    this.fuel -= fuelNeeded;
  }
}

class Car extends Transport {
  getInfo() {
    return `ეს არის ${this.brand} ბრენდის მანქანა, 
      რომლის მაქს. სიჩქარეა - ${this.maxSpeed};
      ფერი - ${this.color};
      საწვავის რაოდენობა - ${this.fuel}; 
      განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

class Plane extends Transport {
  getInfo() {
    return `ეს არის ${this.brand} ბრენდის თვითმფრინავი, 
      რომლის მაქს. სიჩქარეა - ${this.maxSpeed};
      ფერი - ${this.color};
      საწვავის რაოდენობა - ${this.fuel}; 
      განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

class Boat extends Transport {
  getInfo() {
    return `ეს არის ${this.brand} ბრენდის ნავი, 
      რომლის მაქს. სიჩქარეა - ${this.maxSpeed};
      ფერი - ${this.color};
      საწვავის რაოდენობა - ${this.fuel}; 
      განვლილი მანძილი - ${this.distanceTraveled}`;
  }
}

const myCar = new Car(200, "შავი", 50, "BMW");
console.log(myCar.getInfo());

myCar.refuel(20); 
myCar.move(100, 10);

console.log(myCar.getInfo());

const myPlane = new Plane(900, "თეთრი", 500, "Boeing");
console.log(myPlane.getInfo());

const myBoat = new Boat(80, "ლურჯი", 100, "Yamaha");
console.log(myBoat.getInfo());
