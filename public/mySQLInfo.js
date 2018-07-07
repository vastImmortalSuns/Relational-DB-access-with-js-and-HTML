function viewFriends() {
var xhttp = new XMLHttpRequest();
var friendsArr;

var link = "http://leia.cs.spu.edu:3027/api/friends/";

xhttp.onreadystatechange = function ReceivedCallback() {
	if (this.readyState == 4 && this.status == 200) {
		friendsArr = JSON.parse(this.responseText);
		console.log(friendsArr);
		
		var tableOutput =
	 		"<h3> All Friends: </h3> \n" +
                "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
                            "<th scope=\"col\">First Name</th> \n" +
	 						"<th scope=\"col\">Last Name</th> \n" +
							"<th scope=\"col\">ID</th> \n" +
							"<th scope=\"col\">Gender</th> \n" +
	 						"<th scope=\"col\">Birth Date</th> \n" +
	 						"<th scope=\"col\">Phone Number</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 "<tr> \n";

				for (var i = 0; i < friendsArr.length; i++) {
					tableOutput += "<td>" + friendsArr[i].first_name + "</td> \n" +
					"<td>" + friendsArr[i].last_name + "</td> \n" +
					"<td>" + friendsArr[i].friend_id + "</td> \n" +
					"<td>" + friendsArr[i].gender + "</td> \n" +
					"<td>" + friendsArr[i].birth_date + "</td> \n" +
					"<td>" + friendsArr[i].phone + "</td> \n" +
                "</tr> \n"
				}
				
			tableOutput += "</tbody> \n" +
						"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
		}
	};
xhttp.open("GET", link, true);
xhttp.send(); 
}

function addFriends(){
var xhttp = new XMLHttpRequest();

var firstName = document.getElementById("index2_firstName").value;
var lastName = document.getElementById("index2_lastName").value;
var friendGender = document.getElementById("index2_gender").value;
var phoneNum = document.getElementById("index2_phoneNum").value;
var bDay = document.getElementById("index2_bday").value;

var link = "http://leia.cs.spu.edu:3027/api/friends";

var date = new Date(bDay);

var index = {
birthDate : date,
firstName : firstName,
lastName : lastName,
gender : friendGender,
phone : phoneNum
};

console.log(index);

xhttp.onreadystatechange = function ReceivedCallback() {
if (this.readyState == 4 && this.status == 200) {
		var postArr = JSON.parse(xhttp.responseText);
		console.log(xhttp.responseText);
		
		var tableOutput =
	 		"<h3>" + firstName + "'s ID: </h3> \n" +
                "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
							"<th scope=\"col\">Operation Result</th> \n" +
							"<th scope=\"col\">Status</th> \n" +
							"<th scope=\"col\">New Friend's ID</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 
					"<tr> \n" +
					"<td>" + postArr.operation + "</td> \n" +
					"<td>" + postArr.status + "</td> \n" +
					"<td>" + postArr.insertedId + "</td> \n" +
					"</tr> \n" +
				
				"</tbody> \n" +
			"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
	}
}
xhttp.open("POST", link, true);

xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");

xhttp.send(JSON.stringify(index));
}

function findFriendsID(){
var xhttp = new XMLHttpRequest();
var friendsID;
var idArr;	
	
friendsID = document.getElementById('index3').value;
var link = "http://leia.cs.spu.edu:3027/api/" + friendsID; 

xhttp.onreadystatechange = function ReceivedCallback() {
	if (this.readyState == 4 && this.status == 200) {
		idArr = JSON.parse(this.responseText);
		
		var tableOutput =
	 		"<h3> All of Friend ID " + friendsID + "'s Information </h3> \n" +
                 "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
                            "<th scope=\"col\">First Name</th> \n" +
	 						"<th scope=\"col\">Last Name</th> \n" +
							"<th scope=\"col\">ID</th> \n" +
							"<th scope=\"col\">Gender</th> \n" +
	 						"<th scope=\"col\">Birth Date</th> \n" +
	 						"<th scope=\"col\">Phone Number</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 "<tr> \n";

				for (var i = 0; i < idArr.length; i++) {
					tableOutput += "<td>" + idArr[0].first_name + "</td> \n" +
					"<td>" + idArr[0].last_name + "</td> \n" +
					"<td>" + idArr[0].friend_id + "</td> \n" +
					"<td>" + idArr[0].gender + "</td> \n" +
					"<td>" + idArr[0].birth_date + "</td> \n" +
					"<td>" + idArr[0].phone + "</td> \n" +
                "</tr> \n"
				}
				
			tableOutput += "</tbody> \n" +
						"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
		}
	};
xhttp.open("GET", link, true);
xhttp.send(); 
}

