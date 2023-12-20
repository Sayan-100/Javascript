var a = 1 / 0;
console.log(a); // Infinity type;

console.log(1 / Infinity);

console.log(Math.pow(10, 2));
console.log(Math.pow(10, 1000)) // beyond a number

console.log(Number.MAX_VALUE);

//NAN -> not a number

console.log(Math.sqrt(-1));

console.log(parseInt("100"));

//Type of


var a = 10

console.log(typeof a);

a = null;
console.log(typeof a); // Object -> bug


// a = Infinity;
// console.log(typeof a); // Infinity -> number

a = NaN;
console.log(typeof a); // NaN -> number
