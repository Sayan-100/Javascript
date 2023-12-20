var sec = 1;

function sayHello() {
    //  console.log("Hello");
    console.log("after", sec);
    sec++;
}


// setTimeout(sayHello, 1000); // it will appear after milisecond

//not function call only pass the function

setInterval(sayHello, 1000); // it will appear after milisecond