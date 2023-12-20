function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
}

Vehicle.prototype.getPrice = function() {
    return this.price;
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(vehicle1.__proto__);
console.log(Object.getPrototypeOf(vehicle1));

console.log(Vehicle.prototype.isPrototypeOf(vehicle1));

console.log(vehicle1.hasOwnProperty('price'));
console.log(vehicle1.hasOwnProperty('getPrice'));