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
let electionArr = [];

function displayElecTypes() {
	let ref = localStorage.getItem("Elections");
	if (ref) {
		electionArr = JSON.parse(ref);
	}
	console.log(electionArr);
}

displayElecTypes();

for (let i = 0; i < electionArr.length; i++) {
	if (electionArr[i].status == "Open") {
		let node = document.createElement("option");
		node.setAttribute("class", `"elecType"`);
		node.setAttribute("dataKey", electionArr[i].id);
		node.setAttribute("value", electionArr[i].id);

		// node.setAttribute("update-key", `"item${i}"`);
		// <small>${todo[i].date}</small>
		// onclick=editItem(` + i +`)
		node.innerHTML = `
	${electionArr[i].name}
    `;
		// Append the element to the DOM as the last child of the element
		position.append(node);
	}
}

function validateWS(value) {
	if (value == " ") {
		alert("Error!");
		location.reload();
	}
}

// function to add todo item
function addNominee(
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
		entry1 != "" ||
		entry2 != "" ||
		entry3 != "" ||
		entry4 != "" ||
		entry5 != "" ||
		entry6 != "" ||
		entry7 != "" ||
		entry8 != "" ||
		entry9 != "" ||
		entry10 != ""
	) {
		let nominee = {
			id: Date.now(),
			email: entry1,
			fname: entry2,
			lname: entry3,
			district: entry4,
			position: entry5,
			address: entry6,
			city: entry7,
			state: entry8,
			zip: entry9,
			education: entry10,
			status: "Pending",
			votecount: 0,
		};
		nomineeArr.push(nominee);
		console.log(nomineeArr);
		insertNominee(nomineeArr);
		console.log(nomineeArr);
		alert("Success");
		entry1.value = "";
		entry2.value = "";
		entry3.value = "";
		entry4.value = "";
		entry5.selectedIndex = 0;
		entry6.value = "";
		entry7.value = "";
		entry8.selectedIndex = 0;
		entry9.value = "";
		entry10.selectedIndex = 0;
	} else {
		alert("Error! Please Try Again!");
	}
}

function insertNominee() {
	localStorage.setItem("Nominees", JSON.stringify(nomineeArr));
}

function display() {
	let ref = localStorage.getItem("Nominees");
	if (ref) {
		nomineeArr = JSON.parse(ref);
	}
	console.log(nomineeArr);
}

display();