function findFriendsName(){
var xhttp = new XMLHttpRequest();
var friendsName;
var nameArr;
	
friendsName = document.getElementById('index4').value;
var link = "http://leia.cs.spu.edu:3027/api/friends/" + friendsName; 
//console.log(friendsName);

xhttp.onreadystatechange = function ReceivedCallback() {
	if (this.readyState == 4 && this.status == 200) {
		nameArr = JSON.parse(this.responseText);
		console.log(nameArr);

		var tableOutput =
	 		"<h3> All friends named " + friendsName + "</h3> \n" +
                "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
                            "<th scope=\"col\">First Name</th> \n" +
	 						"<th scope=\"col\">Last Name</th> \n" +
							"<th scope=\"col\">ID</th> \n" +
							"<th scope=\"col\">Gender</th> \n" +
	 						"<th scope=\"col\">Birth Date</th> \n" +
	 						"<th scope=\"col\">Phone Number</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 "<tr> \n";

				for (var i = 0; i < nameArr.length; i++) {
					tableOutput += "<td>" + nameArr[i].first_name + "</td> \n" +
					"<td>" + nameArr[i].last_name + "</td> \n" +
					"<td>" + nameArr[i].friend_id + "</td> \n" +
					"<td>" + nameArr[i].gender + "</td> \n" +
					"<td>" + nameArr[i].birth_date + "</td> \n" +
					"<td>" + nameArr[i].phone + "</td> \n" +
                "</tr> \n"
				}
				
			tableOutput += "</tbody> \n" +
						"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
		}
	};
xhttp.open("GET", "http://leia.cs.spu.edu:3027/api/friends/" + friendsName, true);
xhttp.send(); 
}

function updateFriendsID(){
var xhttp = new XMLHttpRequest();
var updateArr;

var friendsID = document.getElementById("index5_ID").value;
var firstName = document.getElementById("index5_firstName").value;
var lastName = document.getElementById("index5_lastName").value;
var friendGender = document.getElementById("index5_gender").value;
var phoneNum = document.getElementById("index5_phoneNum").value;
var bDay = document.getElementById("index5_bday").value;

var link = "http://leia.cs.spu.edu:3027/api/" + friendsID;

var date = new Date(bDay);

var index = {
birthDate : date,
firstName : firstName,
lastName : lastName,
gender : friendGender,
phone : phoneNum
};

console.log(index);

xhttp.onreadystatechange = function ReceivedCallback() {
if (this.readyState == 4 && this.status == 200) {
		updateArr = JSON.parse(xhttp.responseText);
		console.log(xhttp.responseText);
		console.log(updateArr);
		
		var tableOutput =
	 		"<h3>" + firstName + "'s Updated Information </h3> \n" +
                "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
                            "<th scope=\"col\">Opperation</th> \n" +
	 						"<th scope=\"col\">Status</th> \n" +
							"<th scope=\"col\">Affected Rows</th> \n" +
							"<th scope=\"col\">Messages</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 "<tr> \n" +

					"<td>" + updateArr.operation + "</td> \n" +
					"<td>" + updateArr.status + "</td> \n" +
					"<td>" + updateArr.affectedRows + "</td> \n" +
					"<td>" + updateArr.message + "</td> \n" +
                "</tr> \n" +
			"</tbody> \n" +
		"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
		}
	}

xhttp.open("PUT", link, true);

xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");

xhttp.send(JSON.stringify(index));
}

function deleteFriendsID() {
var xhttp = new XMLHttpRequest();

var id = document.getElementById("index6_ID").value;
var delArr;

var link = "http://leia.cs.spu.edu:3027/api/" + id;

var index = {
identification : id
};

console.log(index);

xhttp.onreadystatechange = function ReceivedCallback() {
if (this.readyState == 4 && this.status == 200) {
		var delArr = JSON.parse(xhttp.responseText);
		console.log(xhttp.responseText);
		
		var tableOutput =
	 		"<h3>" + id + "'s ID: </h3> \n" +
                "<table class=\"table table-bordered table-hover\"> \n" +
                    "<thead> \n" +
                        "<tr> \n" +
							"<th scope=\"col\">Operation</th> \n" +
							"<th scope=\"col\">Status</th> \n" +
							"<th scope=\"col\">Affected Rows</th> \n" +
                         "</tr> \n" +
                    "</thead> \n" +
                 "<tbody> \n" +
				 
					"<tr> \n" +
					"<td>" + delArr.operation + "</td> \n" +
					"<td>" + delArr.status + "</td> \n" +
					"<td>" + delArr.affectedRows + "</td> \n" +
					"</tr> \n" +
				"</tbody> \n" +
			"</table> \n";

		document.getElementById("output").innerHTML = tableOutput;
	}
}
xhttp.open("DELETE", link, true);

xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");

xhttp.send(JSON.stringify(index));
}














