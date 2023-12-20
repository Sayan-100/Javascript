function Vehicle(numWheels, price) {
    this.numwheels = numWheels;
    this.price = price,
        this.getPrice = function() {
            return this.price;
        }
}

var vehicle1 = new vehicle(2, 50000);
var vehicle2 = new vehicle(4, 500000);