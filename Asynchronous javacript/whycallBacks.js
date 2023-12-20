// console.log(1);

// setTimeout(function() {
//     console.log(2); //background no single theraded now
// }, 1000);

// console.log(3);



// var promise = new Promise(function(resolve, reject) {
//     resolve(1);
// })

// promise.then(function(data) {
//     console.log(data);
// });


console.log(2);

var promise = new Promise(function(resolve, reject) {
    resolve(4);
})

promise.then(function(data) {
    console.log(data);
});


console.log(5);