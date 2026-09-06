// if statement 

// if(condition){
//      code
// }

//let age = 1;

//if(age >= 18){
   // console.log("Eligible to vote");
//}

// if else statement 

// if(condition){
//     // true block
// }else{
//     // false block
// }

// let age = 17;

// if(age >= 18){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not eligible")
// }


// if..else if statement 

// if(condition){
//     // true block
// }else if(condition2){
//     // code
// }else{
//     // code
// }

let marks = 57;

if(marks >= 90){
    console.log("A+");
}else if(marks >= 75){
    console.log("B+");
}else if(marks >= 55){
    console.log("C+");
}else{
    console.log("Fail");
}

// nested if statement

// if(condition1){
//     if(condition2){
//         // code
//     }
// }

// let age = 20;
// let hasId = false;

// if(age >= 18){
//    if(hasId){
//        console.log("Eligible");
//    }else{
//         console.log("Not");
//    }
// }else{
//    console.log("Age is not valid");
// }


// switch satement 

// switch(expression){
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
// }

let day = 3;

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    default:
        console.log("Invalid")
}


// Ternary Operator(?:)  - short form of if..else


// if(condition){
//     // true block
// }else{
//     // false block
// }

// condition ? trueValue : falseValue; 

let color = 'blue';

let result = color == 'blue' ? 'Color is blue' : "This is not blue"

console.log(result)


//let age = 20;
//let agee = age >= 18 ? "Adult" : "Minor"
//console.log(agee)


// LOOPS 

// for , while , do while, for of , for in

// 1. for loop

// for(initialization; condition; increment){
//     // code 
// }


//for(let i = 1;i <= 5;i++){
  //  console.log(i)
//}

// 2. while loop 


// while(condition){
//     // code 
// }

//let i = 1;

//while(i <= 5){
  //  console.log(i);
    //i++;
//}


// 3. do while loop 

// do{
//     // code
// }while(condition);

let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 5);


// 4. for of loop => used to iterate over array values.

// for(let variable of array){
        // code
// }

let fruits = ['apple','orange','mango','grapes']

for(let f of fruits){
    console.log(f);
}


// 5. for in loop => used to iterate over object keys(property name).

// for(let key in object){
        // code
// }

let student = {
    name :'diya',
    age:21,
    course:'pfs'
};

for(let key in student){
    console.log(key)
}

for(let key in student){
    console.log(key + "-" + student[key]);
}
