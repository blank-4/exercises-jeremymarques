/* * Créez une page html contenant une balise "p" avec comme id "horloge".

* Créez une fonction "temps" qui affichera la date dans la balise "p"
et faites en sorte qu'elle se mette à jour à chaque seconde.
*/

var texte = document.querySelector('p');


function temps() {
    var heure = new Date();
    texte.textContent = "Il est très exactement : " + heure.getHours() + " heures " + heure.getMinutes() + " minutes et " + heure.getSeconds() + " secondes";
    setInterval("temps()", 1000);
}

var date = new Date(); 
    var jour = date.getDate() 
    var mois = date.getMonth();
	var annee = date.getFullYear();  
	document.write(" et nous sommes le : " + jour +"/" + mois + "/" + annee);

temps();
