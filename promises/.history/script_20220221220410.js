//if after 1 sec user is logged in or not 

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

promise.then(() => {
    console.log('Sucessful');
}).catch(() => {
    console.log('usetr not logged in');
});