# Project-TypeScript
# Chapitre 1
En TypeScript, écrivez le code qui suit dans un fichier product.ts :
// définition de la classe
class Product {
private _name: string;
constructor(name: string) {
this._name = name;
}
// setter
set name(name: string) {
this._name = name;
}
// getter
get name(): string {
return this._name;
}
}
// instance de la classe
let bike = new Product('Super Bike');
# Exercice 1
Ajoutez un attribut _ref, puis faites en sorte que le code ci-dessous s’exécute
correctement :
let bike = new Product('Super Bike');
console.log(`name :${bike.ref}, ref : ${bike.ref}`)
# Exercice 2
Soient les classes suivantes. Définissez dans la classe Guitar le nom de l’instrument
“Guitar folk” à l’aide de l’attribut : _instrument. Puis testez en console le code
en affichant, par exemple, le nom de l’instrument à partir d’une instance de la
classe Guitar :
class Music {
protected _instrument: string = 'nothing';
1
play(): string {
return "play music";
}
}
class Guitar extends Music{
// définissez ici le nom de l'instrument
}
Reprenez le code de la classe Music, maintenant cette classe est abstraite.
Implémentez le code dans la classe Guitar pour que celle-ci soit correctement
définie.
abstract class Music {
protected _instrument: string = 'nothing';
abstract makeSound():string;
play(): string {
return "play music";
}
}
class Guitar extends Music{
// Implémentez le code utile
}
let guitar = new Guitar;
console.log(guitar.instrument);
console.log(guitar.makeSound());
Remarques : une classe est dite abstraite lorsqu’au moins une méthode dans
celle-ci est définie comme abstraite. Une classe abstraite ne peut être instanciée,
mais peut comporter du code métier (code qui retourne ou fait quelque chose
dans ses méthodes).
# Exercice 3
Soit l’interface Duck suivante et soit la classe Thing qui implémente l’interface
Duck. Complétez le code dans la classe Thing pour que celle-ci soit correctement
définie.
Remarque : Il ne faut pas préciser la visibilité des méthodes d’une interface, par
définition elles ont toutes la visibilité publique.
Testez votre code en affichant en console une chaîne de caractères renvoyée par
2
la méthode swim().
// définition de l'interface <=> contrat
interface Duck{
name : string ;
swim(): string;
}
class Thing implements Duck{
}
Rappels
Une interface ou une classe permet également de définir des types en TypeScript
:
// Type Recipe
class Recipe{
name : string;
star? : number; // attribut facultatif
}
let recipes = Recipe[] = [];
// Type Bike
interface Bike{
name : string;
type : string;
}
let bikes = Bike[];
# Exercice 4
Soit la définition de la classe Recipe suivante. Ajoutez quelques recettes dans la
variable recipes, puis affichez les valeurs de la variable recipes en console.
class Recipe {
name: string;
star?: number; // ?NameAttribut <=> attribut facultatif
}
let recipes: Recipe[] = [];// Array<Recipe> ~ Recipe[]

# Chapitre 2 Type générique et enum
En TypeScript, vous avez la possibilité de définir une collection de constantes à
l’aide du mot réservé enum :
enum Status{
Published,
Unpublished,
Draft
}
// Une variable peut avoir un type enum
let state : Status = state.Published ;
Typage générique
Il permet de définir pour les fonctions, classes ou interfaces un type non pré-défini
que l’on précisera a posteriori. C’est lors de l’appel de la fonction, l’interface ou
la classe que le type sera précisé :
// T type non pré-défini
function fusion<T>(a: T[], b : T[]): T[]{
return a.contact(b);
}
// On précise le type T à l'appelle de la fonction
let c = funsion<string>(['a','b','c'], ['d','e', 'f']);
# Exercice 1
Implémentez une Queue en TypeScript en définissant une classe Queue et en
utilisant le typage générique. Vous devez dans cette classe redéfinir les méthodes
push et pop :
class Queue<T> {
}
let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1

# Chapitre 3 Les modules
Les modules permettent de découper le code dans différents fichiers et d’importer
le code dans d’autres fichiers.
Les modules ne sont exécutés que dans leur propre scope, pas dans le scope
global. Cela veut dire que si vous avez besoin du code d’un module vous devez
l’exporter puis l’importer dans le fichier.
Pour prendre en compte le support des modules en Javascript et TypeScript,
vous devez compilez le code avec le module commonjs. Voici la ligne de code qui
permet de prendre en compte dans la compilation le support des modules dans
TypeScript :
tsc app.ts --target ES5 --module commonjs --watch
Supposez que vous ayez deux fichiers : un fichier book.ts ou vous définissez la
classe Book et un fichier app.ts où vous importez la classe :
export class Book{
private _name : string;
get name(name : string){ this._name = name ;}
set name(): string { return this._name ;}
}
Le fichier app.ts
import { Book } from './book';
let book = new Book;
book.name = "L'île Mistérieuse";
console.log(book.name);
Compilez le code :
tsc app.ts --target ES5 --module commonjs
Et en exécutant le code à l’aide de node vous verrez s’afficher en console « L’île
Mistérieuse » :
node app.js
