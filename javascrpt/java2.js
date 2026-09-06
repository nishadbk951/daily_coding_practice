// operators

// 1. Arithematic operator

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Assignment operator

let x = 10;
x -= 5; //=> x = x - 5 (10 - 5) =,+=, -=, *=, /=
console.log(x);

// 3. comparison operator  ==,===,!=,>,<,>=,<=
let m ='5';
let n =5;

console.log(m == n);  //true
console.log(m ===n); //false

console.log(m != n); //false

console.log(m > n); //false
console.log(m >= n);//true

console.log(m < n); //false
console.log(m <= n);//true

// 4. Logical operator &&,||,!

let age = 18;
let isLogged = false;

// Logical AND(&&)
console.log(age >= 18 && isLogged); //false
   // true && true => true
   //true && false => false

   // Logical OR(||)
console.log(age >= 18 || isLogged); //true
   // true && false => true
   // false && false=> false
   
   //Logical NOT(!)
console.log(!isLogged); //true
   // !true=> false


let num = parseFloat(prompt("enter the number"));
console.log("number is",num)   
