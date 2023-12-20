class Vehicle 
{
    constructor(numWheels, price)
    {
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice() // in prototype
    {
        return this.price;
    }
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 50000);  