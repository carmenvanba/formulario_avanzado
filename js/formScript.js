//Variables
var typePlan;
var profile;
//Import Plan from Storage
var character = getCharacter(sessionStorage.getItem('typePlan'));

var characterArray=document.getElementsByClassName("character");
for(var i=0; i<characterArray.length;i++){
    characterArray[i].src =character;
}




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


/* Progress bar */
$('.progress .circle').removeClass().addClass('circle');
$('.progress .bar').removeClass().addClass('bar');
function progressBarr (i){
    if(i == 0){
        $('.progress .circle').removeClass().addClass('circle');
        $('.progress .bar').removeClass().addClass('bar');
    }else{
    
        $('.progress .circle:nth-of-type(' + i + ')').addClass('active');

        $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');

        $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');

        $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');

        $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');

    }//Fin Si
}