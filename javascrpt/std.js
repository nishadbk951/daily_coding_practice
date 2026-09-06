let nameInput = document.getElementById("name");
let courseInput = document.getElementById("course");
let button = document.getElementById("Btnclick");
let studentcard = document.getElementById("studentCard");

button.addEventListener("click",function(){
    let name = nameInput.value
    let course = courseInput.value


    let card = document.createElement("div")

    let nameText = document.createElement("p")
    nameText.textContent = "Name:" + name;

    let courseText = document.createElement("p")
    courseText.textContent = "Course:" + course;

    card.appendChild(nameText);
    card.appendChild(courseText);
    studentcard.appendChild(card);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    card.appendChild(deleteButton);
    
    nameInput.value = "";
    courseInput.value = "";

    deleteButton.addEventListener("click", function () {
    card.remove();

});

});