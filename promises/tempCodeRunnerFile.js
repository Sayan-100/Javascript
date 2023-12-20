var userLoggedIn = true;

// var promise = new Promise((resolve, reject) => {
//     //wait for 1 sec

//     setTimeout(() => {
//         //Promise is resolved
//         resolve();
//     }, 1000);

// });

var promise = new Promise((resolve, reject) => {
    //wait for 1 sec

    setTimeout(() => {

        if (userLoggedIn) {
            //Promise is resolved
            resolve();
        } else {
            reject();
        }
    }, 1000);

});

// setTimeout(() => {
//     userLoggedIn = false;
// }, 500);

// promise.then(() => {
//     console.log('Sucessful');
// })
promise.then(() => {
    console.log('User is Logged in');
}).catch(() => {
    console.log('user not logged in');
});