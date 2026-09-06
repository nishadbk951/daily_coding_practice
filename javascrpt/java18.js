// session storsge

// sessionstorsge - is a built-in javascript web storage API
// used to store data temporarily for a browser tab or window.
// the data is available until the tab is closed.


// setItem() - to store data
sessionStorage.setItem("username", "John");

// getItem("key") - retrive data
let username = sessionStorage.getItem("username");
console.log(username);

// update using setItem() - to store data
sessionStorage.setItem("username", "Alice");
sessionStorage.setItem("password", "Alice123");

//removeItem() - remove a specific item
sessionStorage.removeItem("p");

// clear all session storage
sessionStorage.clear();

// storing objects
// since sessionstorage only stores strings, convert objects to JSON.

const user = {
    name: "John",
    age: 25
};

sessionStorage.setItem("user",JSON.stringify(user));

// Retrive the object:

const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user.name);

// check if a key exists

if (sessionStorage.getItem("username")) {
    console.log("username exists");
} else {
    console.log("username not found");
}



