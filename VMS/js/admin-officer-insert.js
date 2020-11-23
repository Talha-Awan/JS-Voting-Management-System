const form = document.querySelector(".add-admin-officer");
const username = document.querySelector(".ao_username");
const password = document.querySelector(".ao_password");

let adminOfficerArr = [];

function validateWS(value) {
	if (value == " ") {
		alert("Error!");
		location.reload();
	}
}

function addAdminOfficer(entry1, entry2) {
	if (entry1 != "" || entry2 != "") {
		let adminOfficer = {
			id: Date.now(),
			username: entry1,
			password: entry2,
		};
		adminOfficerArr.push(adminOfficer);
		insertAdminOfficer();
	} else {
		alert("Please Try Again!");
	}
	// entry1.value = "";
	// entry2.value = "";
}

function insertAdminOfficer() {
	localStorage.setItem("Admin Officer", JSON.stringify(adminOfficerArr));
}

function adOffDisplay() {
	let ref = localStorage.getItem("Admin Officer");
	if (ref) {
		adminOfficerArr = JSON.parse(ref);
	}
	console.log(adminOfficerArr);
}

adOffDisplay();

///////////////////////////////////////////////////////////////////////
const loginForm = document.querySelector(".admin-officer-login");
const loginUname = document.querySelector(".aol_username");
const loginPass = document.querySelector(".aol_password");

let access = "false";
let cit;
function login(id, pass) {
	for (let i = 0; i < adminOfficerArr.length; i++) {
		if (
			adminOfficerArr[i].username == id &&
			adminOfficerArr[i].password == pass
		) {
			access = "true";
			cit = adminOfficerArr[i];
			// flag_value = "You are " + role;
			console.log(adminOfficerArr[i]);
			break;
		} else {
			alert("Please Try Again!");
		}
	}
	if (access == "true") {
		alert("Success");
		sessionStorage.setItem("officerSession", JSON.stringify(cit));
		window.location.href = "admin-officer-panel.html";
	} else {
		alert("Invalid Credentials! Please Try Again!");
	}
}
