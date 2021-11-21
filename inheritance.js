class Car {
    setName(name) {
        this.name = name
    }

    startEngine() {
        console.log(`car has started for ${this.name}`);
    }

    stopEngine() {
        console.log(`car has stopped for ${this.name}`);
    }
}

class Hyundai extends Car {
    topSpeed(speed) {
        console.log(`top speed for ${this.name} is ${speed}`);
    }
}

let myCar = new Hyundai();
myCar.setName('Venue');
myCar.startEngine();
myCar.stopEngine()
myCar.topSpeed(200);
