var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ message: 'success' });
    }, 3000);
});

console.log(promise);
promise.then((data) => {
    console.log(data);
}).catch((error) => {

})