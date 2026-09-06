// // let setName = new set();

// let set_data = new Set([1,2,3,5]);
// console.log(set_data)


// let nums = [10,20,30,40,20,10];
// console.log(nums)

// let unique = new Set(nums);
// console.log(unique)

// // add()
// let fruits = new Set(['grapes']);

// fruits.add('apple');
// fruits.add('apple');
// fruits.add('orange');
// fruits.add('mango');

// console.log(fruits);

// // delete()

let colors = new Set(['red','blue','green']);

// colors.delete('blue');

// console.log(colors);

// // has() - check if value exists

// let num = new Set([10,20,30]);

// console.log(num.has(20))


// // clear() - romove every element

// let data = new Set([1,2,3]);
// console.log(data);

// data.clear();
// console.log(data);

// // size property
// let product = new Set(['pen','book','pencil']);

// console.log(product.size);

// // iterating through set - for..of

// let colors = new Set(['purple','red','blue','green','yellow']);

// for(let c of colors){
//     console.log(c);
// }

// foreach()

colors.forEach(function(c){
    console.log(c);
});

// foreach() - arrow function

colors.forEach(c => {
    console.log(c)
})

// ...spread operator

// let numbers = [1,2,3,4,4];
// let unique = [...new Set(numbers)];

// console.log(unique);

// // map()

// let map = new Map();

// let student = new Map();
// console.log(student);

// // set() - add key-value pairs

// student.set("name","diya");
// student.Set("age",22);

// console.log(student)

// // get

// let user = new Map();
// user.set("name","nishad");

// console.log(user.get('name'));

// console.log(user.get('age'));


// // delete()

// let user = new Map();
// user.set("name","nishad");
// user.set("age",22);

// user.delete('age');
// console.log(user);

// // has()

// let product = new Map();

// product.set(1,101);
// console.log(product.has(1));

// //clear

// let user = new Map();
// user.set("name","akhil");

// console.log(user);

// user.clear();
// console.log(user);

// // size property

// let user = new Map();
// user.set("name","akhil");
// user.set("age",22);
// user.set("course","pfs");

// console.log(user.size);

// // iteration - for of

// let user = new Map();
// user.set("name","akhil");
// user.set("age",21);
// user.set("course","pfs");

// for(let [k,v] of user){
//     console.log(k,v);
// }

// // foreach- refer

