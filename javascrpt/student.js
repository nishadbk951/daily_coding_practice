document.getElementById("showBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    document.getElementById("displayName").textContent = "Name : " + name;
    document.getElementById("displayAge").textContent = "Age : " + age;
    document.getElementById("displayCourse").textContent = "Course : " + course;

    document.getElementById("card").style.display = "block";


});