let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");
// let delALLBtn = document.getElementById("delALL");

button.addEventListener("click",function () {
    let task = input.value;
    if(task !=="") {
        let li = document.createElement("li");
        li.textContent = task;
        let delBtn = document.createElement("button");
        delBtn.textContent = 'x';
        delBtn.addEventListener("click", function () {
            list.removeChild(li);
        });
        // delALLBtn.addEventListener("click",function() {
        //     list.textContent = "";
        //})
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = "";
    }
});