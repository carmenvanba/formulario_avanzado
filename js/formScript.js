//Variables
var plan;
var profile;
//Import Plan from Storage
plan = JSON.parse(sessionStorage.getItem('planSaved'));





//Hide next steps
document.getElementById("step2").style.display = "none";
document.getElementById("step3").style.display = "none";
document.getElementById("step4").style.display = "none";
document.getElementById("creditCardPayment").style.display = "none";
document.getElementById("paypalPayment").style.display = "none";

function goToStep2() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}
function goToStep3() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
}
function goToStep4() {
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "block";
}

function creditCardPayment(){
    document.getElementById("paypalPayment").style.display = "none";
    document.getElementById("creditCardPayment").style.display = "block";
}
function paypalPayment(){
    document.getElementById("creditCardPayment").style.display = "none";
    document.getElementById("paypalPayment").style.display = "block";
}