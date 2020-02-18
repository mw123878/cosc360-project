document.getElementById('form').addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const passwordValue = document.getElementById('password').value.trim();
	const password2Value = document.getElementById('password2').value.trim();
	
	
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
	
function jump(){
    window.location.href='ResetSub.html';
}
