var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click', function() {
    console.log('Click-Inner-Div');
});

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function() {
    console.log('Click Outer Div');
});

//inner div is a part of outer div