//Import profile data
var profileSaved;

profileSaved = JSON.parse(sessionStorage.getItem('profileSaved'));

document.getElementById("profileName").innerHTML = profileSaved["nick"];
document.getElementById("profilePronouns").innerHTML = profileSaved["pronouns"];
document.getElementById("profileRole").innerHTML = profileSaved["role"];
document.getElementById("profileBio").innerHTML = profileSaved["bio"];