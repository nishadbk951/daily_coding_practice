// let form = document.getElementById("studentForm");
// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;


//     // create - post
//     fetch("https://jsonplaceholder.typicode.com/users",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
//             name: name,
//             email: email,
//             phone: phone
//         })
//     })

    
//     .then((response)=>{
//         return response.json();
//     })

//     .then(data =>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
// });    



// // get

// function getStudents(){ 
//     fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response) => {
//          return response.json();
//      }) 
//      .then((data) => {
//              console.log("Students:", data);
//      })
//      .catch((error)=>{
//         console.log(error);
//      });
// }
// getStudents();  

// update

// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(e){
//     e.preventDefault();


//     fetch("https://jsonplaceholder.typicode.com/users/4", {
//     method: "PATCH",
//     headers : {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "nishad"
//     })
// })
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });


// })

// // delete

// let del = document.getElementById("dlt");
// del.addEventListener("click",function(e){
//     e.preventDefault();

//     fetch("https://jsonplaceholder.typicode.com/users/6",{
//     method: "DELETE"
// })
// .then((response)=>{
//     if(response.ok){
//         console.log("Data deleted successfully");
//     }
// })
// .catch((error) => console.log(error));

// })



// Instance Method 

// An instance method is a method defined inside a class that can be called using an object created from that class.

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let student1 = new Student("Nishad", 21);

student1.display();

// Inheritance in JavaScript

// Inheritance means a child class can use properties and methods from a parent class.

class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

let dog1 = new Dog();

dog1.eat();
dog1.bark();


// super Keyword

// super is used by a child class to access the parent class.

class Person {

    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {

    constructor(name, course) {
        super(name);
        this.course = course;
    }
}

let student1 = new Student("Nishad", "Python Full Stack");

console.log(student1.name);
console.log(student1.course);