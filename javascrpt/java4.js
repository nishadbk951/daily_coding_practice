// function declration

// function functionName(){
//     code   }
//}
// functonName();

function greet(){
    console.log("hello javascript")
}

greet();

// functon with parameters

function add(a,b){
    console.log(a+b)
}

(3,5);

//function with return value

function square(a){
    return a * a;
}

console.log(square(5));

let result = square(5);
console.log(result);


// function expression
function greet(){
    console.log("hello javascript")
}
greet();

const greeting = function() {
    console.log("hello javascript");
};

greeting();

// default parameters

function student(name = "gauri"){
    console.log("hello "+name);
}
student();
student("arun");

// rest parameters

function demo(...args){
    console.log(args);
}

demo(1,2,3,4,5,6,7);

//3.Arrow function (=> )

const greeter = () => {
    console.log("Helloooo!!!")
};

greeter();

// arrow function with parameters

const addition = (x,y) => {
    console.log(x+y);
};

addition(2,3);

// arrow function with return

const mul = (x,y) => {
    return x * y
};
 console.log(mul(2,3));

 //implicit return

const square = num => num * num;
console.log(square(5)) 

const cal = (num1,num2) => num1 * num2;
console.log(cal(5,2))


