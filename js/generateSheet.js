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