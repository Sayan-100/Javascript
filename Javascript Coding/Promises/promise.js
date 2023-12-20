
var userLoggedIn = true;


function checkUserLoggedIn () {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userLoggedIn) {
                resolve('User Logged In');
            } else {
                reject();
            }
        }, 1000);
    })

    return promise;
}
// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(userLoggedIn) {
//             resolve('User Logged In');
//         } else {
//             reject();
//         }
//     }, 1000);
// })

// setTimeout(() => {
//     userLoggedIn = false;
// }, 2000);

// promise.then((successMsg) => {
//     console.log(successMsg);
// }).catch(() => {console.log('User not logged in');})


checkUserLoggedIn().then((successMessage) => {
    console.log(successMessage);
}).catch(() => console.log('User not logged in'))


//three ajax calls asynchronous but want to execute them synchronously

/*

//callback 
$.ajax({
    success : function () {
        $.ajax({
            success : function () {
                $.ajax({
                    success : function () {
                        $.ajax({

                        })
                    }
                })
            }
        })
    }
})
*/

// user loggedin -> true -> userFriend 

//with promise
// checkUserLoggedIn().then(fetchUserFeed).then(fetchUserFriends).then().catch()
