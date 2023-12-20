// this -> the javascript context object in which javascript code is running
// first class function pass functions as arguments ans return them as values 

'use strict';

function f(a, b) {
    console.log(this);
    //undefined in strict m
    console.log(a, b);
}

var c = function() {
    console.log(this);
}

// console.log(this);
// f();



// c();

var obj = {
    'prop1': 12,
    'print': function() {
        console.log(this);
    }
}

f.call(obj); // not pick any default value in strict case
f.call(window);

// obj.print();