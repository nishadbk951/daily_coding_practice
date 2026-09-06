// Loading states - data is being fatched ,process is runnung
// usualy displayed using spinner , loading text,progress bar


// basic fatch
// fatch("https://jsonplaceholder.typicode.com/users")
// .then((response) =>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// });

// // adding loading state

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     document.getElementById("status").textContent = "Data Loaded";
//     console.log(data);
// });

// // spinner example

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     document.getElementById("spinner").style.display = "none";
//     console.log(data);
// });

// // error handling with catch()

// fetch("wrong-url")

// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("Error occured");
// });

// // showing error message in UI

// fetch("wrong-url")

// .then((response)=>{
//     return response.json();
// })
// .catch((error)=>{
//     document.getElementById("message").textContent = "Failed to load data";
// });

// // loading + error together

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Request failed");
//     }
//     return response.json();
// })
// .then((data)=>{
//     document.getElementById("loading").style.display = "none";
//     console.log(data);
// })
// .catch((error)=>{
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("error").textContent = "Failed to load data";
// });






// callback questions

// function getName(callback) {
//     console.log("Name: Rahul");
//     callback();
// }

// function getCourse(callback) {
//     console.log("Course: Python");
//     callback();
// }

// function getLocation() {
//     console.log("Location: Kochi");
// }

// getName(function() {
//     getCourse(function() {
//         getLocation();
//     });
// });



function selectFood(callback) {
    console.log("Food Selected");
    callback();
}

function prepareFood(callback) {
    console.log("Preparing Food");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

selectFood(function() {
    prepareFood(function() {
        deliverFood();
    });
});




function add(num1, num2, callback) {
    let err = false;

    if (num1 == 0) {
        err = true;
    }
    callback(num1 + num2, err);
}

function multiply(num1, num2, callback) {
    callback(num1 * num2);
}

function div(num1, num2, callback) {
    callback(num1 / num2);
}
add(10, 20, (sum, err) => {
    if (err) {
        console.log("First number is zero");
    } else {
        console.log("Sum:", sum);
        multiply(sum, 5, (product) => {
            console.log("Product:", product);
            div(product, 2, (result) => {
                console.log("Result:", result);
            });
        });
    }
});