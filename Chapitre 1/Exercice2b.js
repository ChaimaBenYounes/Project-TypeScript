class Music {
    constructor() {
        this._instrument = 'nothing';
    }
    play() {
        return "play music";
    }
    // setter
    set instrument(instrument) {
        this._instrument = instrument;
    }
    // getter
    get instrument() {
        return this._instrument;
    }
}
// Class Guitar
class Guitar extends Music {
    constructor() {
        super(...arguments);
        this._instrument = 'Guitar folk';
    }
    makeSound() {
        return "play Guitar";
    }
}
let guitar = new Guitar();
console.log(guitar.instrument);
console.log(guitar.makeSound());
