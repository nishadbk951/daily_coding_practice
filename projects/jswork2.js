//for loop
// for (let i = 1; i<=10; i++){
//     console.log(i);
// }

// for (let i = 10; i>=1; i--){
//     console.log(i);
// }

// let num = 8;

// if(num > 0){
//     console.log("positive");
// }else if(num < 0){
//     console.log("negative");
// }else{
//     console.log("Zero");
// }


// let a = 20;
// let b = 40;
// let c = 60;

// if(a>=b && a>=c){
//     console.log(a + "the largest number");
// }else if(b>=a && b>=c){
//     console.log(b + "the largest number");
// }else{
//     console.log(c + "the largest number");
// }


// let mark = 98;

// if(mark >= 90){
//     console.log("A");
// }else if (mark >= 80){
//     console.log("B");
// }else if (mark >= 70){
//     console.log("C");
// }else{
//     console.log("D");
// }

// let a = 30;
// let b = 5;

// console.log("addition:",(a+b));
// console.log("subtraction",(a-b));
// console.log("multiplication:",(a*b));
// console.log("division",(a/b));
// console.log("remainder:",(a % b));

// let c = '5';
// let d = 5;
// console.log(c == d);
// console.log(c === d);

// let age = 20;
// if (age >=18){
//     console.log("elgible for vote ");
// }else{
//     console.log("not elgible for vote");
// }

// let age =19;
// let isCitizen = false;

// if(age >=18 && isCitizen){
//     console.log("elgible");
// }else{
//     console.log("not elgible");
// }

// if(age >= 18){
//     if(isCitizen){
//         console.log("elgible");
//     }else{
//         console.log("not elgible");
//     }
//     }else{
//         console.log("valid");
//     }


//     let num = 4;

//     switch(num){
//         case 1:
//             console.log("monday");
//             break;

//         case 2:
//             console.log("thusday");
//             break;

//         case 3:
//             console.log("wednesday");
//             break;
        
//         case 4:
//             console.log("sunday");
//             break;

//         default:
//             console.log("valid day");
//     }


// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

// for(let i = 20; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 2; i <= 50;i+=2){
//     console.log(i);
// }

// for(let i = 1; i <= 50;i+=2){
//     console.log(i);
// }

// for(let i = 1; i <= 10;i++){
//     console.log(5*i);
// }

// for(let i = 1; i <= 10;i++){
//     console.log("10*"+i+"="+10*i);
// }

// let password ="";

// while(password !== "1234"){
//     password = prompt("enter a password");

// }
// console.log("login successfully");

// function morning(){
//     console.log("good morning");
// }
// morning();

// function student(){
//     console.log("name:nishad");
//     console.log("course:pfs");
// }
// student();
// student();


// function city(place){
//     console.log("place:",place);
// }

// city("malappuram");
// city("kozikode");


// function multiply(a,b){
//     return a * b
// }

// console.log(multiply(4,5));

// let result = multiply(4,5);
// console.log(result);



//expression

let multiply = function (a,b){
    return a * b
}

let result = multiply(8,7);
console.log(result);


let isEven = function(num){
    return num % 2 === 0
}

console.log(isEven(8));
console.log(isEven(7));

// arrow function

const greet = () =>{
    console.log("good morning");
}
greet();

const add = (a,b) =>{
    console.log(a+b);
}
add(15,20);

const cube = (num) =>{
    return num * num * num
}
console.log(cube(3));