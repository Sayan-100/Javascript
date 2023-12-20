for(var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

//the i is incrementing very quick it is not waiting for setTimeout 
//thats why after 1 sec the loop is complete and valueof i is 6

for(let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

//every i is bounded for 1 iteration the value will be only there
//for block scope only thats why it will be 1, 2, 3, 4, 5