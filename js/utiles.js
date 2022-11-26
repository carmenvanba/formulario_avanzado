
function getCharacter(typePlan){
    var characterType;
    if(typePlan=="Hero"){
        characterType= "../images/yellowChar.gif";
    }else if(typePlan=="Master"){
        characterType="../images/redChar.gif";
    }else{
        characterType ="../images/purpleChar.gif";
    }//Fi
    return characterType;
}