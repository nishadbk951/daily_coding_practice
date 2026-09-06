// global scope / global variable

let name = 'sneha';

function show(){
    console.log(name);
}
show();
console.log(name)


// function scope

function demo(){
    var age = 22;
    console.log(age);
}
demo();

// block scope
{
    let city = 'calicut';
    console.log(city);
}

// hosting of var

console.log(x);
var x=10;
//

// hostong of let 

 //console.log(num);
//let num = 3;

// hoisting of const

//console.log(num2);
const num2 = 56;

// function hoisting

greet();

function greet(){
    console.log("hellooo")
}

// function expression
// hello();

// var hello = function(){
//     console,log("hii")
// }


//closure

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

const counter = outer();


counter();
counter();
counter();
