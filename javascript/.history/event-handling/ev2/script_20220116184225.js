var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover', function() {
    console.log('Mouse Over');
});

outerDiv.addEventListener('mouseout', function() {
    console.log('Mouse Out');
});

// var searchInput = document.getElementById('search');
var searchInput = document.getElementById('search');

searchInput.addEventListener('keypress', function() {
    console.log('Key Pressed');
})