class Vehicle {
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice() { 
        return this.price; 
    }

    printDescription() {
        console.log("Vehicle ", this.numWheels, this.price);
    }
}

class Car extends Vehicle {
    constructor(numOfDoors, price) {
        super(4, price); //Parent
        this.numOfDoors = numOfDoors;
    }

}


var car1 = new Car(4, 10000);
console.log(car1);