//strict mode

//complete document
"use strict";



var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;


box.addEventListener('click', function() {
    "use strict";
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});