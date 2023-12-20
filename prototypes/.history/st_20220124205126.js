function Vehicle(numWheels, price) {
    this.numwheels = numWheels;
    this.price = price,
        this.getPrice = function() {
            return this.price;
        }
}