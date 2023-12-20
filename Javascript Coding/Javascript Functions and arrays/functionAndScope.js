//global  scope
// var name = "12";
// console.log(name);


//function scope

// var name = "global";
// // console.log(name);

// function scopeDemo() {
//     var name = "function";
//     console.log(name);
// }

// scopeDemo();
// console.log(name);




function c() {
    console.log("Inside c");
}

function b() {
    c()
    console.log("Inside b");
}

function a() {
    b();
    console.log("Inside a");
}

a();

console.log("global context");