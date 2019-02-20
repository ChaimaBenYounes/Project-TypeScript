//class Music
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
    play() {
        return "play Guitar";
    }
}
//test 
//let music = new Music();
//console.log(`instrument:${music.instrument}, play : ${music.play()}`);
let guitar = new Guitar();
console.log(guitar.instrument);
console.log(guitar.play());
