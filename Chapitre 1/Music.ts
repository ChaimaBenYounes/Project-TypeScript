/*
Soient les classes suivantes. Définissez dans la classe Guitar le nom de l’instrument
“Guitar folk” à l’aide de l’attribut : _instrument. Puis testez en console le code
en affichant, par exemple, le nom de l’instrument à partir d’une instance de la
classe Guitar :
*/
//class Music
class Music {

    protected _instrument: string = 'nothing';
    

    play(): string {
        return "play music";
    }

    // setter
    set instrument(instrument: string){
        this._instrument = instrument;
    }

    // getter
    get instrument(): string {
        return this._instrument;
    }

}

// Class Guitar
class Guitar extends Music{

    protected _instrument: string = 'Guitar folk';
    
    play(): string {
        return "play Guitar";
    }
}

let guitar = new Guitar();
console.log(guitar.instrument);
console.log(guitar.play());


