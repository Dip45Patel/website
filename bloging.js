
function scrollToBlog() {
  document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
}

function expandBlog(blogNumber) {
  var blogExpandId = "blog-expand-" + blogNumber;
  var blogElement = document.getElementById(blogExpandId);

 
  if (blogElement.classList.contains("show")) {
    blogElement.classList.remove("show");
  } else {
    blogElement.classList.add("show");
  }
}


function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var contactMessage = document.getElementById("contact-message");


  if (name == "" || email == "" || message == "") {
    contactMessage.textContent = "Please fill all fields.";
    contactMessage.classList.remove("success");
    contactMessage.classList.add("error");
  } else {
    contactMessage.textContent = "Thank you for contacting me!";
    contactMessage.classList.remove("error");
    contactMessage.classList.add("success");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
