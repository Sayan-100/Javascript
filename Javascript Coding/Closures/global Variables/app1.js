// var name = "File 1";

// setTimeout(function() {
//     console.log(name);
// }, 1000);
// // console.log(name);
// // var name = "File 2";
// // console.log(name);
// // working like this so only one variable
// // name

//function scope

// function print() {
//     var name = "File 1";
//     setTimeout(function() {
//     console.log(name);
//     }, 1000);
// }

// print();

//IIFE -> Immedietly Invoked Function Expression

// (
//     function() {
//         var name = "File 1";
//         setTimeout(function() {
//             console.log(name);
//         }, 1000);
//     }
// )();


//using let

{
    let fileName = "File 1";
    setTimeout(function() {console.log(fileName);}, 1000);
}