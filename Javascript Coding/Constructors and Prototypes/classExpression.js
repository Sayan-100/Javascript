var Vehicle = class {
    constructor(numWheels, price) {
        this.numWheels = numWheels;
        this.price = price;
    } 

    getPrice() { 
        return this.price; 
    }
}

var Vehicle1 = new Vehicle(2, 50000);
var Vehicle2 = new Vehicle(4, 100000);