console.log(1);

setTimeout(function() {
    console.log(2); //background no single theraded now
}, 1000);

console.log(3);

//single therades