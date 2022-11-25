//Variables
var alertRedInput = "#8C1010";
var defaultInput = "green";
var account = new Account();
var profile = new Profile();
document.getElementById("characterProgress2").style.display = "none"
document.getElementById("characterProgress3").style.display = "none"
document.getElementById("characterProgress4").style.display = "none"
progressBarr(1);

//Validate Step 1
//User Name Validation
function userNameValidation() {
    var userName = document.getElementById("userName");
    var issueArr = [];
    var validated = false;
    //reset error   
    userName.setCustomValidity("");
    userName.style.borderColor = defaultInput;

    if(document.getElementById("userName").value.length==0){
        userName.style.borderColor = alertRedInput;
    }else{
        if (/[-¡!@#$%^&*()_+|~=`{}\[\]:";'<>¿?,.\/]/.test(userName.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            userName.setCustomValidity(issueArr);
            userName.style.borderColor = alertRedInput;
            userName.reportValidity();
        } else {
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
    //reset error   
    userLastName.setCustomValidity("");
    userLastName.style.borderColor = defaultInput;

    if(document.getElementById("userLastName").value.length==0){
        userLastName.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(userLastName.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            userLastName.setCustomValidity(issueArr);
            userLastName.style.borderColor = alertRedInput;
            userLastName.reportValidity();
        } else {
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
     //reset error   
     password.setCustomValidity("");
     password.style.borderColor = defaultInput;

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
            password.reportValidity();
        } else {
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
    //reset error   
    repeatPassword.setCustomValidity("");
    repeatPassword.style.borderColor = defaultInput;

    if(document.getElementById("repeatPassword").value.length==0){
        repeatPassword.style.borderColor = alertRedInput;
    }else{
        if (document.getElementById("repeatPassword").value != document.getElementById("password").value) {
            issueArr.push("Las contraseñas deben ser iguales.");
        }//Fin Si
        if (issueArr.length > 0) {
            repeatPassword.setCustomValidity(issueArr.join("\n"));
            repeatPassword.style.borderColor = alertRedInput;
            repeatPassword.reportValidity();
        } else {
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
    //reset error   
    email.setCustomValidity("");
    email.style.borderColor = defaultInput;

    if(document.getElementById("email").value.length==0){
        email.style.borderColor = alertRedInput;
    }else{
        if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(email.value))){
            issueArr.push("La dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com");
        }//Fin Si
        if (issueArr.length > 0) {
            email.setCustomValidity(issueArr.join("\n"));
            email.style.borderColor = alertRedInput;
            email.reportValidity();
        } else {
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



function validateStep1(){
    var validated = userNameValidation() && userLastNameValidation() && passwordValidation() 
    && repeatPasswordValidation() && emailValidation();
    if(validated){
        //Save the data
        account.setName(document.getElementById("userName").value);
        account.setLastName(document.getElementById("userLastName").value);
        account.setPassword(document.getElementById("password").value);
        account.setEmail(document.getElementById("email").value);
        //Go to the next step
        goToStep2();
        document.getElementById("characterProgress1").style.display = "none"
        document.getElementById("characterProgress2").style.display = "block"
        progressBarr(2);
    }//Fin Si
}//Fin validateStep1




//Validate Step 2
//Telephone Validation
function telNumberValidation() {
    var telNumber = document.getElementById("telNumber");
    var issueArr = [];
    var validated = false;
    //reset error   
    telNumber.setCustomValidity("");
    telNumber.style.borderColor = defaultInput;

    if(document.getElementById("telNumber").value.length==0){
        telNumber.style.borderColor = alertRedInput;
    }else{
        if (!(/(^[0-9]{3}[ ]{0,1}[0-9]{3}[ ]{0,1}[0-9]{3}$)/.test(telNumber.value))) {
            issueArr.push("El teléfono debe cumplir el siguiente formato: 000 000 000 ó 000000000.");
        }//Fin Si
        if (issueArr.length > 0) {
            telNumber.setCustomValidity(issueArr);
            telNumber.style.borderColor = alertRedInput;
            telNumber.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Telephone Validation

//Country Validation
function countryValidation() {
    var country = document.getElementById("country");
    var issueArr = [];
    var validated = false;
    //reset error   
    country.setCustomValidity("");
    country.style.borderColor = defaultInput;

    if(document.getElementById("country").value.length==0){
        country.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(country.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            country.setCustomValidity(issueArr);
            country.style.borderColor = alertRedInput;
            country.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Country Validation


//city Validation
function cityValidation() {
    var city = document.getElementById("city");
    var issueArr = [];
    var validated = false;
    //reset error   
    city.setCustomValidity("");
    city.style.borderColor = defaultInput;

    if(document.getElementById("city").value.length==0){
        city.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(city.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            city.setCustomValidity(issueArr);
            city.style.borderColor = alertRedInput;
            city.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin city Validation

//adress Validation
function adressValidation() {
    var adress = document.getElementById("adress");
    var issueArr = [];
    var validated = false;
    //reset error   
    adress.setCustomValidity("");
    adress.style.borderColor = defaultInput;

    if(document.getElementById("adress").value.length==0){
        adress.style.borderColor = alertRedInput;
    }else{
        if (/[!¡@#$%^&*()_+|~=`{}\[\]:";<>¿?,.\/]/.test(adress.value)) {
            issueArr.push("¡No usar caracteres especiales!");
        }//Fin Si
        if (issueArr.length > 0) {
            adress.setCustomValidity(issueArr);
            adress.style.borderColor = alertRedInput;
            adress.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin adress Validation


function validateStep2(){
    var validated = telNumberValidation() && countryValidation() && cityValidation() && adressValidation();
    if(validated){
        //Save the data
        account.setTelNumber(document.getElementById("telNumber").value);
        account.setCountry(document.getElementById("country").value);
        account.setCity(document.getElementById("city").value);
        account.setAdress(document.getElementById("adress").value);
        //Go to the next step
        goToStep3();
        document.getElementById("characterProgress2").style.display = "none"
        document.getElementById("characterProgress3").style.display = "block"
        progressBarr(3);
    }//Fin Si
}


//Validate Step 3
//Credit Card Number Validation
function creditCardNumberValidation() {
    var creditCardNumber = document.getElementById("creditCardNumber");
    var issueArr = [];
    var validated = false;
    //reset error   
    creditCardNumber.setCustomValidity("");
    creditCardNumber.style.borderColor = defaultInput;

    if(document.getElementById("creditCardNumber").value.length==0){
        creditCardNumber.style.borderColor = alertRedInput;
    }else{
        if (!(/(^[0-9]{4}[ ]{0,1}[0-9]{4}[ ]{0,1}[0-9]{4}$)/.test(creditCardNumber.value))) {
            issueArr.push("El número de la tarjeta debe cumplir el siguiente formato: 1234 1234 1234 ó 123412341234.");
        }//Fin Si
        if (issueArr.length > 0) {
            creditCardNumber.setCustomValidity(issueArr);
            creditCardNumber.style.borderColor = alertRedInput;
            creditCardNumber.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Credit Card Number Validation

//Cvc Validation
function cvcValidation() {
    var cvc = document.getElementById("cvc");
    var issueArr = [];
    var validated = false;
    //reset error   
    cvc.setCustomValidity("");
    cvc.style.borderColor = defaultInput;

    if(document.getElementById("cvc").value.length==0){
        cvc.style.borderColor = alertRedInput;
    }else{
        if (!(/(^[0-9]{3}$)/.test(cvc.value))) {
            issueArr.push("El cvc debe cumplir el siguiente formato: 1234 1234 1234 ó 123412341234.");
        }//Fin Si
        if (issueArr.length > 0) {
            cvc.setCustomValidity(issueArr);
            cvc.style.borderColor = alertRedInput;
            cvc.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin Cvc Validation

//expireDate Validation
function expireDate() {
    var expireDate = document.getElementById("expireDate");
    var issueArr = [];
    var validated = false;
    //reset error   
    expireDate.setCustomValidity("");
    expireDate.style.borderColor = defaultInput;

    if(document.getElementById("expireDate").value.length==0){
        expireDate.style.borderColor = alertRedInput;
    }else{
        if (!(/(^[0-9]{2}\/[0-9]{2}$)/.test(expireDate.value))) {
            issueArr.push("La fecha debe cumplir el siguiente formato: AA/MM.");
        }//Fin Si
        if (issueArr.length > 0) {
            expireDate.setCustomValidity(issueArr);
            expireDate.style.borderColor = alertRedInput;
            expireDate.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin expireDate Validation

function validateStep3(){
    var validated = creditCardNumberValidation() && cvcValidation() && expireDate();
    if(validated){
        //Save the data
        account.setCreditCardNumber(document.getElementById("creditCardNumber").value);
        account.setCreditCardCvc(document.getElementById("cvc").value);
        account.setCreditCardExpireDate(document.getElementById("expireDate").value);
        //account.setPaypalAccount(document.getElementById("paypalAccount").value);
        //Go to the next step
        goToStep4();
        document.getElementById("characterProgress3").style.display = "none"
        document.getElementById("characterProgress4").style.display = "block"
        progressBarr(4);
    }//Fin Si
}


//Step 4
function validateNickName(){
    var nickName = document.getElementById("nickName");
    var issueArr = [];
    var validated = false;
    //reset error   
    nickName.setCustomValidity("");
    nickName.style.borderColor = defaultInput;

    if(document.getElementById("nickName").value.length==0){
        nickName.style.borderColor = alertRedInput;
    }else{
        if (issueArr.length > 0) {
            nickName.setCustomValidity(issueArr);
            nickName.style.borderColor = alertRedInput;
            nickName.reportValidity();
        } else {
            validated=true;
        }//Fin Si
    }//Fin Si
    return validated;
}//Fin validateNickName Validation


function validateStep4(){
    if(validateNickName()){
        progressBarr(5);
        
        //Save the data
        profile.setNick(document.getElementById("nickName").value);
        profile.setBio(document.getElementById("bio").value);
        profile.setPronouns(document.getElementsByName("pronouns").value);
        profile.setRole(document.getElementsByName("player").value);
        
        //Save objects account and profile in sessionstorage
        sessionStorage.setItem('accountSaved',JSON.stringify(account.getJson()));
        sessionStorage.setItem('profileSaved',JSON.stringify(profile.getJson()));

        setTimeout(() => {  
            //Go to the next step
            //window.location.replace("../html/userData.html");
            window.location.replace("../html/prueba1.html");
        }, 1000);
    }//Fin Si
}