// var student1 = {
//     name : 'abc',
//     rollNo : 10,
//     marks : 80,
// }


// var student2 = {
//     name : 'xyz',
//     rollNo : 20,
//     marks : 88,
// }


function createStudent(name, rollNo, marks) {
    var student = {};
    student.name = name;
    student.marks = marks;
    student.rollNo = rollNo;
    return student;
}

var student1 = createStudent('abcd', 18, 88);
var student2 = createStudent('pqrs', 20, 98);