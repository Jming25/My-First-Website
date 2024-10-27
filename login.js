function validatePW(){
	var enteredPW = document.getElementById("login-pw").value;
	var correctPW = "1025";
	
	if (enteredPW == correctPW){
		window.location.href = "https://jming25.github.io/My-First-Website/mainpage.html";
	} else {
		alert("Incorrect password");
	}
}


function forgetPW(){
	alert("The password is 1025 😉");
}
