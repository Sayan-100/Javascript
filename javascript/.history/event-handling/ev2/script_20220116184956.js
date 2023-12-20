var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover', function() {
    console.log('Mouse Over');
});

outerDiv.addEventListener('mouseout', function() {
    console.log('Mouse Out');
});

var searchInput = document.getElementById('search');
var searchInput = document.getElementById('search');

// searchInput.addEventListener('keypress', function() {
//     console.log('Key Pressed');
// });

// document.addEventListener('keypress', function() {
//     console.log('Key Pressed');
// })

//it will not work for arrow, ctrl, shift, alt key so we have to use keydown, keyup
// document.addEventListener('keydown', function() {
//     console.log('Key Down');
// })

//find the key pressed
document.addEventListener('keydown', function(event) {

})