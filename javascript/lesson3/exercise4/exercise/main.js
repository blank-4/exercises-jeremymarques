/*Créer une fonction qui prendra deux nombres en paramètres.
Cette fonction doit retourner le plus grand.*/


function i (nb1 , nb2) {
    if (nb1 > nb2) {
        return nb1;
    } 
    else {
        return nb2;
    }
}

console.log(i(7 , 5));