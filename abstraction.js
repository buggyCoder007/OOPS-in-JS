function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000;

    this.getEmpSalary = function () {
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log(`Employee salary is ${finalSalary}`);
    }

    this.employeeDetails = function () {
        console.log(`Employee name is ${this.name} and age is ${this.age}`);
    };
}

let emp = new Employee('john', 30, 2000)
emp.employeeDetails();
emp.getEmpSalary()
