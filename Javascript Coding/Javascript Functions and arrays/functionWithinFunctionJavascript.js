// function outer() {
//     var outerVar = 10;
//     function inner() { //Ref outer context outer

//         // var innerVar = 100;
//         console.log(outerVar);
//     }

//     inner();
//     // console.log(innerVar);
// }

// outer();


var name = "global";

function outer() {
    var name = "outer";
    function inner() {
        var name = "inner";
        console.log(name);
    }

    inner();
    console.log(name);
}

outer();

console.log(name);




