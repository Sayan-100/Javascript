// $('#para1').css('color', 'red');
// $('p').css('color', 'blue');
// $('p').css('fontSize', '30px');

$('p').css({
    fontSize: "30px",
    color: "red"
});

$('div').css({
    height: "100px",
    width: "100px",
    backgroundColor: "blue"
})

// $('div').click(function() {
//     alert("Div clicked");
// });

$('div').on('click', function() {
    alert("Div is clicked here");
})

// .click()
// .focus()
// .blur()
// .change()
//.ready()

$('a').on('click', function() {
    alert("Anchor tag Clicked");
})