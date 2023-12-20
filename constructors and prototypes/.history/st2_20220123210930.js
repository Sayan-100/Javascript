'use strict'

// var student1 = {
//     name: "abc",
//     rollNo: 10,
//     marks: 80,

// };

// console.log(student1);

// var student2 = {
//     name: "xyz",
//     rollNo: 20,
//     marks: 85,

// };

// console.log(student2);

//new Object();
function createStudent(name, rollNo, marks) {
    // var student = {};
    // student.name = name;
    // student.rollNo = rollNo;
    // student.marks = marks;
    // return student;

    console.log(this);
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;



}

// var student1 = createStudent("abcd", 15, 78);
var student1 = new createStudent("abcd", 15, 78);
// var student2 = createStudent("pqrs", 20, 77);
// var student2 = new createStudent("pqrs", 20, 77);
var student2 = createStudent("pqrs", 20, 77);

// if not new it will return undefined

console.log(student1);
console.log(student2);