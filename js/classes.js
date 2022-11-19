//Classes
//Hero
function Hero(plan){
    //Atributes
    this.image = "../images/hero.jpg";
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

    //Setters
    /*
    this.setter = function(var) {
        this.var = varA;
    }
    */
}//Fin Hero


//Classes inherited from Hero
//Master
function Master(plan){
    Hero.call(this,plan);
    this.image = "../images/master.jpg";
    this.precio = 5.99;
    this.color = "#e40712";
}//Fin Wizard

//Legend
function Legend(plan){
    Hero.call(this,plan);
    this.image = "../images/hero.jpg";
    this.precio = 8.99;
    this.color = "#511e9f";
}//Fin Wizard



//User
