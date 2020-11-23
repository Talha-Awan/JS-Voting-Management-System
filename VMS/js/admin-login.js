const loginForm = document.querySelector(".admin-login");
const loginUname = document.querySelector(".al_username");
const loginPass = document.querySelector(".al_password");
let adminArr = [];

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	login(loginUname.value, loginPass.value);
});

function adDisplay() {
	let ref = localStorage.getItem("Admin");
	if (ref) {
		adminArr = JSON.parse(ref);
	}
	console.log(adminArr);
}

adDisplay();

function login(id, pass) {
	for (let i = 0; i < adminArr.length; i++) {
		if (adminArr[i].username == id && adminArr[i].password == pass) {
			alert("Success");
			sessionStorage.setItem("ID", JSON.stringify(adminArr[i]));
			window.location.href = "super-admin-panel.html";
		} else {
			alert("Please Try Again!");
		}
	}
}