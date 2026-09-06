let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let blueBtn = document.getElementById("blueBtn");
let yellowBtn = document.getElementById("yellowBtn");
let resetBtn = document.getElementById("resetBtn");

redBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "red";
});
greenBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "green";
});
blueBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "blue";
});
yellowBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "yellow";
});
resetBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
});
    
