function readonly(target, key, descriptor){
    descriptor.writable = false; 
    return descriptor;
}

function modify(model: string){
    let newModel = model;

    return function (target, key, descriptor){
        descriptor.value = () =>newModel; 
    };
}
class Bike {

    @readonly
    speed () {
        return 8;
    }

    @modify('electric')
    model(){
        return 'normal'; 
    }
}

let bike = new Bike;

bike.speed = () => 5; 

console.log(bike.speed());
console.log(bike.model());