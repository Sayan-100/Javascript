// function createStudent(name, rollNo, marks) {
//     this.name = name;
//     this.marks = marks;
//     this.rollNo = rollNo;
    
// }

// var student1 = new createStudent('abcd', 18, 88); //constructor
// var student2 = new createStudent('pqrs', 20, 98); //constructor

function Student(name, rollNo, marks) {
    this.name = name;
    this.marks = marks;
    this.rollNo = rollNo;
    console.log(this);
    
}

var student1 = new Student('abcd', 18, 88); //constructor
var student2 = createStudent('pqrs', 20, 98); //constructor