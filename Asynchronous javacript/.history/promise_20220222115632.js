//1 pending 2 fulfilled
//3 reject

var promise = new Promise((resolve, reject) => {
    resolve();
});

console.log(promise);