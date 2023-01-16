
function User(fName, lName, email, password, gender, age, address, phone, pay, color) {
	this.firstName = fName;
	this.lastName = lName;
	this.email = email;
	this.password = password;
	this.gender = gender;
	this.age = age;
	this.address = address;
	this.phone = phone;
	this.pay = pay;
	this.color = color;

}

function validation(user) {
	let valid = true;
	if (user.email == "") {
		valid = false;
		$("#txtEmail").addClass("alert-error");
		$("#txtPassword").addClass("alert-error");
		$("#txtFname").addClass("alert-error");
		$("#txtLname").addClass("alert-error");
	}
	return valid;

}


let inputFName = $("#txtFname")
let inputLName = $("#txtLname")
let inputEmail = $("#txtEmail")
let inputPassword = $("#txtPassword")
let inputGender = $("#txtGender")
let inputAge = $("#txtAge")
let inputAddress = $("#txtAddress")
let inputPay = $("#txtPay")
let inputPhone = $("#txtPhone")
let inputColor = $("#txtColor")


function register() {

	let newUser = new User(inputFName.val(), inputLName.val(), inputEmail.val(), inputPassword.val(), inputGender.val(), inputAge.val(), inputAddress.val(), inputPhone.val(), inputPay.val(), inputColor.val());

	if (validation(newUser) == true) {
		saveUser(newUser);
		$("input").val("");
	}

}


function init() {
	$("#regbtn").click(register);
}


window.onload = init;
