// ARRAY

let fruits = ['apple','orange','mango'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

// ARRAY METHODS

//1. push() - add element at the end of the array

fruits.push('banana');
console.log(fruits);

//2. pop() - remove element from the end of the array

fruits.pop();
console.log(fruits);

//3. splice - add/remove elements from any position

// array.splice(startIndex,deletcount,items1,items)

let fruits = ['apple','orange','mango'];

//remove element
fruits.splice(1,2);
console.log(fruits);

//add element

fruits.splice(1,0,'banana','grapes')
console.log(fruits)

//replace element

fruits.splice(1,1,'grapes')
console.log(fruits)

//remove all element after an index

fruits.splice(0);
console.log(fruits);

//insert at the beginning

fruits.splice(0,0,'grapes')
console.log(fruits)

//remove last element
fruits.splice(2,1);
console.log(fruits);

fruits.splice(-1,1);
console.log(fruits)

// replace multiple elements

let alpha = ['a','b','c','d']
console.log(alpha)

alpha.splice(0,2,'f','g')
console.log(alpha)

//4. sort()

let names = ['lisana','nishad','abida']
names.sort();
console.log(names);

//5. reverse()

names.reverse();
console.log(names);

//6. shift() - remove the first element
names.shift();
console.log(names);

//7. unshift() - add element at the beginning
names.unshift('abc');
console.log(names)

// find()

let numbers = [10,20,30,40];

let result = numbers.find(num => num > 25);

console.log(result);

// 9. foreach()

let fruits = ['apple','orange','mango'];

fruits.forEach(function(items){
    console.log(items)
})

// 10.filter()
let nums = [10,20,30,40];

let res = nums.filter(num => num > 25);

console.log(res);

