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

function createStudent(name, rollNo, marks) {
    var student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var student1 = createStudent("abcd", 15, 78);

var student2 = createStudent("pqrs", 20, 77);

console.log(student1);
console.log(student2);