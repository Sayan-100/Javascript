function test() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    console.log("After for loop", i);
}


// 6 6 6 6 6 6

i = 1, 2, 3, 4, 5, 6