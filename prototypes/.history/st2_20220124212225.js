function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

// only one 
Vehicle.prototype.getPrice = function() {
    return this.price;
};

Vehicle.prototype.color = "Blue";




//1 function { 2 prototype };
console.log(Vehicle.prototype);
console.log(Vehicle.prototype.constructor);
console.log(vehicle1);
console.log(vehicle1.getPrice());
console.log(vehicle1.color);
console.log(Object.getPrototypeOf(vehicle1));
console.log(Object.getPrototypeOf(vehicle1) === Vehicle.prototype);


console.log(Vehicle.prototype.isPrototypeOf(vehicle1));
console.log(Vehicle.prototype.isPrototypeOf(vehicle2));