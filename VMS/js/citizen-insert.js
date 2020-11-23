const form = document.querySelector(".citizen-register");
const cnic = document.querySelector(".c_cnic");
const email = document.querySelector(".c_email");
const password = document.querySelector(".c_password");
const fName = document.querySelector(".c_fname");
const lName = document.querySelector(".c_lname");
const address = document.querySelector(".c_address");
const city = document.querySelector(".c_city");
const state = document.querySelector(".c_state");
const zip = document.querySelector(".c_zip");
const education = document.querySelector(".c_education");

let citizenArr = [];

function validateWS(value) {
	if (value == " ") {
		alert("Error!");
		location.reload();
	}
}

// function to add todo item
function addCitizen(
	entry1,
	entry2,
	entry3,
	entry4,
	entry5,
	entry6,
	entry7,
	entry8,
	entry9,
	entry10
) {
	if (
		entry1 !== "" ||
		entry2 !== "" ||
		entry3 !== "" ||
		entry4 !== "" ||
		entry5 !== "" ||
		entry6 !== "" ||
		entry7 !== "" ||
		entry8 !== "" ||
		entry9 !== "" ||
		entry10 != ""
	) {
		let citizen = {
			id: Date.now(),
			cnic: entry1,
			password: entry2,
			email: entry3,
			fname: entry4,
			lname: entry5,
			address: entry6,
			city: entry7,
			state: entry8,
			zip: entry9,
			education: entry10,
		};
		citizenArr.push(citizen);
		console.log(citizenArr);
		insertCitizen(citizenArr);
		entry1.value = "";
		entry2.value = "";
		entry3.value = "";
		entry4.value = "";
		entry5.value = "";
		entry6.value = "";
		entry7.value = "";
		entry8.selectedIndex = 0;
		entry9.value = "";
		entry10.selectedIndex = 0;
	} else {
		alert("Please Enter Something!");
	}
}

function insertCitizen() {
	localStorage.setItem("Citizens", JSON.stringify(citizenArr));
}

function display() {
	let ref = localStorage.getItem("Citizens");
	if (ref) {
		citizenArr = JSON.parse(ref);
	}
	console.log(citizenArr);
}

display();

////////////////////////////////////////////////////////////////

const loginForm = document.querySelector(".citizen-login");
const loginUname = document.getElementById("cnicInput");
const loginPass = document.getElementById("passwordInput");

let access = "false";
let cit;
function login(id, pass) {
	for (let i = 0; i < citizenArr.length; i++) {
		if (citizenArr[i].cnic == id && citizenArr[i].password == pass) {
			access = "true";
			cit = citizenArr[i];
			// flag_value = "You are " + role;
			console.log(citizenArr[i]);
			break;
		} else {
			access = "false";
		}
	}
	if (access == "true") {
		alert("Success!");
		window.sessionStorage.setItem("citizenSession", JSON.stringify(cit));
		location.href = "all-elections-citizens.html";
	} else {
		alert("Invalid Credentials! Please Try Again!");
	}
}
