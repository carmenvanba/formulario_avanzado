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



//User Profile
function Profile(icon, nick, pronouns, role, bio){
    //Atributes
    this.icon = "../images/"+icon+".jpg";
    this.nick = nick;
    this.pronouns = pronouns;
    this.role = role;
    this.bio = bio;

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
    }
}//Fin Hero
