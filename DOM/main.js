const validateForm = function () {
  let str = "";

  if (document.getElementById("name").value.length <= 2) {
    str += "name is missing <br>";
  }
  if (
    document.getElementById("salary").value < 10000 ||
    document.getElementById("salary") > 16000
  ) {
    str += "salary must between 10000-16000 <br>";
  }
  if (!document.getElementById("birthday").value) {
    str += "you did not fill your birthday <br>";
  }
  const phoneno = /^\d{10}$/;
  if (!document.getElementById("phone").value.match(phoneno)) {
    str += "your phone number is not valid";
  }

  const alert = document.createElement("p");

  if (str.length == 0) {
      str = " Welcome "+document.getElementById("name").value
    document.getElementById("fom").style.display = "none";
    alert.innerHTML = str;
  document.body.appendChild(alert);
  } else {
    alert.style.color = "red";
    alert.innerHTML = str;
  document.getElementById("fom").appendChild(alert);
  }
  
};
