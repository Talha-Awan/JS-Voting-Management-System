const form = document.querySelector(".create-election");
const elecType = document.querySelector(".e_type");
const elecSDate = document.querySelector(".e_sdate");
const elecEDate = document.querySelector(".e_edate");
const elecStatus = document.querySelector(".e_status");

let electionArr = [];

// function to add todo item
function addElection(
	entry1,
	entry2,
    entry3
) {
	if (
		entry1 !== "" ||
		entry2 !== "" ||
		entry3 !== ""
	) {
		let election = {
            id: Date.now(),
            name: entry1,
            startdate: entry2,
            enddate: entry3,
            status: "Open",
            winner: "",
            vcitizenid: [0]
		};
		electionArr.push(election);
		console.log(electionArr);
		createElection(electionArr);
		entry1.selectedIndex = 0;
        entry2.value = "";
        entry3.value = "";
	} else {
		alert("Please Enter Something!");
	}
}

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