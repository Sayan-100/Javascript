var arr = [1, 2, 3, 4, 5];

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


arr.forEach(function(element) {
    console.log(element);
})

arr.forEach(function(element, index) {
    console.log(element, index);
})

