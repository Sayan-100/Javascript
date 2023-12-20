//1 pending 2 fulfilled
//3 reject

// var promise = new Promise((resolve, reject) => {
//     resolve("Yay! promise is fulfilled");
// });

// console.log(promise);

var promise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

console.log(promise);