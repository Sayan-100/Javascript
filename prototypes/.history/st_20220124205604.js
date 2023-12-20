function Vehicle(numWheels, price) {
    this.numwheels = numWheels;
    this.price = price;
    this.getPrice = function() {
        return this.price;
    }
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(Vehicle);

//1 function { 2 prototype };
console.log(Vehicle.prototype);