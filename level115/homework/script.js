class Shape {
  constructor(length, width, color, coordinates) {
    this.length = length;
    this.width = width;
    this.color = color;
    this.coordinates = coordinates;
  }

  changeLength(newLength) {
    this.length = newLength;
  }

  changeWidth(newWidth) {
    this.width = newWidth;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  changeCoordinates(newCoordinates) {
    this.coordinates = newCoordinates;
  }

  draw() {
    console.log(
      `A shape is being drawn at coordinates ${this.coordinates} with dimensions ${this.length}/${this.width} and color ${this.color}.`
    );
  }
}

class Circle extends Shape {
  draw() {
    console.log(
      `A circle is being drawn at coordinates ${this.coordinates} with dimensions ${this.length}/${this.width} and color ${this.color}.`
    );
  }
}

class Rectangle extends Shape {
  draw() {
    console.log(
      `A rectangle is being drawn at coordinates ${this.coordinates} with dimensions ${this.length}/${this.width} and color ${this.color}.`
    );
  }
}

class Triangle extends Shape {
  draw() {
    console.log(
      `A triangle is being drawn at coordinates ${this.coordinates} with dimensions ${this.length}/${this.width} and color ${this.color}.`
    );
  }
}

const circle = new Circle(10, 10, "red", [5, 5]);
circle.draw();

const rectangle = new Rectangle(20, 15, "blue", [0, 0]);
rectangle.draw();

const triangle = new Triangle(12, 10, "green", [3, 7]);
triangle.draw();
