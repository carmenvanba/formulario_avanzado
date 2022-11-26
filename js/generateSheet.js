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
if(accountImport["creditCardNumber"] != null){
    document.getElementById("creditCardNumber").innerHTML = accountImport["creditCardNumber"];
    document.getElementById("paypalAccount").style.display= "none";
}else{
    document.getElementById("paypalAccount").innerHTML = accountImport["paypalAccount"];
    document.getElementById("creditCardNumber").style.display= "none";
}//FinSi