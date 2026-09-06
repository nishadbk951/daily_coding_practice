// CALLBACK HELL

function boilWater(callback){
    console.log("Boiling water...");
    callback();
}

function addTea(callback){
    console.log("Adding tea powder...");
    callback();
}

function addMilk(callback){
    console.log("Adding milk...");
    callback();
}

function serveTea(){
    console.log("Tea is ready.");
}

boilWater(()=>{
    addTea(()=>{
        addMilk(()=>{
            serveTea();
        })
    })

})

// CALLBACK HELL

function add(num1,num2,callback){
    let err = false;
    if (num1==0){
        err=true;
    }
    callback(num1+num2,err);

}

function multiply(num1,num2,callback){
    callback(num1*num2);
}

function div(num1,num2,callback){
    callback(num1/num2);
}

add(10,20,(Sum,err) => {
    if(err){
        console.log("first number is zero")
    }else{
        console.log("sum",Sum)
        multiply(Sum,Sum,(product) => {
            console.log("product:",product);
            div(product,10,(reminder) =>{
                console.log("rem:",reminder)
            })
        })
    }
})

// USING PROMISE
function addition(num1,num2){
    return new Promise ((resolve, reject) =>{
        if (num1==0){
            reject("first number is zero");
        }
        resolve(num1+num2);
    })
}

function multiplication(num1,num2){
    return new Promise ((resolve, reject) =>{
        if(num1==0){
            reject("first number is zero");
        }
        resolve(num1*num2);
    })
}

function div(num1,num2){
    return new Promise ((resolve, reject)=>{
        if(num1==0){
            reject("first number is zero");
        }
        resolve(num1/num2);
    })
}

// promise chaining - multiple .then() methods connected together
addition(10,20)
.then((sum)=>{   //success / fulfilled state
    console.log("sum",sum)
    return multiplication(sum,sum)
})
.then((product)=>{
    console.log("product:",product)
    return div(product,10)
})
.then((rem)=>{
    console.log("remainder:",rem)
})
.catch((err)=>{   // reject state
    console.log(err)
})
.finally(()=>{  // runs whether success / fails
    console.log("Thank you")
})


// ASYNC & AWAIT
function getName() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("meera")
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("8075537951")
            
        },2000 );
    })
}
// pending state
function getUser(){
    let name = getName()
    console.log(name)
    let mobile = getMobile()
    console.log(mobile)
}

getUser()

async function getUser(){
    let name = await getName()
    console.log(name)
    let mobile = await getMobile()
    console.log(mobile)
}

getUser()

// multiple promise in parallel
Promise.all([getName(),getMobile()])
.then((result)=>{
    console.log(result)
})