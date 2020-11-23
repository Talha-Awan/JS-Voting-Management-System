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
      <span><label for="election${i}">Election Name: </label><input type="text" id="nominee${i}" value=" ${electionArr[i].name}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
      <button class="btn btn-danger viewBtn" id="btn${i}" onclick="votingRedirect(${electionArr[i].id})">Close</button>
      <br/>
      <small>Start Date: ${electionArr[i].startdate}</small>
      <br/> 
      <small>End Date: ${electionArr[i].enddate}</small>
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
	alert(val);
	var b = val,
		url = "decide-winner.html?id=" + encodeURIComponent(b);
	alert(url);
	console.log(url);
	document.location.href = url;
}
