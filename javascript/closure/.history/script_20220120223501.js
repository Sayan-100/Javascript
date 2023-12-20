var i = 10;

function outer() {
    var j = 20;

    console.log(i, j);

    // function inner() {
    //     var k = 30;
    //     console.log(j, k);
    // }

    // inner();
    var inner = function() {
        var k = 30;
        console.log(j, k);
    }

    return inner;
}

var inner = outer();

//global
inner();

//closure
//= function +lexical enviroment in whichfunction was created