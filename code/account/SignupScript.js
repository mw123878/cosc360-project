document.getElementById('form').addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    const firstnameValue = document.getElementById('firstname').value.trim();
	const lastnameValue = document.getElementById('lastname').value.trim();
    const usernameValue = document.getElementById('username').value.trim();
	const emailValue = document.getElementById('email').value.trim();
	const passwordValue = document.getElementById('password').value.trim();
	const password2Value = document.getElementById('password2').value.trim();
    
    if(firstnameValue === '') {
		setErrorFor(firstname, 'First Name cannot be blank');
	} else {
		setSuccessFor(firstname);
	}
    
    if(lastnameValue === '') {
		setErrorFor(lastname, 'Last Name cannot be blank');
	} else {
		setSuccessFor(lastname);
	}
    
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email, please insert a valid emil');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password confirmation cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'It does not match');
	} else{
		setSuccessFor(password2);
        jump();
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function jump(){
    window.location.href='SignUpSub.html';
}
