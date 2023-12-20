// function Person(name) {
//     this.name = name;

//     console.log(this);

// they will have separate this
//     setTimeout(function() {
//         console.log(this);
//     }, 1000);
// }


// var p = new Person("vnvds");

function Person(name) {
    this.name = name;
    console.log(this);

    //they don't have separate this they will get from outer scope
    setTimeout(() => console.log(this), 1000);
}

var p = new Person("vnvds");