var i = 10;

function outer() {
    var j = 20;

    //console.log(i, j);

    // function inner() {
    //     var k = 30;
    //     console.log(j, k);
    // }

    // inner();
    // var inner = function() {
    //     var k = 30;
    //     console.log(j, k);
    // }
    var inner = function() {
        var k = 30;
        console.log(i, j, k);
        i++;
        j++;
        k++;
    }


    return inner;
}

var inner = outer();

//global
inner();
inner = outer();
inner();

//closure
//= function + lexical enviroment in which function was created