const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Rellene este campo');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Rellene este campo');
	} else if (passwordValue.length > 8 ) {
        setError(password, 'No debe tener más de 8 caracteres.');
	}else{
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'La clave no coincide');
	} else{
		setSuccessFor(password2);
		
	} 
    if (usuarioValue, emailValue, passwordValue, password2Value ==''){
        setErrorFor();
    } else if (usuarioValue ==''){
        setErrorFor();
    }else if (emailValue ==''){
        setErrorFor();
    }else if (passwordValue ==''){
        setErrorFor();
    }else if (password2Value ==''){
        setErrorFor();
    } else{
        alert("La inscripción ha sido correcta");
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


