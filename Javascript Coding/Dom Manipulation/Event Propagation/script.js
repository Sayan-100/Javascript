var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click', function(event) {
    console.log('Click on Inner Div');
    event.stopPropagation();
});

//event target = inner div
//event target = outer div

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function() {
    console.log('Click on Outer Div');
})