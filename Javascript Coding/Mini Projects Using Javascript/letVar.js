// var a = 10;
// console.log(a, b, d);

// if(a <= 10) {
//     var b = 40; //hoisted // globally
// } else { 
//     var d = 50; // globally
// }
// console.log(a, b, d);


// let -> block scope;
var a = 10;
// console.log(a, b, d);

if(a <= 10) {
    console.log(b);
    let b = 40; //hoisted // globally
} else { 
    let d = 50; // globally
}
console.log(a, b, d);

console.log(a);
var a = 10;

if(a <= 10) {
    console.log(b); //can't use let untill defined
    let b = 20;
}