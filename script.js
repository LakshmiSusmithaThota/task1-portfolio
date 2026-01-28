function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "") {
    alert("Name is required");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter valid email");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
