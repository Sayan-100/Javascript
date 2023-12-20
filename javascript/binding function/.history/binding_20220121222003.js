function Person(name) {
    this.name = name;

    setTimeout(function() {
        console.log(this);
    }, 1000);
}

var p = new Person("Sayan");