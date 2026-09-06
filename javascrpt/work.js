let student = {
    name:"nishad",
    age:23,
    course:"bca"
};
console.log(student);

console.log(student.name);
console.log(student['course']);

student.place = 'malappuram';
console.log(student);

delete student.age;
console.log(student);

student.course = 'MERN';
console.log(student);


