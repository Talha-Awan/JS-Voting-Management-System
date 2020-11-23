const form = document.querySelector(".add-admin");
const username = document.querySelector(".a_username");
const password = document.querySelector(".a_password");
let adminArr = [];

form.addEventListener("submit", function (event) {
	// event.preventDefault();
	addAdmin(username.value, password.value);
	alert("Success");
});

function addAdmin(entry1, entry2) {
	if (entry1 != "" || entry2 != "") {
		let admin = { id: Date.now(), username: entry1, password: entry2 };
		adminArr.push(admin);
		insertAdmin();
	}
	else{
		alert("Please Try Again!");
	}
	// entry1.value = "";
	// entry2.value = "";
}

function insertAdmin() {
	localStorage.setItem("Admin", JSON.stringify(adminArr));
}

function adDisplay() {
	let ref = localStorage.getItem("Admin");
	if (ref) {
		adminArr = JSON.parse(ref);
	}
	console.log(adminArr);
}

adDisplay();
