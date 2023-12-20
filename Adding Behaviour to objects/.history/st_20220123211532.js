function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(vehicle1);
console.log(vehicle2);