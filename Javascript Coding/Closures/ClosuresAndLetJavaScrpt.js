

//different i for every iteration
function test() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}


//function test() {
// for(var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000);
// }
//}

//one i for every iteration 

// console.log("After For loop", i);

test();