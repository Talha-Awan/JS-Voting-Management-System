let allAdminOfficersList = document.getElementById("allAdminOfficerList");
let updDisplay = document.getElementById("edit_adminofficers"); //.removeAttribute("style");
updDisplay.style.display = "none"; 

function printAdminOfficers() {
	allAdminOfficersList.innerHTML = "";
	for (let i = 0; i < adminOfficerArr.length; i++) {
		let node = document.createElement("li");
		node.setAttribute("class", `"admin-officer"`);
		node.setAttribute("dataKey", adminOfficerArr[i].id);
		// node.setAttribute("update-key", `"item${i}"`);
		// <small>${todo[i].date}</small>
		// onclick=editItem(` + i +`)
		node.innerHTML = `
      <span><label for="admin-officer${i}">Admin-Officer Username: </label><input type="text" id="admin-officer${i}" value=" ${adminOfficerArr[i].username}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
      <button class="btn btn-success updateBtn" id="btn${i}" onclick="update(${adminOfficerArr[i].id});"> View </button>
      <button class="btn btn-danger deleteBtn">Delete</button>
      <br/>
      <br/>
      <hr/>
    `;
		// Append the element to the DOM as the last child of the element
		allAdminOfficersList.append(node);
	}
}

function adOffDisplay() {
	let ref = localStorage.getItem("Admin Officer");
	if (ref) {
		adminOfficerArr = JSON.parse(ref);
	}
	console.log(adminOfficerArr);
}

adOffDisplay();

printAdminOfficers();

function insertAdminOfficer() {
	localStorage.setItem("Admin Officer", JSON.stringify(adminOfficerArr));
	alert("Insert Admin Officers Works!");
	printAdminOfficers();
}

// function to delete item
function deleteAdminOff(id) {
	for (let i = 0; i < adminOfficerArr.length; i++) {
		if (adminOfficerArr[i].id == id) {
			adminOfficerArr.splice(i, 1);
			// localStorage.removeItem(id);
		}
	}
	insertAdminOfficer();
}

function update(id) {
	alert("Success");
	for (let i = 0; i < adminOfficerArr.length; i++) {
		if (adminOfficerArr[i].id == id) {
			alert("If works");
			updDisplay.style.display = "block";
			// console.log(nomineeArr[i].fname);
			document.getElementById("aou_name").value =
				adminOfficerArr[i].username;
			document.getElementById("aou_password").value =
				adminOfficerArr[i].password;
			document.getElementById("adminofficer-update").onsubmit = function (
				event
			) {
				event.preventDefault();
				adminOfficerArr[i].username = document.getElementById(
					"aou_name"
				).value;
				adminOfficerArr[i].password = document.getElementById(
					"aou_password"
				).value;
				console.log(adminOfficerArr[i]);
				alert("Update Success");
				insertAdminOfficer();
				updDisplay.style.display = "none";
			};
		}
	}
}

allAdminOfficersList.addEventListener("click", function (event) {
	// check if that is a delete-button
	if (event.target.classList.contains("deleteBtn")) {
		deleteAdminOff(event.target.parentElement.getAttribute("dataKey"));
	}
});
