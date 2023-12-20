function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}

// only one 
Vehicle.prototype.getPrice = function() {
    return this.price;
};

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(Object);
console.log(Object.prototype);