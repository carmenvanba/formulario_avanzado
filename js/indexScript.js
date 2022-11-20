//Variables
var plan;

//Plan creation
function planHero() {
    plan = new Hero();
    goToFormulary();
}
function planMaster() {
    plan = new Master();
    goToFormulary();
}
function planLegend() {
    plan = new Legend();
    goToFormulary();
}

function goToFormulary(){
    //Save plan in Storage and go to form
    sessionStorage.setItem('planSaved',JSON.stringify(plan.getJson()));
    window.location.replace("../html/formulary.html");
}