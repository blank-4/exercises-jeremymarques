// Création d'une requête AJAX
var request = new XMLHttpRequest();
// spécifier la fonction qui va être exécutée à chaque changement d'état de la requête
request.onreadystatechange = function() {
    // Vérification que la requête est terminée (request.readyState == 4)
    // Vérification que la requête s'est bien déroulée (request.status == 200)
    if (request.readyState == 4 && request.status == 200) {
        var data = JSON.parse(this.responseText).records;
        console.log(JSON.parse(this.responseText));
        for (var i = 0; i < data.length; i++) {
            if (data[i].fields.ap_cp == "75020") {
                var p = document.createElement("p");
                p.innerText = data[i].fields.designation_longue + ", " + data[i].fields.ap_cp;
                document.body.appendChild(p);
            }
        }

        /* 
        for (var i in data) {}
        */
    }
};
// Ouverture de la requête
request.open("GET", "https://opendata.paris.fr/api/records/1.0/search/?dataset=equipements_de_proximite&rows=20&facet=mairie_gestionnaire&facet=type_d_equipement&facet=ap_cp&refine.type_d_equipement=Piscine", true);
// Envoi de la requête
request.send();