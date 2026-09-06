// let nameInput = document.getElementById("name");
// let ageInput = document.getElementById("age");
// let courseInput = document.getElementById("course");
// let button = document.getElementById("btn");
// let result = document.getElementById("result");

// button.addEventListener("click", function(){

//     let Name = nameInput.value;
//     let Age = ageInput.value;
//     let course = courseInput.value;

//     result.textContent = "My name is " + Name + " i am " + Age + " years old " + " i am learning " + course;

// })

// let markInput = document.getElementById("mark");
// let button = document.getElementById("btn");
// let output = document.getElementById("output");

// button.addEventListener("click", function(){
//     let mark = markInput.value;

//     if(mark >= 50){
//         output.textContent = "you passed";
//     }else{
//         output.textContent = "you failed";
//     }
// })

let markInput = document.getElementById("mark");
let button = document.getElementById("Btn");
let result = document.getElementById("result");

button.addEventListener("click", function(){

    let mark = markInput.value;

    if(mark >=90){
        result.textContent = "Exellent";
    }else if(mark >=50){
        result.textContent = "passed";
    }else{
        result.textContent = "failed";
    }

});