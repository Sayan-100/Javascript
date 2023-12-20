function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function() {
    //     return this.price;
    // }
}

Vehicle.prototype.getPrice = function() {
    return this.price;
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 50000);

vehicle1.color = 'green';
Vehicle.prototype.color = 'green';