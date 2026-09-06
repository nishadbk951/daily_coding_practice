let password = document.getElementById("password");
let button = document.getElementById("Btn");

button.addEventListener("click",function(){
    if(password.type === "password"){
        password.type = "text";
        button.textContent = "Hide";
    }else{
        password.type = "password";
        button.textContent = "show";
    }
})