console.log(1);

setTimeout(function() {
    console.log(2);
}, 1000);

console.log(3);

console.log(1);

setTimeout(function() {
    console.log(2);
}, 0);

console.log(3);