// To get id from url
let url_string = window.location.href;
let url = new URL(url_string);
let elecID = url.searchParams.get("id");
let electioncontent = document.getElementById("electionContent");
let submitbtbn = document.getElementById("submitArea");
let electionArr = [];
let nomineeArr = [];
let checkvotedcitizen = "false";
let notfound = "true";

console.log("Election ID: " + elecID);
// alert("Election ID: " + elecID);

let citizen;
let getCID = window.sessionStorage.getItem("citizenSession");
if (getCID) {
	citizen = JSON.parse(getCID);
	console.log(citizen);
}
// alert("Loginuser ID: " + citizen.id);
console.log("Loginuser ID: " + citizen.id);

let elecObj;
function display() {
	let ref = localStorage.getItem("Nominees");
	if (ref) {
		nomineeArr = JSON.parse(ref);
	}
	let n = localStorage.getItem("Elections");
	if (n) {
		electionArr = JSON.parse(n);
	}

	console.log(nomineeArr);
}
function updatelocalstorage() {}
function updatevotedcitizen() {
	// alert("update me");
	for (let i = 0; i < electionArr.length; i++) {
		if (electionArr[i].id == elecID) {
			// alert("yes");
			let votedciti = electionArr[i].vcitizenid;

			votedciti.push(citizen.id);
			// alert("ok");

			electionArr[i].vcitizenid = votedciti;
			// alert("set he");
			localStorage.setItem("Elections", JSON.stringify(electionArr));
			// alert(electionArr[i].vcitizenid);
		}
	}
}
function insertupdatedNominee() {
	localStorage.setItem("Nominees", JSON.stringify(nomineeArr));
}
function addvote() {
	for (let i = 0; i < nomineeArr.length; i++) {
		if (nomineeArr[i].position == elecID) {
			if (document.getElementById(nomineeArr[i].id).checked) {
				//alert("Working");
				//alert(nomineeArr[i].fname);
				console.log(nomineeArr[i]);
				nomineeArr[i].votecount += 1;
				//alert(nomineeArr[i].votecount);
				insertupdatedNominee();
				console.log(nomineeArr[i]);
				updatevotedcitizen();
				alert("Thanks for Voting!");
				window.location.href =
					"file:///C:/Users/hp/Desktop/Project/VMS/all-elections-citizens.html";
			}
		}
	}
}

function loading() {
	display();
	for (let i = 0; i < electionArr.length; i++) {
		if (electionArr[i].id == elecID) {
			// alert("yes");
			let votedciti = electionArr[i].vcitizenid;
			// votedciti=JSON.parse(votedciti);
			for (let k = 0; k < votedciti.length; k++) {
				if (votedciti.includes(citizen.id)) {
					alert("Error! Already Voted");
					// alert("go now");
					window.location.href =
						"file:///C:/Users/hp/Desktop/Project/VMS/all-elections-citizens.html";
					checkvotedcitizen = "true";
					break;
				}
			}
			if (checkvotedcitizen == "false") {
				alert("You can Vote");
				for (let j = 0; j < nomineeArr.length; j++) {
					if (nomineeArr[j].position == elecID) {
						console.log(nomineeArr[j]);
						// alert("lol");
						if (nomineeArr[j].status == "Approved") {
							let node = document.createElement("div");
							node.setAttribute(
								"class",
								`"election-nominee col-md-3 col-3"`
							);
							node.setAttribute("dataKey", nomineeArr[j].id);
							node.innerHTML = `
							<h4 class="text-center"><strong class="text-center">Nominee Name </strong></h4><br/>
							<h5 id="nominee${j}" class="text-center">${nomineeArr[j].fname} ${nomineeArr[j].lname} </h5><br/>
							<center><label for="${nomineeArr[j].votecount}" class="text-center"><strong class="text-center">Vote Count: </strong>${nomineeArr[j].votecount} </label></center><br/>
							<center><input type ="radio" id=${nomineeArr[j].id} value="${nomineeArr[j].id}" name="nominee" required/></center><br/>
							</div>
                            <br/>
                            <br/>
                            <hr/>
                            `;
							electioncontent.append(node);
							notfound = "false";
						}
						// <div class = "col-md-3 col-3">
					}
				}
				if (notfound == "true") {
					alert("No Nominee Found!");
					window.location.href =
						"file:///C:/Users/hp/Desktop/Project/VMS/all-elections-citizens.html";
				}
				var x = document.createElement("INPUT");
				x.setAttribute("type", "submit");
				x.setAttribute("class", "btn btn-primary btn-block");
				x.setAttribute("onclick", "addvote()");
				submitbtbn.append(x);
			}
		}
	}
}
