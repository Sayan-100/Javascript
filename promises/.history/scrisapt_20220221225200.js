// callback hell 
// when we chain lot of asynchronous request

// Request1 - > Request2 - > Request3 - > Request4

/*

$.ajax({
    success : function(){
        $.ajax({
            success : function(){
                $.ajax(){

                }
            }
        })
    }
})

*/

/*

promise.then().then().then().then().catch()

*/


// User
// log in - > true - > fetch user feeds - > fetch user friends
//if after 1 sec user is logged in or not 

var userLoggedIn = true;

// var promise = new Promise((resolve, reject) => {
//     //wait for 1 sec

//     setTimeout(() => {
//         //Promise is resolved
//         resolve();
//     }, 1000);

// });

function checkUserLoggedIn() {
    var promise = new Promise((resolve, reject) => {
        //wait for 1 sec

        setTimeout(() => {

            if (userLoggedIn) {
                //Promise is resolved
                resolve('user logged in');
            } else {
                reject();
            }
        }, 1000);

    });

    return promise;
}


// var promise = new Promise((resolve, reject) => {
//     //wait for 1 sec

//     setTimeout(() => {

//         if (userLoggedIn) {
//             //Promise is resolved
//             resolve('user logged in');
//         } else {
//             reject();
//         }
//     }, 1000);

// });

setTimeout(() => {
    userLoggedIn = true;
}, 500);

// promise.then(() => {
//     console.log('Sucessful');
// })
// promise.then(() => {
//     console.log('User is Logged in');
// }).catch(() => {
//     console.log('user not logged in');
// });

// promise.then((successMsg) => {
//     console.log(successMsg);
// }).catch(() => {
//     console.log('user not logged in');
// });

checkUserLoggedIn().then((successMsg) => { console.log(successMsg); }).catch(() => { console.log("user not Logged in") });