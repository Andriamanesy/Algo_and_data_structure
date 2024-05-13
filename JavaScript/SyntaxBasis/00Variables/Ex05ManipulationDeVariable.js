/*
Manipulation de variables simples :
Écrivez un programme qui déclare deux variables,
 x et y, leur attribue des valeurs numériques,
  puis échange ces valeurs sans utiliser de variable temporaire.
*/

let a = 4;
let b = 6;

console.log(a, b);
a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
