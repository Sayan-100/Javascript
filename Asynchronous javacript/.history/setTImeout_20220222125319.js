// console.log(1);

// setTimeout(function() {
//     console.log(2);
// }, 1000);

// console.log(3); 

console.log(1);

setTimeout(function() {
    console.log(2);
}, 0);

console.log(3); //also 1, 3, 2

///set timeout is not a javascript function

// 1. setTimeout(cb, time)
// 2. start timer
// 3. timer ends ?

/callstack
// 1. console.log(1);
// 2. setTimeout(very small time eventually have no effect on callstack)
// 3.console.log(3);