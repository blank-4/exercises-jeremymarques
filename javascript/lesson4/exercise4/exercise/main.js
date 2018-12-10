/* * Créer une fonction qui porte le nom `exercice4`, elle contiendra le code pour les consignes suivantes :

* Créer une variable `monTableau` de type tableau.
* Elle contient quatre éléments de votre choix (par exemple: `"matin", "midi", "soir","nuit"`).

* Utiliser une méthode qui supprime le premier élément du tableau et le renvoi.
* Afficher cet élément dans la console.

* Utiliser une méthode qui ajoute un élément au tableau et renvoi sa longueur.
* Afficher la longueur du tableau dans la console.

* Utiliser une méthode qui réuni les éléments du tableau et les renvois dans une string.
* Afficher les dans la console sous cette forme : "matin-midi-soir-nuit".

* Utiliser une méthode pour afficher la chaîne caractères de  majuscules dans la console. */

function exercice4() {
    var monTableau = ["matin", "midi", "soir", "nuit"];
    var tab = monTableau.shift();
    console.log(tab);
    // pareil que : console.log(monTableau.shift())
    
    var length = monTableau.push("après-midi");
    console.log(length);
    // pareil que : console.log(monTableau.push("voiture")) 

    var str = monTableau.join("-");
    console.log(str);

    str.toUpperCase();
    console.log(str.toUpperCase());
}

exercice4();

