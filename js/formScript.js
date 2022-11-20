//Variables
var plan;
var profile;
//Import Plan from Storage
plan = JSON.parse(sessionStorage.getItem('planSaved'));






//document.getElementById("step1").style.display = "none";
document.getElementById("step2").style.display = "none";
document.getElementById("step3").style.display = "none";
document.getElementById("step4").style.display = "none";

function goToStep2() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}