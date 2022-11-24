//Variables
var plan;
var typePlan;

//Plan creation
function planHero() {
    plan = new Hero();
    typePlan = "Hero";
    goToFormulary();
}
function planMaster() {
    plan = new Master();
    typePlan = "Master";
    goToFormulary();
}
function planLegend() {
    plan = new Legend();
    typePlan = "Legend";
    goToFormulary();
}

function goToFormulary(){
    //Save plan in Storage and go to form
    sessionStorage.setItem('planSaved',JSON.stringify(plan.getJson()));
    sessionStorage.setItem('typePlan',typePlan);
    window.location.replace("./html/formulary.html");
}