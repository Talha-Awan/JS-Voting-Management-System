const form = document.querySelector(".nominee-register");
const email = document.querySelector(".n_email");
const password = document.querySelector(".n_password");
const fName = document.querySelector(".n_fname");
const lName = document.querySelector(".n_lname");
const district = document.querySelector(".n_district");
const position = document.querySelector(".n_electiontype");
const address = document.querySelector(".n_address");
const city = document.querySelector(".n_city");
const state = document.querySelector(".n_state");
const zip = document.querySelector(".n_zip");
const education = document.querySelector(".n_education");

let nomineeArr = [];

function validateWS(value) {
	if (value == " ") {
		alert("Error!");
		location.reload();
	}
}

let cid = sessionStorage.getItem("citizenSession");
if (cid) {
	citizen = JSON.parse(cid);
}

function display_onload() {
	// alert("If works");
	allNomineesList.style.display = "none";
	updDisplay.style.display = "block";
	console.log(nomineeArr[i].fname);
	document.getElementById("nu_fname").value = nomineeArr[i].fname;
	document.getElementById("nu_lname").value = nomineeArr[i].lname;
	document.getElementById("nu_email").value = nomineeArr[i].email;

	document.getElementById("nu_position").value = nomineeArr[i].position;
	document.getElementById("nu_district").value = nomineeArr[i].district;
	document.getElementById("nu_address").value = nomineeArr[i].address;
	document.getElementById("nu_city").value = nomineeArr[i].city;
	document.getElementById("nu_state").value = nomineeArr[i].state;
	document.getElementById("nu_zip").value = nomineeArr[i].zip;
	document.getElementById("nu_education").value = nomineeArr[i].education;
	document.getElementById("nu_status").value = nomineeArr[i].status;
	document.getElementById("nominee-update").onsubmit = function (event) {
		event.preventDefault();
		nomineeArr[i].fname = document.getElementById("nu_fname").value;
		nomineeArr[i].lname = document.getElementById("nu_lname").value;
		nomineeArr[i].email = document.getElementById("nu_email").value;
		nomineeArr[i].district = document.getElementById("nu_district").value;
		nomineeArr[i].position = document.getElementById("nu_position").value;
		nomineeArr[i].address = document.getElementById("nu_address").value;
		nomineeArr[i].city = document.getElementById("nu_city").value;
		nomineeArr[i].state = document.getElementById("nu_state").value;
		nomineeArr[i].zip = document.getElementById("nu_zip").value;
		nomineeArr[i].education = document.getElementById("nu_education").value;
		nomineeArr[i].status = document.getElementById("nu_status").value;
		console.log(nomineeArr[i]);
		alert("Update Success");
		insertNominee();
		updDisplay.style.display = "none";
		allNomineesList.style.display = "block";
	};
}
