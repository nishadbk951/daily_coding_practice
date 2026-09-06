let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputCourse = document.getElementById("course");
let inputEmail = document.getElementById("email");
let submitButton = document.getElementById("button")
let updateButton = document.getElementById("updatebutton");
let deleteButton = document.getElementById("deletebutton");

let result = document.getElementById("result");

submitButton.addEventListener("click",function(e){
    e.preventDefault();

    let name = inputName.value;
    let age = inputAge.value;
    let course = inputCourse.value;
    let email = inputEmail.value;

    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    localStorage.setItem("course",course);
    localStorage.setItem("email",email);

    let student ={
        name:name,
        age:age,
        course:course,
        email:email
    }

    let store = JSON.parse(localStorage.getItem("student"));
    
    
    document.getElementById("result").innerHTML = "name: "+ name +   " age: "+ age + " course: " +course + " email: " +email;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";

});

//update button




