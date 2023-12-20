var i = 10;
var j = 100;

function outer() {
    var j = 20;
    console.log(i, j);
    var inner = function () {
        var k = 30;
        console.log(j, k);
    }

    return inner;
}

var inner = outer();
inner();


//ideally after the execution of outer function it should be there in the stack
//so the j variable should be destroyed and it should searcg j in the global context
//but here it is stoing the lexcal enviromet where inner functionwas created
//that is the outer function ans storing j 

//this is called as closure 
//closure = function + lexical enviroment where function was created


// var i = 10;

// function outer() {
//     var j = 20;
//     var inner = function () {
//         var k = 30;
//         console.log(i, j, k);
//         i++;
//         j++;
//         k++;
//     }

//     return inner;
// }

// var inner = outer(); //fresh outer i = 10, j = 20
// inner(); //fresh inner k = 30, incrementing ref outer i++, j++
// inner(); //fresh inner k = 30 ref to prev outer so 11, 21, 30


var i = 10;

// function outer () {
//     var j = 20;
//     var inner = function () {
//         var k = 30;
//         console.log(i, j, k);
//         i++;
//         j++;
//         k++;
//     }

//     return inner;
// }


// var inner = outer(); // fresh outer
// inner(); //fresj=h inner k = 30, ref outer i = 11, j = 21
// inner = outer(); //fresh outer j = 20;
// inner(); // fresh inner k = 30, ref outer j = 21, i = 11;


