var student = {
    name : "abc",
    rollNo : 135,
    marks : 90
}

// function printProperty(obj, prop) {
//     console.log(obj[prop]);
// }

// printProperty(student, "marks");

// var obj = {}
// var obj = new Object();

// student.curr = 8;
// console.log(student.curr);

// console.log(student)
// console.log(student["marks"]);

// . notation not used when a key is invalid
// -> "-name"


//delete property

delete student.marks;
console.log(student);
