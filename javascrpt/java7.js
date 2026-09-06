// let obj = {
//     key:value ,
//     key:value ,
//     key:value ,
// }


let student = {
    name:"Rohan",
    age:22,
    course:'PFS'
};

console.log(student);

// ACCESS OBJECT VALUES
    // 1. Dot Notation
    // 2. Object.property

console.log(student.name);
console.log(student.age);

    // 2. Bracket Notation
    // object["property"]

console.log(student["course"]);

// ADD NEW ELEMENT

student.city = 'malappuram';
console.log(student);

// UPDATE VALUE
student.course = 'MERN';
console.log(student);

// DELETE VALUE

delete student.age;
console.log(student);

// object distructing

let student = {
    name:"Neha",
    age:22
}

// without destructing 
let std_name = student.name;
let std_age = student.age;

console.log(std_name);
console.log(std_age);

// with destructing
const { name,age } = student;
console.log(name);
console.log(age);

// rename variables
// const { property : newVar} = objects;

let user = {
    name:"Anu"
};

const { name: username} = user;
console.log(username);

const {name, age = 22 } = user;
console.log(name);
console.log(age);


// copy object
let user = {
    name: "Neja",
    age:22

};

let copy = user;
console.log(copy);

// merge objects

let obj1 = {
    name:"Anu"
};
let onj2 = {
    city:"clt"
};

let res = {
    ...obj1,
    ...obj2
};
console.log(res);

// update object

let product = {
    name:"phone",
    price:50000
}

let update_product = {
    ...product,
    price:20000,
    stoke:true   
};

console.log(update_product);

// rest operator (...)
// const { property, ...others} = objects;

let employee = {
    emp_name:"Rahul",
    dept:"it",
    salary:30000
};

const {emp_name,...details} = employee;
console.log(emp_name);
console.log(details);






