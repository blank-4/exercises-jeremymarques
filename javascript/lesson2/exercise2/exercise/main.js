/*Créez un compteur.

* Il doit compter de 0 à 100. (afficher le nombre à chacune des itérations).
* Maintenant, transformez le pour qu'il compte de deux en deux.
* Inversez le pour qu'il décompte de 2 en 2 de 100 à 0.*/

for ( var i = 0 ; i <= 100 ; i++ ) {
    console.log(i);
}

for ( var i = 0 ; i <= 100 ; i=i+2 ) {
    console.log (i);
}

for ( var i = 100 ; i >= 0 ; i=i-2 ) {
    console.log (i);  
}


