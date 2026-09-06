// 1. what is web storage?
// javascript provides a browser feature called web storage API that allows to store data in the user's browser.


// localstorage
// syntax:-
    // localstorage.setItem("key","vale")

// localStorage.clear()

// setItem() - used to store data
localStorage.setItem("username","ayana")

// getItem() - used to retrive stored data
// localStorage.getItem("name");

localStorage.setItem("name","rahul");
let name = localStorage.getItem("name");
console.log(name);

// removeItem() - used to remove a particular item.
// localStorage.removeItem("name");

localStorage.setItem("name","rahul");
localStorage.setItem("age","22");
localStorage.removeItem("name");

// clear() - Deletes everything stored in Localstorge for that origin.
localStorage.clear();

// localstorage.clear(); = could delete data belonging to different features of same website.
// localstorage.removeItem("cart"); = when you only need to remove one item.

//  length = we can find the number of stored items.
console.log(localStorage.length);

// key() = Gets the key at a particular index.
// syntax:-
     // localstorage.key(index);

console.log(localStorage.key(2));
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}

// Local storage stores only strings


let age = 25;
localStorage.setItem("new_age", age);

let result = localStorage.getItem("new_age");
console.log(result);

console.log(typeof result); //string

// what happens with boolean?

let isLoggedIn = true;
localStorage.setItem("isLoggedIn", isLoggedIn);

let res = localStorage.getItem("isLoggedIn");
console.log(res); // true => "true"
console.log(typeof res);  // string

// storing numbers
localStorage.setItem("mark",25);
let new_mark = localStorage.getItem("mark");
console.log(typeof new_mark);

let marks = parseFloat(localStorage.getItem("mark"));
console.log(typeof marks);

// what about arrays ?
// JSON.stringify() converts JavaScript data into a JSON string.

let fruits = ["Apple","Mango","Orange"];
localStorage.setItem("fruits",JSON.stringify(fruits));

console.log(fruits)
//JSON.parse()
let storedFruits = JSON.parse(localStorage.getItem("fruits"));
console.log(storedFruits);

// Objects

let student = {
    name:"Rahul",
    age: 21,
    course: "Python"
};
localStorage.setItem(
    "student",
    JSON.stringify(student)
);

let studentData = JSON.parse(
    localStorage.getItem("student")
);
console.log(studentData);

console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.course);


