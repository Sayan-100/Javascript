function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);


Vehicle.prototype.getPrice = function() {
    return this.price;
};


console.log(Vehicl);

//1 function { 2 prototype };
console.log(Vehicle.prototype);
console.log(Vehicle.prototype.constructor);