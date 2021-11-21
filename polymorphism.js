class Animal {
    constructor(name) {
        this.name = name
    }
    eats() {
        console.log(`${this.name} eats food`);
    }
}
// let animal = new Animal('dog')
// animal.eats()
class Alligator extends Animal {
    eats() {
        super.eats()
        console.log(`${this.name} eats fishes`);
    }
}

let alligator = new Alligator('murphy')
alligator.eats()