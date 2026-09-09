emailjs.init({
    publicKey: "X6lD5f6S4zuyJV9me"
});

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send(
        "service_zkw1xeq",
        "template_u9zoupq",
        templateParams
    )
    .then((response) =>{
        console.log("SUCCESS!");
        document.getElementById("status").textContent ="Message sent successfully!";
        let stat = document.getElementById("status");
        stat.classList.add("success")
        contactForm.reset();
    })
    .catch((error) =>{
        console.log("FAILED...", error);
        document.getElementById("status").textContent
        ="Failed to send message.";
        let stat = document.getElementById("status");
        stat.classList.add("error")
    });
    
});