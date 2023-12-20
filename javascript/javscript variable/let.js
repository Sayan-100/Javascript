// console.log(a);
// var a = 10;

// if (a <= 10) {

//     //can't use before defination
//     let b = 20;
//     console.log(b);

// }





// var a = 10;

// //global
// if (a <= 10) {
//     // var b = 40;
//     //it is on block scope 
//     let b = 40;
// } else {
//     let c = 50;
// }
// console.log(a, b, c);

var arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i]);
}

for (let i of arr) {
    console.log(i);
}