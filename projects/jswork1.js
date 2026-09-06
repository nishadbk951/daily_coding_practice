
// let name = 'Nishad'
// let age = 22
// let course = 'python full stack'

// console.log("Name:",name);
// console.log("age:",age);
// console.log("course:",course);

// let x = '5'
// let y = 5

// let price = 14.43
// console.log(typeof price);

// let student = {
//     name : 'nishad',
//     age : 21,
//     place : 'clct'
// }
// console.log(student);

// let fruits = ['apple','orange','grapes']
// console.log(fruits);
// console.log(fruits[1]);

// let name = prompt("enter your name");
// console.log("name is:",name);

// let num1 = parseFloat(prompt("enter first number"));
// let num2 = parseFloat(prompt("enter second number"));

// console.log("first number:",num1);
// console.log("second number:",num2);


// let a = 10
// let b = 20

// console.log(a + b);
// console.log(a - b);

// // let num = 6

// // let square = num * num;
// // console.log(square);

// // avarage

// let d = 10
// let e = 20
// let f = 30

// let avarage = (d+e+f)/3;
// console.log(avarage);


//  console.log("start")

//  for (let i = 1; i <=3; i++){
//      console.log("Learning java - Lesson" + i);
//  }

//  console.log("End");

// console.log("start")

// for (let i = 1; i <=10; i++){
//     console.log(i);
// }

// console.log("stop");


// console.log("start");

// setTimeout(function(){
//     console.log("hello,world")
// },3000)

// console.log("end");

// // callback

// function greet(name,callback){
//     console.log("hello sir "+name);
//     callback();
// }

// function hey(){
//     console.log("Hii");
// }

// greet("nishad",hey);

// function add(a,b,callback){
//     let result = a + b
//     callback(result)
// }
// add(4,3,function(plus){
//     console.log(plus);
// })


// //if

// // let age = 20;

// // if(age >= 18){
// //     console.log("you can vote");
// // }

// let age = 16;

// if (age >=18){
//     console.log("you can vote");
// }else{
//     console.log("no vote");
// }


// let mark = 60;

// if(mark >=90){
//     console.log("A+");
// }else if(mark >=80){
//     console.log("b+");
// }else if (mark >=70){
//     console.log("C+");
// }else{
//     console.log("Fail");
// }

// // let num = 0;

// // if(num > 0){
// //     console.log("positive");
// // }else if (num < 0){
// //     console.log("negative");
// // }else{
// //     console.log("Zero");
// // }

// let num = 5;

// if(num % 2 == 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// // for loop

// for(let i = 1; i <= 5; i++){
//     console.log("hi");
// }

let input = document.getElementById("input");
let Addbuttton = document.getElementById("Addbutton");
// let clearbutton = document.getElementById("Cbutton");
let output = document.getElementById("output");

Addbuttton.addEventListener("click",(function(e){
    e.preventDefault();

    let task = input.value;
    if(task !==""){
        let li = document.createElement("li");
        li.textContent =task;
        let Delbutton = document.createElement("button");
        Delbutton.textContent = "remove";
        Delbutton.addEventListener("click",function(){
            output.removeChild(li);
        })
        
        output.appendChild(li);
        li.appendChild(Delbutton);
        input.value =""; 
    }
}));
// clearbutton.addEventListener("click",function(){
//         output.textContent = "";



// });



