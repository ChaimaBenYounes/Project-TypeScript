/*
Soit l’interface Duck suivante et soit la classe Thing qui implémente l’interface
Duck. Complétez le code dans la classe Thing pour que celle-ci soit correctement
définie.
Remarque : Il ne faut pas préciser la visibilité des méthodes d’une interface, par
définition elles ont toutes la visibilité publique.
Testez votre code en affichant en console une chaîne de caractères renvoyée par
la méthode swim().
*/
interface Duck{
    name : string ;
    swim(): string;
}

class Thing implements Duck{
    name : string ;
    swim(): string{
        return "swiming";
    }
}

let thing = new Thing();

console.log(thing.swim());