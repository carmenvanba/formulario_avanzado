//Variables
var profileSaved;
var typePlan;
//Code
//Import profile data
profileSaved = JSON.parse(sessionStorage.getItem('profileSaved'));

document.getElementById("profileName").innerHTML = profileSaved["nick"];
document.getElementById("profilePronouns").innerHTML = profileSaved["pronouns"];
document.getElementById("profileRole").innerHTML = profileSaved["role"];
document.getElementById("profileBio").innerHTML = profileSaved["bio"];

typePlan = sessionStorage.getItem('typePlan');

document.getElementById("masterContent").style.display = "none";
document.getElementById("legendContent").style.display = "none";
if(typePlan == "Master"){
    document.getElementById("masterContent").style.display = "block";
}else if (typePlan == "Legend"){
    document.getElementById("masterContent").style.display = "block";
    document.getElementById("legendContent").style.display = "block";
}//Fin Si