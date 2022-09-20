let errorMessage = document.createElement("div");
errorMessage.setAttribute("id", "errorMessage");

function validate() {
  const form = document.getElementById("form")
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;
  const date = document.getElementById("date").value;
  const phone = document.getElementById("phone").value;

  if (name.length < 3) {
    errorMessage.innerHTML = "Name must be longer than 2 characters";
  } else if (!(10000 < salary && salary < 16000)) {
    errorMessage.innerHTML =
      "Salary must be greater than 10,000 but less than 16,000";
  } else if (date.length === 0) {
    errorMessage.innerHTML = "Please enter you bday";
  } else if (phone.length != 10) {
    errorMessage.innerHTML = "Phone must be 10 digits long";
  }
  else{
    form.style.display = "none"
    const welcome = document.createElement("h1")
    welcome.innerHTML = "Welcome in, " + name
    document.body.appendChild(welcome)
  }
  document.getElementById("form").appendChild(errorMessage);
}
