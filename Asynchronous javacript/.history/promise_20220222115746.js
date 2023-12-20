//1 pending 2 fulfilled
//3 reject

var promise = new Promise((resolve, reject) => {
    resolve("Yay! promise is fullfilled");
});

console.log(promise);