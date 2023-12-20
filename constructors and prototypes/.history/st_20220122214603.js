// this -> the javascript context object in which javascript code is running
// first class function pass functions as arguments ans return them as values 


function f() {
    console.log(this);
}

var demo2 = function f() {
    console.log(this);
}

console.log(this);
f();