function Vehicle(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;

}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

// only one 
Vehicle.prototype.getPrice = function() {
    return this.price;
};

Vehicle.prototype.color = "Blue";




//1 function { 2 prototype };
console.log(Vehicle.prototype);
console.log(Vehicle.prototype.constructor);
console.log(vehicle1);
console.log(vehicle1.getPrice());
console.log(vehicle1.color);
console.log(Object.getPrototypeOf(vehicle1));
console.log(Object.getPrototypeOf(vehicle1) === Vehicle.prototype);


console.log(Vehicle.prototype.isPrototypeOf(vehicle1));
console.log(Vehicle.prototype.isPrototypeOf(vehicle2));

//is prperty belon to vehicle
var ans1 = vehicle1.hasOwnProperty('price');
console.log(ans1);
var ans2 = vehicle2.hasOwnProperty('getPrice');
console.log(ans2);
vehicle1.color = "orange";