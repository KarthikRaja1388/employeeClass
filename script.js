class Employee {
  name;
  position;
  salary;

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return `Salary is ${this.salary}`;
  }
}

let btnGetSalary = document.querySelector(".btn-get-salary");
let nameElementNode = document.querySelector(".name");
let positionElementNode = document.querySelector(".position");
let salaryElementNode = document.querySelector(".salary");
let display = document.querySelector(".display");

btnGetSalary.addEventListener("click", () => {
  let employee = new Employee(
    nameElementNode.value,
    positionElementNode.value,
    salaryElementNode.value
  );

  console.log(employee.getSalary());
  display.textContent = employee.getSalary();
});
