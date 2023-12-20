var promise = new promise((resolve, reject) => {
    //wait for 1 sec

    setTimeout(() = {
        //Promise is resolved
        resolve();
    }, 1000);

});

promise.then(() => {
    console.log('Sucessful');
});