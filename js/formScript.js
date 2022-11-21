//Variables
var plan;
var typePlan;
var profile;
//Import Plan from Storage
var planImport = JSON.parse(sessionStorage.getItem('planSaved'));

if(sessionStorage.getItem('typePlan')=="Hero"){
    plan = new Hero();
}else if(sessionStorage.getItem('typePlan')=="Master"){
    plan = new Wizard();
}else{
    plan = new Legend();
}//Fin Si

//Show plan character
    //document.getElementById("espacio1").textContent = plan.getImage();
    //document.getElementById("espacio2").innerHTML = "La imagen: "+plan.getImage();



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