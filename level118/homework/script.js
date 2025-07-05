class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const parts = value.trim().split(/\s+/);
    this.firstName = parts[0] || "";
    this.lastName = parts[1] || "";
  }

  get yearSalary() {
    return this.#monthSalary * 12;
  }

  get monthSalary() {
    return this.#monthSalary;
  }

  set monthSalary(value) {
    if (value > 0) {
      this.#monthSalary = value;
    } else {
      console.error("ხელფასი უნდა იყოს ნულზე მეტი");
    }
  }

  get id() {
    return this.#id;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }

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
        "განყოფილების შეცვლა შეუძლებელია: ან ხელფასი არ არის მომგებიანი, ან მო��[...]"
      );
    }
  }

  get yearSalary() {
    return super.yearSalary * 1.1;
  }

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

mgr.changeDepartment = ["Marketing", 2500];
console.log(mgr.info());

mgr.fullName = "Nino Beridze";
console.log(mgr.fullName);