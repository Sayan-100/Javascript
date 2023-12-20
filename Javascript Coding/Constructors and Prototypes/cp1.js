'use strict';
// function demo () {
//   console.log(this);  //window object
// }

function demo(a, b) 
{
    console.log(this);
}

// var demo2 = function () {
//     console.log(this);
// }
// console.log(this); //window object
// demo();
// demo2();


// demo(); //this is not bound to any object thats why undefined in case of strict mode
// demo.call(obj); // bound to the specific object
// demo.call(obj, 3, 4);
// demo.apply(obj); //
//demo.apply(obj, [3, 4]);


var obj = {
    'prop1' : 12,
    'print' : function () {
        console.log(this); // obj
    }
}

// obj.print();

// normal
// object

