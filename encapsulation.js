let baseSalary = 30000;
let overtime = 20;
let rate = 10

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (rate * overtime)
}

let employee = {
    baseSalary: 30000,
    overtime: 20,
    rate: 10,
    getWage: function () {
        return this.baseSalary + (this.rate * this.overtime)
    }
}


let wage = employee.getWage();

console.log('wage>>>>', wage);