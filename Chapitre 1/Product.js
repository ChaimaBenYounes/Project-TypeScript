class Product {
    constructor(name, ref) {
        this._name = name;
        this._ref = ref;
    }
    // setter
    set name(name) {
        this._name = name;
    }
    // getter
    get name() {
        return this._name;
    }
    // setter
    set ref(ref) {
        this._ref = ref;
    }
    // getter
    get ref() {
        return this._ref;
    }
}
// instance de la classe
let bike = new Product('Super Bike', 'ref');
console.log(`name :${bike.name}, ref : ${bike.ref}`);
