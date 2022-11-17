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