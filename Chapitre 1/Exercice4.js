class Recipe {
}
let recipes = []; // Array<Recipe> ~ Recipe[]
let mockrecipes = [
    { _name: 'nom1', _star: 12 },
    { _name: 'nom2', _star: 15 },
    { _name: 'nom3', _star: 17 },
    { _name: 'nom3' },
    {}
];
/*
 mockrecipes.forEach(recipe => {
     recipes.push(recipe);
 });

*** or
 mockRecipes.forEach(function (recipe) {
    recipes.push(recipe);
});
*/
mockrecipes.forEach(function (recipe) {
    console.log("Name: " + recipe._name + " star(s): " + (recipe._star || 0));
});
console.log(recipes);
