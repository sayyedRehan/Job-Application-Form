let table = document.getElementById("table");

function submits() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let selectedJob = document.getElementById("jobRole").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let cityName = document.getElementById("cityName").value;
  let pinCode = document.getElementById("pinCode").value;
  let date = document.getElementById("date").value;
  let cv = document.getElementById("cv").value;

  document.getElementsByTagName("th")[0].innerHTML = "APPLICATION FORM";

  document.getElementsByTagName("th")[1].innerHTML = "FIRST NAME";
  document.getElementsByTagName("td")[0].innerHTML = firstName;

  document.getElementsByTagName("th")[2].innerHTML = "LAST NAME";
  document.getElementsByTagName("td")[1].innerHTML = lastName;

  document.getElementsByTagName("th")[3].innerHTML = "EMAIL";
  document.getElementsByTagName("td")[2].innerHTML = email;

  document.getElementsByTagName("th")[4].innerHTML = "SELECTED JOB";
  document.getElementsByTagName("td")[3].innerHTML = selectedJob;

  document.getElementsByTagName("th")[5].innerHTML = "ADDRESS";
  document.getElementsByTagName("td")[4].innerHTML = address;

  document.getElementsByTagName("th")[6].innerHTML = "CITY NAME";
  document.getElementsByTagName("td")[5].innerHTML = cityName;

  document.getElementsByTagName("th")[7].innerHTML = "PIN CODE";
  document.getElementsByTagName("td")[6].innerHTML = pinCode;

  document.getElementsByTagName("th")[8].innerHTML = "DATE";
  document.getElementsByTagName("td")[7].innerHTML = date;

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("cityName").value = "";
  document.getElementById("pinCode").value = "";
  document.getElementById("date").value = "yyyy-MM-dd";
  document.getElementById("cv").value = "";

  table.style.display = "block";
}

function closes() {
  table.style.display = "none";
}

function reset() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("cityName").value = "";
  document.getElementById("pinCode").value = "";
  document.getElementById("date").value = "yyyy-MM-dd";
  document.getElementById("cv").value = "";
}
