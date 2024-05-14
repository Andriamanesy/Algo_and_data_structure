/*
1.	Calcul de la moyenne :
Écrivez un programme qui demande à l'utilisateur d'entrer trois notes,
 puis calcule et affiche leur moyenne. 

*/

let nombres = Array(12, 13, 40);


let moyenne = (nombres[0] + nombres[1] + nombres[2])/ nombres.length;

console.log("La moyenne de vos notes est: " + moyenne.toPrecision(4));