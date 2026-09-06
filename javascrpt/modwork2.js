let input = document.getElementById("name");
let button = document.getElementById("btn");
let Uorderd = document.getElementById("uol");

button.addEventListener("click",function(e){
    e.preventDefault();

    let li= document.createElement("li");
    li.textContent = input.value;
    Uorderd.appendChild(li);
    input.value = "";



})