var promise = new Promise(function(resolve, reject) {
    resolve('Resolved');
});


promise.then(data => console.log(data));