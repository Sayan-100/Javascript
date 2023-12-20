// function Person(name) {
//     this.name = name;

//     console.log(this);
//     setTimeout(function() {
//         console.log(this);
//     }, 1000);
// }

// var p = new Person("Sayan");

function Person(name) {
    this.name = name;
    console.log(this);

    setTimeout(() => console.log(this), 1000);
    //don't have this outer function
}

var p = new Person("Sayn");