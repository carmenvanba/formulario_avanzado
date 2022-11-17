var alertRedInput = "#8C1010";
var defaultInput = "green";

//User Name Validation
function userNameValidation(usernameInput) {
    var username = document.getElementById("userName");
    var issueArr = [];
    if(document.getElementById("userName").value.length==0){
        username.style.borderColor = alertRedInput;
    }else{
        if (/[-¡!@#$%^&*()_+|~=`{}\[\]:";'<>¿?,.\/]/.test(usernameInput)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            username.setCustomValidity(issueArr);
            username.style.borderColor = alertRedInput;
        } else {
            username.setCustomValidity("");
            username.style.borderColor = defaultInput;
        }//Fin Si
    }//Fin Si
}//Fin User Name Validation

//User last name Validation
function userLastNameValidation(userLastNameInput) {
    var userLastName = document.getElementById("userLastName");
    var issueArr = [];
    if(document.getElementById("userLastName").value.length==0){
        userLastName.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(userLastNameInput)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            userLastName.setCustomValidity(issueArr);
            userLastName.style.borderColor = alertRedInput;
        } else {
            userLastName.setCustomValidity("");
            userLastName.style.borderColor = defaultInput;
        }//Fin Si
    }//Fin Si
}//Fin User last name Validation

//Password Validation
function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    console.log("pass");
    if(document.getElementById("password").value.length==0){
        password.style.borderColor = alertRedInput;
    }else{
        if (!/^.{7,15}$/.test(passwordInput)) {
            issueArr.push("La contraseña debe tener entre 7 y 15 caracteres.");
        }//Fin Si
        if (!/\d/.test(passwordInput)) {
            issueArr.push("Debe tener al menos un número.");
        }//Fin Si
        if (!/[a-z]/.test(passwordInput)) {
            issueArr.push("Debe tener al menos una letra minúscula.");
        }//Fin Si
        if (!/[A-Z]/.test(passwordInput)) {
            issueArr.push("Debe tener al menos una letra mayúscula.");
        }//Fin Si
        if (issueArr.length > 0) {
            password.setCustomValidity(issueArr.join("\n"));
            password.style.borderColor = alertRedInput;
        } else {
            password.setCustomValidity("");
            password.style.borderColor = defaultInput;
        }//Fin Si
    }//Fin Si
}//Fin Password Validation

//Repeat Password Validation
//A CORREGIR
function repeatPasswordValidation(repeatPasswordInput) {
    var repeatPassword = document.getElementById("repeatPassword");
    var issueArr = [];
    if(document.getElementById("repeatPassword").value.length==0){
        repeatPassword.style.borderColor = alertRedInput;
    }else{
        if (repeatPasswordInput != document.getElementById("password")) {
            issueArr.push("Las contraseñas deben ser iguales.");
        }//Fin Si
        if (issueArr.length > 0) {
            repeatPassword.setCustomValidity(issueArr.join("\n"));
            repeatPassword.style.borderColor = alertRedInput;
        } else {
            repeatPassword.setCustomValidity("");
            repeatPassword.style.borderColor = defaultInput;
        }//Fin Si
    }//Fin Si
}// Fin Repeat Password Validation

//Email Validation
function emailValidation(emailInput) {
    var email = document.getElementById("email");
    var issueArr = [];
    if(document.getElementById("email").value.length==0){
        email.style.borderColor = alertRedInput;
    }else{
        if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(emailInput))){
            issueArr.push("La dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com");
        }//Fin Si
        if (issueArr.length > 0) {
            email.setCustomValidity(issueArr.join("\n"));
            email.style.borderColor = alertRedInput;
        } else {
            email.setCustomValidity("");
            email.style.borderColor = defaultInput;
        }//Fin Si
    }//Fin Si
}//Fin Email Validation

//Show Password
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }//Fin Si
}//FinShow Password