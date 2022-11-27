//Variables
var typePlan;

//Plan creation
function planHero() {
    typePlan = "Hero";
    goToFormulary();
}
function planMaster() {
    typePlan = "Master";
    goToFormulary();
}
function planLegend() {
    typePlan = "Legend";
    goToFormulary();
}

function goToFormulary(){
    //Save plan in Storage and go to form
    sessionStorage.setItem('typePlan',typePlan);
    window.location.replace("./html/formulary.html");
}