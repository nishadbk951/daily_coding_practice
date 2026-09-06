// sync , async & callbacks

// synchronous js => sync

console.log("start");

for(let i=0;i<100;i++){
    console.log(i)
}
console.log("end");

// asynchronous js => async

console.log("start");

setTimeout(function(){
    console.log("Inside Timeout");
},2000);

console.log("End");


// setTimeout()

// setTimeout(function(){

// },milliseconds);

console.log("Hello");

setTimeout(function(){
    console.log("javascript");
},3000);

console.log("welcome to");

// callback function - a function passed as an argument to another function and executed later


function greet(name,callback) {
    console.log("hello" + name);
    callback();
}

function bye(){
    console.log("byee");
}

greet("diya",bye);

// callback function using anonymous function

function add(a,b,callback){
    let result = a + b;
    callback(result);
}

add(2,3,function(res){
    console.log(res);
})

// async

console.log("Loading...");

setTimeout(function(){
    console.log("Loaded!!");
},1000);

// async callback pattern 

function fetchData(callback){
setTimeout(function(){
    console.log("Fetching data!!");
    callback();
},3000);
}

function displayData() {
    console.log("displaying data");
}

fetchData(displayData);