/* ## Retourner le nombre de jour de chaque mois

* Créer une fonction : `nombreDeJour` qui prendra deux paramètres.
  * Le premier est le mois voulu sous forme de nombre
  * le second est l'année.
* La fonction retourne le nombre de jour dans le mois appartenant à l'année passée en paramètre.

Conseil: Créer seconde une fonction anneeBissextile qui prendant un paramètre, année, et qui retournera `true` si l'année est bissextile, et `false` si elle ne l'est pas. Cette fonction sera appellée par la première pour déterminer si une année bissextile ou non.

**Voici les étapes :**

### 1. Définir si l'année est bissextile ou non bissextile
Le nombre de jour par mois diffère d'une année à l'autre si cette dernière est bissextile (surtout pour le mois de février).

Pour savoir si une année est bissextile ou non, se réferer à l'algorithme définit sur la page wikipedia : (http://fr.wikipedia.org/wiki/Anne%CC%81e_bissextile)[http://fr.wikipedia.org/wiki/Anne%CC%81e_bissextile]

### 2. Définir le nombre de jour par mois
ATTENTION AU MOIS DE FÉVRIER.

### 3. Retourner le nombre de jour dans le mois */


function nombreDeJour(month, year) {
    var jourParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // si l'année est bissextile ET que le mois sélectionné est celui de février, il faut retourner le nombre de jours dans le mois de février + 1
    if (isAnneeBissextile(year) && month == 2) {
        return jourParMois[month - 1] + 1;
    } else {
        // Sinon on retourne le nombre de jours dans le mois
        return jourParMois[month - 1];
    }
}

function isAnneeBissextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(nombreDeJour(2, 2000));