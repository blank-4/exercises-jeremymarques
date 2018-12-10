/* ### CHIFFREMENT DE CÉSAR

* Avant tout, aller regarder ce qu'est le chiffre de César, ou chiffrement par décallage : [https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)

* Créer une fonction `chiffrer`. Elle prendra deux paramètres,  le premier est une String qui sera la phrase à encoder. Le second est le décalage pour le code de César :
  * Cette fonction doit encoder le message et retourner le message encodé.
  * Pour vous aider: voici l'alphabet sous forme de tableau :
  ```js
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ```
* Créer une fonction `dechiffrer` qui prendra les deux mêmes paramètres que la fonction chiffrer.
  * Cette fonction doit déchiffrer le message passé en paramètre avec la clé, elle aussi passée en paramètre.
  * 
  
* Bonus : le programme doit laisser tel quel les charactères non présents dans l'alphabet. */


function chiffrer(str, key) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var res = "";
    
    str = str.toLowerCase();
    // on fait une boucle for pour itérer sur lettres du paramètres str
    for (var i = 0; i < str.length; i++) {
        // récupérer l'index de la lettre a l'index i
        var l = str[i];
        console.log("pour la lettre " + l);
        // récupérer l'index de la lettre dans l'alphabet
        var index = alphabet.indexOf(l);
        // si l'index est supérieure a -1, ma lettre va pouvoir être chiffrée parce qu'elle est contenue dans l'alphabet
        if (index > -1) {
            console.log("l'index initial est : " + index);
            // décaler l'index de "key" pour avoir une nouvelle lettre
            index = index + (key % alphabet.length) + alphabet.length;
            console.log("l'index décalé est : " + index);
            // trouver la lettre qui est située au nouvel index
            var nouvelleLettre = alphabet[index % alphabet.length]; 
            console.log("la nouvelle lettre est : " + nouvelleLettre);
            // ajout de la nouvelle lettre à la fin du résultat
            res = res + nouvelleLettre;
            // ma lettre ne doit pas être chiffrée
        } else {
            // je rajoute ma lettre non chiffrée
            res = res + l;
        }   
    }
    return res;
}

function dechiffrer(str, key) {
    return chiffrer(str - key);   
}

//doit encoder bienenue 
console.log(chiffrer("bienenue", 5));

// doit encoder Bienenue avec une majuscule
console.log(chiffrer("Bienenue", 5));

// doit encoder bienenue avec une virgule et caractère spéciaux
console.log(chiffrer("bienvenue, ù%", 5));

// doit encoder bienenue avec une clé de 31 
console.log(chiffrer("bienenue", 31));

// doit encoder bienenue avec une clé inférieure à 0
console.log(chiffrer("bienenue", -21));

// doit encoder bienenue avec une clé inférieure à 0
console.log(chiffrer("bienenue", -47));

// doit déchiffrer notre code
console.log(dechiffrer("gnjsjszj", -47));



 