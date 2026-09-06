// what is an API? -API (Application programming Interface)
// is a bridge that allows two application to communicate with each other.

// what is FETCH API?
// The Fetch API is a modern javascript method used to communicate with Servers


// It can: CRUD 

// Read data - GET - retrieve data
// Add data - POST -send data
// Update data - PUT - update data
// Delete data - DELETE - delete data


// Syntax :- fetch(url)
fetch('https://jsonplaceholder.typicode.com/users')

// fetch() - sends request
// URL -API endpoint
// Returns - Promise

// Since it returns a Promise, we use:-
// then()
// catch()

// or:
// async
// await

// API usually return data in JSON format.
// {
//     id:1,
//     name:"john",
//     email:"john@gmail.com"
// }

// JSON means - javascript object Notation

// GET REQUEST - used to retrieve data from server

// fetch("https://jsonplaceholder.typicode.com/users")

// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// });


// // READING JSON DATA - response.json() converts JSON response to js object

// fetch('https://jsonplaceholder.typicode.com/posts/1')

// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.body);
// });

// // response.ok check - used to check whether request was successfull.
// // it returns - true(success)/ false(failed)

// fetch('https://jsonplaceholder.typicode.com/usersasdfghjk')

// .then((response)=>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error("Request failed");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

// // POST Request
// // syntax:
// //     fetch(URL,{
// //         method:"POST",
// //         headers:{},
// //         body:JSON.stringify()
// //     })

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title:"javascript",
//         body:"Fetch API",
//         userId:2
//     })
// })

// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// });

// //FETCH USING ASYNC/ AWAIT
// async function getUser() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getUser();


// // POST request with aync/await

// async function addPosts() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users',{
//             method:"POST",
//             headers:{
//                 "Conten-Type":"application/json"
//             },
//             body: JSON.stringify({
//                 title:"new post",
//                 body:"hello javascript",
//                 userId:1
//             })
//         });
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// addPosts();


// UPDATE DATA - PUT

fetch("https://jsonplaceholder.typicode.com/users/2",{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id:2,
        name:"Nishad",
        username:"nishad123",
        email:"nishadbk901@gmail.com",
    })

})
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})


// USING ASYNC

// async function updatepost(){
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/4",{
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 id:1,
//                 title: "Updated Javascript",
//                 body: "Updated Fetch API",
//                 userId: 1
//             })
//         });

//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// updatepost();

// updatepost();

// PATCH - USING .then()

fetch("https://jsonplaceholder.typicode.com/users/4", {
    method: "PATCH",
    headers : {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "javascript advanced"
    })
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

// USING ASYNC
// async function patchpost() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/4",{
//             method: "PATCH",
//             headers: {
//                 "Contact-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "Javascript Advanced"
//             })
//         });

//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// patchpost();


// DELETE
fetch("https://jsonplaceholder.typicode.com/users/4",{
    method: "DELETE"
})
.then((response)=>{
    if(response.ok){
        console.log("Data deleted successfully");
    }
})
.catch((error) => console.log(error));

// // USING ASYNC
// async function deletepost() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/3",{
//             method: "DELETE"
//         });
//         if(response.ok){
//             console.log("Post Deleted Successfully");
//         }else{
//             console.log("Delete Failed");
//         }
//     } catch (erroe){
//         console.log(error);
//     }
// }
// deletepost();


// real time fetch example

let btn = document.getElementById("btn");
let userList = document.getElementById("userlist");

btn.addEventListener("click", async function () {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    userList.innerHTML = "";
    data.forEach((user) => {
        userList.innerHTML += `<li>${user.username}</li>`;
        
    });
    console.log(data);
});