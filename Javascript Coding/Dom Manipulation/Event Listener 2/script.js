var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover', function() {
    console.log('Mouse over');
})

outerDiv.addEventListener('mouseout', function() {
    console.log('Mouse out');
})


// var search = document.getElementById('search');
// search.addEventListener('keypress', function() {
//     console.log('Key pressed');
// });




// document.addEventListener('keypress', function() {
//     console.log('Key pressed');
// })

// document.addEventListener('keydown', function() {
//     console.log('Key Down');
// });

document.addEventListener('keydown', function(event) {
    console.log('Key Down', event.keyCode);
});
