setTimeout(function() {
    console.log(2);
}, 0);

var promise = new Promise(function(resolve, reject) {
    resolve(4);
});

promise.then(function(data) {
    console.log(data);
});

console.log(6);