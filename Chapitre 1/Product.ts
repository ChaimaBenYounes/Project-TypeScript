class Product {

    private _name: string;
    private _ref: string;

    constructor(name: string, ref: string) {
        this._name = name;
        this._ref = ref;
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter
    get name(): string {
        return this._name;
    }

    // setter
    set ref(ref: string) {
        this._ref = ref;
    }

    // getter
    get ref(): string {
        return this._ref;
    }
}

// instance de la classe
let bike = new Product('Super Bike', 'ref');
console.log(`name :${bike.name}, ref : ${bike.ref}`);