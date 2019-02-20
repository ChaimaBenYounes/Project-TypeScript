function Feature(config){
    return function (target){
        Object.defineProperty(
            target.prototype, 
            'swim', 
            {
                value: () => config
            }
        )
    }
}

@Feature({
    action: "Nage comme un canard"
})

class Duck {
    
    say(){
        return "Je suis un oiseau";
    }
}

let duck = new Duck; 
console.log(duck.say());
console.log(duck.swim());