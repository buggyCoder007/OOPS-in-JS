//create object using oject litral...

const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('drawing circle...');
    }
}

// console circle1 = new Object()

circle1.draw()

//factory method...  
//return a object directly it is a factory fun

function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('drawaing another circle...');
        }
    }
}

const circle2 = createCircle(1) // returns circle object... then call draw method..

//constructor method...
// a regular func with this and new keyword it is a constructor func

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('drwaing the third circle... ');
    }
}


const circle3 = new Circle(1)

circle3.draw()

///////////// FUNCTIONS ARE OBJECTS ///////


function Square(side) {
    this.side = side
    this.calculateArea = function () {
        console.log('calculated area is..', this.side * this.side)
    }
}

const square = new Square(2);

const square1 = Square.call({},3)
square1.calculateArea()
