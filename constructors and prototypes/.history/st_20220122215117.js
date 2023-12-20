// this -> the javascript context object in which javascript code is running
// first class function pass functions as arguments ans return them as values 

'use strict';

function f() {
    console.log(this);
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

obj.print();