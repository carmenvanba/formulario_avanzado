//Variables
var account = new Account();

//Import Plan from Storage
var accountImport = JSON.parse(sessionStorage.getItem('accountSaved'));
account = accountImport;
console.log(accountImport);
console.log(account);
console.log(account.getName());


console.log()


//document.getElementById("prueba1").textContent = account.getName();
//document.getElementById("prueba1").innerHTML = "El Nombre: "+account.getName();