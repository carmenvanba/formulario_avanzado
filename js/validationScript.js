//Variables
var alertRedInput = "#8C1010";
var defaultInput = "green";


//User Name Validation
function userNameValidation() {
    var username = document.getElementById("userName");
    var issueArr = [];
    var validated = false;
    if(document.getElementById("userName").value.length==0){
        username.style.borderColor = alertRedInput;
    }else{
        if (/[-¡!@#$%^&*()_+|~=`{}\[\]:";'<>¿?,.\/]/.test(username.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            username.setCustomValidity(issueArr);
            username.style.borderColor = alertRedInput;
        } else {
            username.setCustomValidity("");
            username.style.borderColor = defaultInput;
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin User Name Validation

//User last name Validation
function userLastNameValidation() {
    var userLastName = document.getElementById("userLastName");
    var issueArr = [];
    var validated = false;
    if(document.getElementById("userLastName").value.length==0){
        userLastName.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(userLastName.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            userLastName.setCustomValidity(issueArr);
            userLastName.style.borderColor = alertRedInput;
        } else {
            userLastName.setCustomValidity("");
            userLastName.style.borderColor = defaultInput;
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin User last name Validation

//Password Validation
function passwordValidation() {
    var password = document.getElementById("password");
    var issueArr = [];
    var validated = false;
    if(document.getElementById("password").value.length==0){
        password.style.borderColor = alertRedInput;
    }else{
        if (!/^.{7,15}$/.test(password.value)) {
            issueArr.push("La contraseña debe tener entre 7 y 15 caracteres.");
        }//Fin Si
        if (!/\d/.test(password.value)) {
            issueArr.push("Debe tener al menos un número.");
        }//Fin Si
        if (!/[a-z]/.test(password.value)) {
            issueArr.push("Debe tener al menos una letra minúscula.");
        }//Fin Si
        if (!/[A-Z]/.test(password.value)) {
            issueArr.push("Debe tener al menos una letra mayúscula.");
        }//Fin Si
        if (issueArr.length > 0) {
            password.setCustomValidity(issueArr.join("\n"));
            password.style.borderColor = alertRedInput;
        } else {
            password.setCustomValidity("");
            password.style.borderColor = defaultInput;
            validated = true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Password Validation

//Repeat Password Validation
function repeatPasswordValidation() {
    var repeatPassword = document.getElementById("repeatPassword");
    var issueArr = [];
    var validated = false;
    if(document.getElementById("repeatPassword").value.length==0){
        repeatPassword.style.borderColor = alertRedInput;
    }else{
        if (document.getElementById("repeatPassword").value != document.getElementById("password").value) {
            issueArr.push("Las contraseñas deben ser iguales.");
        }//Fin Si
        if (issueArr.length > 0) {
            repeatPassword.setCustomValidity(issueArr.join("\n"));
            repeatPassword.style.borderColor = alertRedInput;
        } else {
            repeatPassword.setCustomValidity("");
            repeatPassword.style.borderColor = defaultInput;
            validated = true;
        }//Fin Si
    }//Fin Si
    return validated;
}// Fin Repeat Password Validation

//Email Validation
function emailValidation() {
    var email = document.getElementById("email");
    var issueArr = [];
    var validated = false;
    if(document.getElementById("email").value.length==0){
        email.style.borderColor = alertRedInput;
    }else{
        if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(email.value))){
            issueArr.push("La dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com");
        }//Fin Si
        if (issueArr.length > 0) {
            email.setCustomValidity(issueArr.join("\n"));
            email.style.borderColor = alertRedInput;
        } else {
            email.setCustomValidity("");
            email.style.borderColor = defaultInput;
            validated = true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Email Validation

//Show Password
function showPassword() {
    var pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }//Fin Si
}//FinShow Password

//Show Password
function showRepeatPassword() {
    var pass = document.getElementById("repeatPassword");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }//Fin Si
}//FinShow Password

//Validate All
function validateStep1(){
    var validated = userNameValidation() && userLastNameValidation() && passwordValidation() 
    && repeatPasswordValidation() && emailValidation();
    if(validated){
        goToStep2();
    }//Fin Si
}