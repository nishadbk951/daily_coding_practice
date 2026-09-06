// constructor functions

// const obj1 = {
//    name:"anu",
//     age:23
// };

// constructor with custom parameters

// function Student(name,age){
//    this.name = name;
//     this.age = age;

// }

// const s1 = new Student("Anu",22)
// const s2 = new Student("arya",21)
// const s3 = new Student("ali",25)

// console.log(s1)
// console.log(s2)
// console.log(s3)

// default parameters

//function Person(){
  //  this.name = "Neha";

//}

//const p1 = new Person();
//console.log(p1.name);


// methods

//function Employee(name,salary){
  //  this.name = name;
    //this.salary = salary;

    //this.showDetails = function(){
      //  console.log(this.name + ":" + this.salary);
    //};
//}

//const emp = new Employee("midhun",50000);
//console.log(emp);
//emp.showDetails();


//work

// create a constructor function for vehicle






function Vehicle(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const v1 = new Vehicle("pulsor", 150,2013);
const v2 = new Vehicle("honda", 125,2022);
const v3 = new Vehicle("yamaha", 155, 2024);

console.log(v1);
console.log(v2);
console.log(v3);



// 2.create a constructor function with product name , price, display method

function Product(productName,price){
    this.productName = productName;
    this.price = price;

    this.display = function(){
        console.log(this.productName + ":" + price);
    };
}

const pro = new Product("iphone 16",78000);
console.log(pro);
pro.display();




