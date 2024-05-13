/*
Utilisation de let et const :
Créez une fonction qui utilise une variable déclarée avec let ou const à
 l'intérieur d'une boucle for. Essayez de modifier cette variable à 
 l'intérieur de la boucle et observez le comportement. Ensuite, déclarez 
 une variable avec const et essayez de la réaffecter à une nouvelle valeur 
 à l'intérieur de la même fonction. Quelle est l'erreur générée ?
*/

const cstlt = function (age){
    for (let index = 0; index < 3; index++) {
       let test= age;
       age ++;
    }
    return test;
}

let age = 30;
age = cstlt(age);
console.log(age);