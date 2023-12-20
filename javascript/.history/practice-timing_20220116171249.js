var sec = 10;

function sayHello() {
    console.log("after", sec);
    sec--;
    if (sec == 0) {

    }
}

var id = setInterval(sayHello, 1000);