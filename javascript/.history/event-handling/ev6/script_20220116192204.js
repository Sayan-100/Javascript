//strict mode

//complete document




var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
// var count = 0;

count = 0;

box.addEventListener('click', function() {
    "use strict";
    count++;
    d = 010;
    console.log(count);
    clickCount.innerText = count + " ";
});