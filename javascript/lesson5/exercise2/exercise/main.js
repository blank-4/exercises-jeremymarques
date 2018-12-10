/* * Créez une html dont le body sera vide .

* Dans votre script créez une fonction qui, elle contiendra le code pour les consignes suivantes :

* Créer une div .

* Attribuez lui une taille et une background-color avec JS.

* Lorsque l'on passe la souris sur la div elle devra changer de couleur de fond . */

function maFonction () {

    var div = document.createElement("div");
    document.body.appendChild(div);

    div.setAttribute("id", "madiv");

    div.style.width = "500px";
    div.style.height = "500px";
    div.style.backgroundColor = "blue";
}
    maFonction();

    var id = document.getElementById("madiv");
    
    id.onmouseover = function() {

    id.style.backgroundColor = "green";
}

id.onmouseout = function() {

    id.style.backgroundColor = "blue";
}








