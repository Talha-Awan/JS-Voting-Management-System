// let ElectionArr = [];

// let votedcitizen = [];

// let mayorForm = document.getElementById("mayor-election");

// let content = document.getElementById("election");

// let vCitizenIDs;

// function display() {
// 	let ref = localStorage.getItem("Nominees");
// 	if (ref) {
// 		nomineeArr = JSON.parse(ref);
// 	}
// 	console.log(nomineeArr);
// }

// display();

// for (let i = 0; i < nomineeArr.length; i++) {
// 	if (nomineeArr[i].position == "Mayor") {
// 		let node = document.createElement("div");
// 		node.setAttribute("class", `"election-nominee"`);
// 		node.setAttribute("dataKey", nomineeArr[i].id);
// 		node.innerHTML = `
//         <span><label for="nominee${i}">Nominee Name: </label><input type="text" id="nominee${i}" value=" ${nomineeArr[i].fname} ${nomineeArr[i].lname}" style="outline: none; border: 0px none; color: Black; backgroun-color: White; " disabled/> </span>
//         <input type ="radio" id=${nomineeArr[i].id} value="${nomineeArr[i].id}" name="nominee" required/>
//         <br/>
//         <br/>
//         <hr/>
//         `;
// 		content.append(node);
// 	}
// }

// function vote(electiontype) {
// 	for (let i = 0; i < nomineeArr.length; i++) {
// 		if (nomineeArr[i].position == electiontype) {
// 			if (document.getElementById(nomineeArr[i].id).checked) {
// 				alert("Working");
// 				alert(nomineeArr[i].fname);
// 				console.log(nomineeArr[i]);
// 				nomineeArr[i].votecount += 1;
// 				console.log(nomineeArr[i]);
// 			}
// 		}
// 	}
// 	votedcitizen.push(1605284133882);
// 	vCitizenIDs = JSON.stringify(votedcitizen);
// 	//election creation time benga
// 	let Electioncount = {
// 		id: Date.now(),
// 		type: "Mayor",
// 		// starttime: ,
// 		winner: "",
// 		// endtime: ,
// 		citizen: vCitizenIDs,
// 	};
// 	//loop chalana he election array pr or election id match krani he
// 	//vcitizen object pick krna he or json parse krana he
// 	//user id push krni he us array me
// 	//array again stringify krke object me save krdena he
// 	ElectionArr.push(Electioncount);
// 	for (let i = 0; i < ElectionArr.length; i++) {
// 		let pp = JSON.parse(ElectionArr[i].citizen);
// 		alert(pp);
// 		alert(pp.length);
// 		for (let j = 0; j < pp.length; j++) {
// 			alert("already voted");
// 		}
// 	}
// }

// // vote();
