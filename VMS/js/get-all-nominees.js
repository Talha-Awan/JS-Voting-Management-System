let allNomineesList = document.getElementById("allNomineesList");
// let nomineeContent = document.getElementById("regNomList");

let updDisplay = document.getElementById("edit");
updDisplay.style.display = "none";

const position = document.getElementById("nu_position");

function displayElecTypes() {
	let ref = localStorage.getItem("Elections");
	if (ref) {
		electionArr = JSON.parse(ref);
	}
	console.log(electionArr);
}

displayElecTypes();

for (let i = 0; i < electionArr.length; i++) {
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

function printNominees() {
	allNomineesList.innerHTML = "";
	for (let i = 0; i < nomineeArr.length; i++) {
		let node = document.createElement("li");
		node.setAttribute("class", `"item"`);
		node.setAttribute("dataKey", nomineeArr[i].id);
		node.innerHTML = `
      <span><label for="nominee${i}"><strong>Nominee Name: </strong></label><input type="text" id="nominee${i}" value=" ${nomineeArr[i].fname} ${nomineeArr[i].lname}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
      <button class="btn btn-success updateBtn" id="btn${i}" onclick="update(${nomineeArr[i].id});">View</button>
      <button class="btn btn-danger deleteBtn">Delete</button>
      <br/>
      <small><strong>Status: </strong>${nomineeArr[i].status}</small>
      <br/>
      <hr/>
    `;
		allNomineesList.append(node);
	}
}

function display() {
	let ref = localStorage.getItem("Nominees");
	if (ref) {
		nomineeArr = JSON.parse(ref);
	}
	console.log(nomineeArr);
}

display();

printNominees();

function insertNominee() {
	localStorage.setItem("Nominees", JSON.stringify(nomineeArr));
	// alert("Insert Nominee Works!");
	printNominees();
}

function deleteNominee(id) {
	for (let i = 0; i < nomineeArr.length; i++) {
		if (nomineeArr[i].id == id) {
			nomineeArr.splice(i, 1);
		}
	}
	insertNominee();
}

function update(id) {
	alert("Success");
	for (let i = 0; i < nomineeArr.length; i++) {
		if (nomineeArr[i].id == id) {
			// alert("If works");
			allNomineesList.style.display = "none";
			updDisplay.style.display = "block";
			console.log(nomineeArr[i].fname);
			document.getElementById("nu_fname").value = nomineeArr[i].fname;
			document.getElementById("nu_lname").value = nomineeArr[i].lname;
			document.getElementById("nu_email").value = nomineeArr[i].email;

			document.getElementById("nu_position").value =
				nomineeArr[i].position;
			document.getElementById("nu_district").value =
				nomineeArr[i].district;
			document.getElementById("nu_address").value = nomineeArr[i].address;
			document.getElementById("nu_city").value = nomineeArr[i].city;
			document.getElementById("nu_state").value = nomineeArr[i].state;
			document.getElementById("nu_zip").value = nomineeArr[i].zip;
			document.getElementById("nu_education").value =
				nomineeArr[i].education;
			document.getElementById("nu_status").value = nomineeArr[i].status;
			document.getElementById("nominee-update").onsubmit = function (
				event
			) {
				event.preventDefault();
				nomineeArr[i].fname = document.getElementById("nu_fname").value;
				nomineeArr[i].lname = document.getElementById("nu_lname").value;
				nomineeArr[i].email = document.getElementById("nu_email").value;
				nomineeArr[i].district = document.getElementById(
					"nu_district"
				).value;
				nomineeArr[i].position = document.getElementById(
					"nu_position"
				).value;
				nomineeArr[i].address = document.getElementById(
					"nu_address"
				).value;
				nomineeArr[i].city = document.getElementById("nu_city").value;
				nomineeArr[i].state = document.getElementById("nu_state").value;
				nomineeArr[i].zip = document.getElementById("nu_zip").value;
				nomineeArr[i].education = document.getElementById(
					"nu_education"
				).value;
				nomineeArr[i].status = document.getElementById(
					"nu_status"
				).value;
				console.log(nomineeArr[i]);
				alert("Update Success");
				insertNominee();
				updDisplay.style.display = "none";
				allNomineesList.style.display = "block";
			};
		}
	}
}

allNomineesList.addEventListener("click", function (event) {
	if (event.target.classList.contains("deleteBtn")) {
		deleteNominee(event.target.parentElement.getAttribute("dataKey"));
	}
});
