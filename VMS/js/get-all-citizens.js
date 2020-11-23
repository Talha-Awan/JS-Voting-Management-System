let allCitizensList = document.getElementById("allCitizensList");
// let nomineeContent = document.getElementById("regNomList");

let updDisplay = document.getElementById("edit");
updDisplay.style.display = "none";

// const position = document.getElementById("c_position");

// function displayElecTypes() {
// 	let ref = localStorage.getItem("Elections");
// 	if (ref) {
// 		electionArr = JSON.parse(ref);
// 	}
// 	console.log(electionArr);
// }

// displayElecTypes();

// for (let i = 0; i < electionArr.length; i++) {
// 	let node = document.createElement("option");
// 	node.setAttribute("class", `"elecType"`);
// 	node.setAttribute("dataKey", electionArr[i].id);
// 	node.setAttribute("value", electionArr[i].id);

// 	// node.setAttribute("update-key", `"item${i}"`);
// 	// <small>${todo[i].date}</small>
// 	// onclick=editItem(` + i +`)
// 	node.innerHTML = `
// 	${electionArr[i].name}
//     `;
// 	// Append the element to the DOM as the last child of the element
// 	position.append(node);
// }

function printCitizens() {
	allCitizensList.innerHTML = "";
	for (let i = 0; i < nomineeArr.length; i++) {
		let node = document.createElement("li");
		node.setAttribute("class", `"item"`);
		node.setAttribute("dataKey", citizenArr[i].id);
		node.innerHTML = `
      <span><label for="nominee${i}"><strong>Nominee Name: </strong></label><input type="text" id="nominee${i}" value=" ${citizenArr[i].fname} ${citizenArr[i].lname}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
      <button class="btn btn-success updateBtn" id="btn${i}" onclick="update(${citizenArr[i].id});">View</button>
      <button class="btn btn-danger deleteBtn">Delete</button>
      <br/>
      <br/>
      <hr/>
    `;
		allCitizensList.append(node);
	}
}

function display() {
	let ref = localStorage.getItem("Citizens");
	if (ref) {
		citizenArr = JSON.parse(ref);
	}
	console.log(nomineeArr);
}

display();

printCitizens();

function insertCitizen() {
	localStorage.setItem("Citizens", JSON.stringify(nomineeArr));
	// alert("Insert Nominee Works!");
	printCitizenss();
}

function deleteNominee(id) {
	for (let i = 0; i < nomineeArr.length; i++) {
		if (nomineeArr[i].id == id) {
			nomineeArr.splice(i, 1);
		}
	}
	insertCitizen();
}

function update(id) {
	alert("Success");
	for (let i = 0; i < citizenArr.length; i++) {
		if (citizenArr[i].id == id) {
			// alert("If works");
			allNomineesList.style.display = "none";
			updDisplay.style.display = "block";
            console.log(nomineeArr[i].fname);
            document.getElementById("c_cnic").value = citizenArr[i].cnic;
			document.getElementById("c_fname").value = citizenArr[i].fname;
			document.getElementById("c_lname").value = citizenArr[i].lname;
			document.getElementById("c_email").value = citizenArr[i].email;
			document.getElementById("c_address").value = citizenArr[i].address;
			document.getElementById("c_city").value = citizenArr[i].city;
			document.getElementById("c_state").value = citizenArr[i].state;
			document.getElementById("c_zip").value = citizenArr[i].zip;
			document.getElementById("c_education").value =
				citizenArr[i].education;
			document.getElementById("c_status").value = citizenArr[i].status;
			document.getElementById("c-update").onsubmit = function (
				event
			) {
				event.preventDefault();
				nomineeArr[i].fname = document.getElementById("c_fname").value;
				nomineeArr[i].lname = document.getElementById("c_lname").value;
				nomineeArr[i].email = document.getElementById("c_email").value;
				nomineeArr[i].address = document.getElementById(
					"c_address"
				).value;
				nomineeArr[i].city = document.getElementById("c_city").value;
				nomineeArr[i].state = document.getElementById("c_state").value;
				nomineeArr[i].zip = document.getElementById("c_zip").value;
				nomineeArr[i].education = document.getElementById(
					"c_education"
				).value;
				nomineeArr[i].status = document.getElementById(
					"c_status"
				).value;
				console.log(citizenArr[i]);
				alert("Update Success");
				insertCitizen();
				updDisplay.style.display = "none";
				allCitizensList.style.display = "block";
			};
		}
	}
}

allNomineesList.addEventListener("click", function (event) {
	if (event.target.classList.contains("deleteBtn")) {
		deleteNominee(event.target.parentElement.getAttribute("dataKey"));
	}
});
