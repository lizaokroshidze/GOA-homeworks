// მშობელი კლასი: Employee
class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary; // setter გამოიყენება
  }

  // fullName გეტერი
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // fullName სეტერი
  set fullName(value) {
    const parts = value.trim().split(/\s+/);
    this.firstName = parts[0] || "";
    this.lastName = parts[1] || "";
  }

  // yearSalary გეტერი
  get yearSalary() {
    return this.#monthSalary * 12;
  }

  // monthSalary გეტერი
  get monthSalary() {
    return this.#monthSalary;
  }

  // monthSalary სეტერი
  set monthSalary(value) {
    if (value > 0) {
      this.#monthSalary = value;
    } else {
      console.error("ხელფასი უნდა იყოს ნულზე მეტი");
    }
  }

  // id გეტერი
  get id() {
    return this.#id;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }

  // changeDepartment სეტერი
  set changeDepartment([newDepartment, newSalary]) {
    if (
      typeof newDepartment === "string" &&
      typeof newSalary === "number" &&
      newSalary > this.monthSalary
    ) {
      this.department = newDepartment;
      this.monthSalary = newSalary;
    } else {
      console.warn(
        "განყოფილების შეცვლა შეუძლებელია: ან ხელფასი არ არის მომგებიანი, ან მონაცემები არასწორია"
      );
    }
  }

  // yearSalary გეტერის გადაფარვა (მაგ. პრემია 10%)
  get yearSalary() {
    return super.yearSalary * 1.1;
  }

  // info მეთოდი
  info() {
    return `ID: ${this.id}, Full Name: ${this.fullName}, Department: ${
      this.department
    }, Month Salary: ${
      this.monthSalary
    }, Year Salary: ${this.yearSalary.toFixed(2)}`;
  }
}

const mgr = new Manager(1, "Liza", "Okroshidze", 2000, "Sales");

console.log(mgr.info());
// -> ID: 1, Full Name: Liza Okroshidze, Department: Sales, Month Salary: 2000, Year Salary: 26400.00

mgr.changeDepartment = ["Marketing", 2500];
console.log(mgr.info());
// -> განახლებული ინფორმაციით

mgr.fullName = "Nino Beridze";
console.log(mgr.fullName); // -> Nino Beridze
