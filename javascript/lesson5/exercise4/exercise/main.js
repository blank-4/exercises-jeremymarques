/* * créer une page html vide .

* Dans votre script créez une fonction qui contiendra le code pour les consignes suivantes :

* déclarer un tableau contenant quatre items .

* insérer une ul contenant quatre li ayant chacune pour contenu un item du tableau . 
*/

var tab = ["matin", "midi", "après-midi", "soir"];

var ul = document.createElement("ul");
         document.body.appendChild(ul);

function list() {
    for (var i = 0; i < tab.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = tab[i];
    }
}
list();