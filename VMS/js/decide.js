const form = document.querySelector(".create-election");
const elecType = document.querySelector(".e_type");
const elecSDate = document.querySelector(".e_sdate");
const elecEDate = document.querySelector(".e_edate");
const elecStatus = document.querySelector(".e_status");
let url_string = window.location.href;
let url = new URL(url_string);
let elecID = url.searchParams.get("id");
// alert(elecID);


let nomineArr = [];
let winner;
let first = "true";
let electionindex;

let electionArr = [];

function createElection() {
	localStorage.setItem("Elections", JSON.stringify(electionArr));
}

function display() {
	let ref = localStorage.getItem("Elections");
	if (ref) {
		electionArr = JSON.parse(ref);
	}

	console.log(electionArr);
}

display();

for (let i = 0; i < electionArr.length; i++) {
	if ((electionArr[i].id = elecID)) {
		// alert("update");
		electionArr[i].status = "closed";
		electionindex = i;
		alert("Election Closed!");
		createElection();
		decidewinner();
	}
}

function decidewinner() {
	let ref = localStorage.getItem("Nominees");
	if (ref) {
		nomineArr = JSON.parse(ref);
	}
	for (let i = 0; i < nomineArr.length; i++) {
		if (nomineArr[i].position == elecID) {
			if (first == "true") {
				winner = nomineArr[i].fname + " " + nomineArr[i].lname;
				first = "false";
			} else {
				if (nomineArr[i].votecount > winner.votecount) {
					winner = nomineArr[fname] + nomineArr[lname];
				} else if (nomineArr[i].votecount == winner.votecount) {
					winner =
						"Tie Between " +
						winner.fname +
						" " +
						winner.lname +
						"and" +
						nomineArr[i].fname +
						" " +
						nomineArr[i].lname;
				}
			}
		}
	}
	electionArr[electionindex].winner = winner;
	// alert("ok");
	createElection();
	display();
	alert("Winner is " + electionArr[electionindex].winner);
}

let allWinnersList = document.getElementById("allWinnersList");

function printWinners() {
	allWinnersList.innerHTML = "";
	let node = document.createElement("li");
	node.setAttribute("class", `"winners"`);
	// node.setAttribute("dataKey", nomineeArr[i].id);
	node.innerHTML = `<span><label for="election"> Election Name:  <input type="text" value=" ${electionArr[electionindex].name}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
    <br/>
    <span><label for="election"> Start Date:  <input type="text" value=" ${electionArr[electionindex].startdate}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
    <br/>
    <span><label for="election"> End Date:  <input type="text" value=" ${electionArr[electionindex].enddate}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
    <br/>
    <span><label for="election"> Winner:  <input type="text" value=" ${electionArr[electionindex].winner}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
    <br/>
    `;
    // <span><label for="election"> Votes:  <input type="text" value=" ${electionArr[electionindex].votecount}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
	allWinnersList.append(node);
	// for (let i = 0; i < nomineeArr.length; i++) {
	// 	let node = document.createElement("li");
	// 	node.setAttribute("class", `"win"`);
	// 	node.setAttribute("dataKey", nomineeArr[i].id);
	// 	node.innerHTML = `
	//   <span><label for="nominee${i}"><strong>Election Name: </strong></label><input type="text" id="nominee${i}" value=" ${nomineeArr[i].fname} ${nomineeArr[i].lname}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
	//   <button class="btn btn-success updateBtn" id="btn${i}" onclick="update(${nomineeArr[i].id});">View</button>
	//   <button class="btn btn-danger deleteBtn">Delete</button>
	//   <br/>
	//   <small><strong>Status: </strong>${nomineeArr[i].status}</small>
	//   <br/>
	//   <hr/>
	// `;
	// 	allNomineesList.append(node);
	// }
}

printWinners();
