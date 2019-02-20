abstract class Music {

    protected _instrument: string = 'nothing';
    abstract makeSound():string;
    

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
    
    makeSound(): string {
        return "play Guitar";
    }
}

let guitar = new Guitar();
console.log(guitar.instrument);
console.log(guitar.makeSound());
