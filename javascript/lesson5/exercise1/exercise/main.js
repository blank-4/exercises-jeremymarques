/* Amusons un peu avec le DOM !

* Créez une page html contenant une balise "p" vide ayant pour id "texte".
le "p" devra être en display none .

* Avec "innerHTML" ajouter du lorem ipsum dans "texte".

* Créez une fonction "afficher" qui, lorsqu'elle est appelé affiche le texte en changeant son display.

* Ajouter un bouton au dessus du "p" qui lorsque l'on cliquera dessus appellera la fonction "afficher".

* Créez un second bouton qui lorsque l'on cliquera dessus masquera le texte.

* Créez une fonction qui changera la couleur du texte de manière aléatoire et l'affichera dans la console. Enfin exécutez la.
*/

var texte = document.getElementById("texte")

texte.innerHTML = "lorem ipsum";

function afficher() {
    texte.style.display = "block";
}

function masquer() {
    texte.style.display = "none";     
}

function couleur() {
    var color = ["red", "blue", "purple", "green", "yellow", "brown", "black", "white", "grey"]

   var res  = Math.floor(Math.random() * color.length);
   console.log(color[res])
    console.log(res);
    texte.style.color = color[res]; 
}

couleur();
