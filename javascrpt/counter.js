let count = 0;

let display = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function () {
    count++;
    display.textContent = count;
});
document.getElementById("decrement").addEventListener("click", function (){
    count--;
    display.textContent = count;
});
document.getElementById("reset").addEventListener("click", function (){
    count=0;
    display.textContent = count;
});