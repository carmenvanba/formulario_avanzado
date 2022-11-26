//Variables
var typePlan;

//Import Account from Storage
var accountImport = JSON.parse(sessionStorage.getItem('accountSaved'));

//Import Plan from Storage
typePlan = sessionStorage.getItem('typePlan');
//Change skin 
//Character
document.getElementById("character").src=getCharacter(typePlan);
//Colors
if(typePlan == "Master"){
    document.querySelector("link[href='../css/heroPlanStyle.css']").href = "../css/masterPlanStyle.css";
}else if(typePlan == "Legend"){
    document.querySelector("link[href='../css/heroPlanStyle.css']").href = "../css/legendPlanStyle.css";
}//Fin Si



document.getElementById("name").innerHTML = accountImport["name"];
document.getElementById("lastName").innerHTML = accountImport["lastName"];
document.getElementById("email").innerHTML = accountImport["email"];
document.getElementById("telNumber").innerHTML = accountImport["telNumber"];
document.getElementById("country").innerHTML = accountImport["country"];
document.getElementById("city").innerHTML = accountImport["city"];
document.getElementById("address").innerHTML = accountImport["adress"];


if((/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(accountImport["paypalAccount"]))){
    document.getElementById("creditCardNumber").style.display= "none";
    document.getElementById("paypalAccount").innerHTML = accountImport["paypalAccount"];
}else{
    document.getElementById("paypalAccount").style.display= "none";
    document.getElementById("creditCardNumber").innerHTML = accountImport["creditCardNumber"];
}//FIn Si


function goToProfile(){
    window.location.replace("../html/userProfile.html");
}