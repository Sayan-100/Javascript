var sec = 10;

function sayHello() {
    console.log("after", sec);
    sec--;
    if (sec == 0) {
        clearInterval(id);
    }
}

var id = setInterval(sayHello, 1000);