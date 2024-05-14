/*
Portée des variables :
Déclarez une variable à l'extérieur d'une fonction (utilisez var), puis 
déclarez une autre variable avec le même nom à l'intérieur de la fonction 
(utilisez également var). Dans la fonction, affectez une valeur à la variable
 interne. Ensuite, à l'extérieur de la fonction, utilisez console.log() 
 pour afficher la valeur de la variable externe. Que se passe-t-il ?

 resultat est undefined (c'est logique)
*/

var exterieur;

function fct() {
    var exterieur = 3;
}

console.log(exterieur);
