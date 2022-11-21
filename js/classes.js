//Classes
//Hero
function Hero(){
    //Atributes
    this.image = "../images/amogus01.png";
    this.precio = 2.99;
    this.color = "#f3a623";

    //Methods
    //Getters
    this.getImage = function() {
        return this.image;
    }
    this.getPrecio = function() {
        return this.precio;
    }
    this.getColor = function() {
        return this.color;
    }
    this.getJson = function(){
        var planJson = {
            image: this.image,
            precio: this.precio,
            color: this.color,
        }//Fin Json
        return planJson;
    }
}//Fin Hero


//Classes inherited from Hero
//Master
function Master(){
    Hero.call(this,plan);
    this.image = "../images/amogus02.png";
    this.precio = 5.99;
    this.color = "#e40712";
}//Fin Wizard

//Legend
function Legend(){
    Hero.call(this,plan);
    this.image = "../images/amogus03.png";
    this.precio = 8.99;
    this.color = "#511e9f";
}//Fin Wizard


//User Account
function Account(){
    //Atributes
    this.name;
    this.lastName;
    this.password;
    this.email;
    this.telNumber;
    this.country;
    this.city;
    this.adress;
    this.creditCardNumber;
    this.creditCardCvc;
    this.creditCardExpireDate;
    this.paypalAccount;

    //Getters
    this.getName = function() {
        return this.name;
    }
    this.getLastName = function() {
        return this.lastName;
    }
    this.getEmail = function() {
        return this.email;
    }
    this.getTelNumber = function() {
        return this.telNumber;
    }
    this.getCountry = function() {
        return this.country;
    }
    this.getCity = function() {
        return this.city;
    }
    this.getAdress = function() {
        return this.adress;
    }
    this.getCreditCardNumber = function() {
        return this.creditCardNumber;
    }
    this.getPaypalAccount = function() {
        return this.paypalAccount;
    }
    //GetJson
    this.getJson = function(){
        var accountJson = {
            name: this.name,
            lastName: this.lastName,
            password: this.password,
            email: this.email,
            telNumber: this.telNumber,
            country: this.country,
            city: this.city,
            adress: this.adress,
            creditCardNumber: this.creditCardNumber,
            creditCardCvc: this.creditCardCvc,
            creditCardExpireDate: this.creditCardExpireDate,
            paypalAccount: this.paypalAccount,
        }//Fin Json
        return accountJson;
    }//Fin getJson
    
    //Setters
    this.setName = function(name) {
        this.name = name;
    }
    this.setLastName = function(lastName) {
        this.lastName = lastName;
    }
    this.setPassword = function(password) {
        this.password = password;
    }
    this.setEmail = function(email) {
        this.email = email;
    }
    this.setTelNumber = function(telNumber) {
        this.telNumber = telNumber;
    }
    this.setCountry = function(country) {
        this.country = country;
    }
    this.setCity = function(city) {
        this.city = city;
    }
    this.setAdress = function(adress) {
        this.adress = adress;
    }
    this.setCreditCardNumber = function(creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }
    this.setCreditCardCvc = function(creditCardCvc) {
        this.creditCardCvc = creditCardCvc;
    }
    this.setCreditCardExpireDate = function(creditCardExpireDate) {
        this.creditCardExpireDate = creditCardExpireDate;
    }
    this.setPaypalAccount = function(paypalAccount) {
        this.paypalAccount = paypalAccount;
    }
}



//User Profile
function Profile(){
    //Atributes
    this.icon;
    this.nick;
    this.pronouns;
    this.role;
    this.bio;

    //Methods
    //Getters
    this.getIcon = function() {
        return this.icon;
    }
    this.getNick = function() {
        return this.nick;
    }
    this.getPronouns = function() {
        return this.pronouns;
    }
    this.getRole = function() {
        return this.role;
    }
    this.getBio = function() {
        return this.bio;
    }
    this.getJson = function(){
        var profileJson = {
            icon: this.icon,
            nick: this.nick,
            pronouns: this.pronouns,
            role: this.role,
            bio: this.bio,
        }//Fin Json
        return profileJson;
    }//Fin Json

    //Setters
    this.setIcon = function(icon) {
        this.icon = "../images/"+icon+".jpg";
    }
    this.setNick = function(nick) {
        this.nick = nick;
    }
    this.setPronouns = function(pronouns) {
        this.pronouns = pronouns;
    }
    this.setRole = function(role) {
        this.role = role;
    }
    this.setBio = function(bio) {
        this.bio = bio;
    }
}//Fin Hero
