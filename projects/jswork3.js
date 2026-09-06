// calculator

// let num1 = 20;
// let num2 = 10;

// const add = (a,b) =>{
//     return a + b
// }
// console.log(add(num1,num2));

// const sub = (a,b) =>{
//     return a - b
// }
// console.log(sub(num1,num2));

// const div = (a,b) =>{
//     return a / b
// }
// console.log(div(num1,num2));

// const mul = (a,b) =>{
//     return a * b
// }
// console.log(mul(num1,num2));


// let num1 = parseFloat(prompt("enter first number"));
// let num2 = parseFloat(prompt("enter second number"));
// let operator = prompt("enter operator(+,-,*,/");

// if(operator === "+"){
//     console.log(num1+num2);
// }else if(operator ==="-"){
//     console.log(num1-num2);
// }else if(operator ==="*"){
//     console.log(num1*num2);
// }else if(operator === "/"){
//     console.log(num1/num2);
// }else{
//     console.log("invalid operator");
// }


// function outer(){
//     let i = 0;

//     function inner(){
//         i++;
//         console.log(i);
//     }
//     return inner;
// }
// const counter = outer();

// counter();
// counter();


// let numbers = [10,20,30,40,50];

// let result = numbers.find(num => num > 25)
// console.log(result);

// let result = numbers.filter(num => num > 20);
// console.log(result);

// numbers.forEach(number => {
//     console.log(number);
// })



// let mobile ={
//     brand : "samsung",
//     model : "s24",
//     price : 75000
// }
// console.log(mobile.model);


// let book ={
//     title:"javascript",
//     author:"nishad",
//     pages:350
// }
// console.log(book);
// console.log(book.author);
// console.log(book.pages);



// let mobile={
//     brand:"samsung",
//     model:"s24",
//     price:75000
// }

// let {brand,model,price} = mobile;
// console.log(brand);
// console.log(model);
// console.log(price);

// let student = new Map();
// student.set("name","nishad");
// student.set("age",22);
// student.set("course","python");
// console.log(student);

// sync

// console.log("start");

// for(i=1;i<=100;i++){
//     console.log(i);
// }

// console.log("hiii");


// setTimeout(function(){
//     console.log("mid point");
// },3000)

// console.log("end")

function selectfood(callback){
    console.log("food selected");
    callback();   
}
function preparefood(callback){
    console.log("preparing food");
    callback();
}
function deliverfood(){
    console.log("delivered food");
    
}


selectfood(()=>{
    preparefood(()=>{
        deliverfood();
    });
});