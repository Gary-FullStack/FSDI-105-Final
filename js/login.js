
function login() {
	let email = $("#txtEmail").val();
	let password = $("#txtPassword").val();
	let valid = false;

	let users = readUsers();

	console.log(email, password);
	console.log(users);

	for (let i = 0; i < users.length; i++) {
		let user = users[i];
		if (email === user.email && password === user.password) {
			valid = true;
			window.location = "registration.html";

		}
	}

	if (valid == false) {
		alert("Please enter proper creditials");
		$("#txtEmail").addClass("alert-error");
		$("#txtPassword").addClass("alert-error");
	}

}

function init() {
	$("#loginBtn").click(login);

}
window.onload = init;