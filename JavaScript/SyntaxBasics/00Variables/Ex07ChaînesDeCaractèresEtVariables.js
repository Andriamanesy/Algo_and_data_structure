/*
Chaînes de caractères et variables :
Créez une variable contenant votre nom complet. 
Ensuite, extrayez et affichez votre prénom en utilisant 
des méthodes de chaîne de caractères.
*/
let nomComplet = "Andriamanesy Brian";

let indiceEspace = nomComplet.indexOf(' ');
let prenom = nomComplet.substring(indiceEspace + 1);

console.log(prenom);
