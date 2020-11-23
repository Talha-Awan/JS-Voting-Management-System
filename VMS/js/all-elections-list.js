let allElectionList = document.getElementById("allElectionsList");

function printElections() {
	allElectionList.innerHTML = "";
	for (let i = 0; i < electionArr.length; i++) {
		if (electionArr[i].status == "Open") {
			let node = document.createElement("li");
			node.setAttribute("class", "elections");
			node.setAttribute("dataKey", electionArr[i].id);
			console.log(electionArr[i].id);
			node.innerHTML = `
      <span><label for="election${i}"><strong>Election Name: </strong></label><input type="text" id="nominee${i}" value=" ${electionArr[i].name}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
      <button class="btn btn-primary viewBtn" id="btn${i}" onclick="votingRedirect(${electionArr[i].id})">Vote</button>
      <br/>
      <small><strong>Start Date: </strong>${electionArr[i].startdate}</small>
      <br/> 
      <small><strong>End Date: </strong>${electionArr[i].enddate}</small>
	  <br/>
	  <small><strong>Status: </strong>${electionArr[i].status}</small>
	  <br/>
      <hr/>
    `;
			allElectionList.append(node);
		}
	}
}

function displayElecTypes() {
	let ref = localStorage.getItem("Elections");
	if (ref) {
		electionArr = JSON.parse(ref);
	}
	console.log(electionArr);
}

displayElecTypes();

printElections();

function votingRedirect(val) {
	var b = val;
	// alert(val);
	var b = val,
		url = "citizen-election-center.html?id=" + encodeURIComponent(b);
	// alert(url);
	console.log(url);
	document.location.href = url;
}
