var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click', function(event) {
    console.log('Click-Inner-Div');
    event.stopPropagation();
});

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function() {
    console.log('Click Outer Div');
});

//inner div is a part of outer div
// document->outerdiv->innerdiv

document.addEventListener('click', function() {
    console.log('Click Document');
})