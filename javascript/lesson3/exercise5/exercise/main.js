/* Créer une fonciton qui calcule l'aire d'un cercle :
* Cette fonction prend en paramètre le rayon de ce dernier
* Elle retourne l'aire du cercle

Créer une deuxième fonciton qui calcule le périmètre d'un cercle :
* Elle prend en paramètre le rayon du cercle
* Elle retourne le périmètre

Créer une fonction qui calcule le diamètre d'un cercle :
* Elle prend en paramètre le rayon d'un cercle
* Elle retourne le diamètre */

function aire (rayon) {
    return 3.14 * rayon **2; 
}

console.log(aire(5));

function périmètre (rayon) {
    return 2 * 3.14 * rayon;
}

console.log(périmètre(5));

function diamètre (rayon) {
    return 2 * rayon;
}

console.log(diamètre(5));

