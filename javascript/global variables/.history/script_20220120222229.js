// function print() {
//     var name = "File1";

//     setTimeout(function() {
//         console.log(name);
//     }, 1000);
// }

//IIFE
// (
//     function() {
//         var name = "File1";

//         setTimeout(function() {
//             console.log(name);
//         }, 1000);
//     }
// )();
// var name = "File1";

// setTimeout(function() {
//     console.log(name);
// }, 1000);

// print();


// var name = "File2";
// console.log(name);
//name variable takes the "File2" after "File1"

var name = "File1";

setTimeout(function() {
    console.log(name);
}, 1000);