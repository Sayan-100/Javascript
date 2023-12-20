// var a = 10; // global scope
// function outer() { //global scope
//     var a = 20; //function scope
//     var b = 40; // function scope
//     console.log(a, b);
// }

// outer();


//execution 

// outer -----------> [var a, b | this | Ref env -> global]
// ------
// global ----------> [var a | outer func]
// ------


var a = 10;

function outer() {
    var a = 20;
    var b = 40;
    function inner () {
        var a = 100;
        console.log("Inner ", a, b);
    }

    inner();
    console.log("Outer ", a, b);
}

outer();
console.log("Global");

