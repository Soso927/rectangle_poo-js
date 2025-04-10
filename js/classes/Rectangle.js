// Vous mettrez ici le code de la classe Rectangle
class Rectangle 
{
    // je déclare les deux propriétés length et width 
    #length
    #width
    // je mets en place le constructeur 
    constructor(longueur,largeur){
        this.#length = longueur;
        this.#width = largeur;
    }


    get length (){
        return this.#length;
    }

    set length (longueur){
        this.#length = longueur
    }

    get width (){
        return this.#width;
    }

    set width (hauteur){
        this.#width = hauteur;
    }



    perimeter(){
        return 2 * (this.#length + this.#width);
    }

    area(){
        return this.#length * this.#width; 
    }

    isSquare(){
        return this.#length === this.#width;
    }

}