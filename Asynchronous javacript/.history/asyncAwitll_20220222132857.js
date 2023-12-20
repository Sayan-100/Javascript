// var promise = new Promise(function(resolve, reject) {
//     resolve('Resolved');
// });


// promise.then(data => console.log(data));

Promise.resolve('Resolved').then(data => console.log(data));


async function asyncTask() { //return a promise
    return "Resolved";
}