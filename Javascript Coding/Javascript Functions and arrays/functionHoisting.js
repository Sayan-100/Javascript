//variable hoisting---------

// console.log(j); //variable hoisting

// function hoistingDemo () {
//     console.log(i);
//     var i = 10;
// }

// //variable hoisting happens here 
// //all the variables moved to top

// // function hoistingDemo() {
// //     var i;
// //     console.log(i);
// //     i = 10;
// // }

// hoistingDemo();

// var j = 10;

//function hoisting-----------


hoistDemo();

function hoistDemo() {
    console.log(i);
    var i = 10;
}

//function delcearation moved up
// function hoistDemo() {
//     console.log(i);
//     var i = 10;
// }

// hoistDemo();